# Variables
SSH_HOST ?= 85.193.95.44
SSH_USER ?= root
SSH_PORT ?= 22
REMOTE_DIR ?= /usr/src/app
APP_NAME ?= web-app
DOMAIN ?= station2290.ru
EMAIL ?= n1k3f1t@gmail.com

# Colors
GREEN=\033[0;32m
YELLOW=\033[1;33m
NC=\033[0m # No Color

# Local development
.PHONY: dev
dev:
	@echo "$(GREEN)Starting development server...$(NC)"
	pnpm dev

.PHONY: build
build:
	@echo "$(GREEN)Building application...$(NC)"
	pnpm build

.PHONY: start
start:
	@echo "$(GREEN)Starting production server...$(NC)"
	pnpm start

# Remote deployment
.PHONY: deploy
deploy: build
	@echo "$(YELLOW)Deploying to VPS...$(NC)"
	@echo "$(GREEN)1. Uploading files...$(NC)"
	rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env.local' \
		-e "ssh -p $(SSH_PORT)" \
		./ $(SSH_USER)@$(SSH_HOST):$(REMOTE_DIR)/
	@echo "$(GREEN)2. Installing dependencies and starting app...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'cd $(REMOTE_DIR) && \
		npm install --production && \
		npm run build && \
		pm2 restart $(APP_NAME) || pm2 start npm --name $(APP_NAME) -- start'
	@echo "$(GREEN)Deployment complete!$(NC)"

.PHONY: quick-deploy
quick-deploy:
	@echo "$(YELLOW)Quick deploying changes to VPS...$(NC)"
	@echo "$(GREEN)1. Uploading source files...$(NC)"
	rsync -avz --exclude 'node_modules' --exclude '.git' --exclude '.env.local' --exclude '.next' \
		-e "ssh -p $(SSH_PORT)" \
		./ $(SSH_USER)@$(SSH_HOST):$(REMOTE_DIR)/
	@echo "$(GREEN)2. Building and restarting app...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'cd $(REMOTE_DIR) && \
		npm run build && \
		pm2 restart $(APP_NAME)'
	@echo "$(GREEN)Quick deployment complete!$(NC)"

.PHONY: restart-app
restart-app:
	@echo "$(YELLOW)Restarting application on VPS...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'pm2 restart $(APP_NAME)'
	@echo "$(GREEN)Application restarted!$(NC)"

.PHONY: rebuild-app
rebuild-app:
	@echo "$(YELLOW)Rebuilding application on VPS...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'cd $(REMOTE_DIR) && \
		npm run build && \
		pm2 restart $(APP_NAME)'
	@echo "$(GREEN)Application rebuilt and restarted!$(NC)"

.PHONY: deploy-setup
deploy-setup:
	@echo "$(YELLOW)Setting up deployment environment on VPS...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'mkdir -p $(REMOTE_DIR)'
	@echo "$(GREEN)Installing Node.js and PM2...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash - && \
		sudo apt-get install -y nodejs && \
		sudo npm install -g pm2 && \
		pm2 startup systemd -u $(SSH_USER) --hp /home/$(SSH_USER)'
	@echo "$(GREEN)Setup complete!$(NC)"

.PHONY: logs
logs:
	@echo "$(GREEN)Fetching application logs...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'pm2 logs $(APP_NAME) --lines 50'

.PHONY: status
status:
	@echo "$(GREEN)Checking application status...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'pm2 status'

.PHONY: restart
restart:
	@echo "$(YELLOW)Restarting application...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'pm2 restart $(APP_NAME)'
	@echo "$(GREEN)Application restarted!$(NC)"

.PHONY: stop
stop:
	@echo "$(YELLOW)Stopping application...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'pm2 stop $(APP_NAME)'
	@echo "$(GREEN)Application stopped!$(NC)"

# Nginx setup
.PHONY: nginx-setup
nginx-setup:
	@echo "$(YELLOW)Setting up Nginx reverse proxy...$(NC)"
	@echo "$(GREEN)Creating Nginx configuration...$(NC)"
	scp -P $(SSH_PORT) nginx.conf $(SSH_USER)@$(SSH_HOST):/tmp/$(APP_NAME).conf
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'sudo mv /tmp/$(APP_NAME).conf /etc/nginx/sites-available/$(APP_NAME) && \
		sudo ln -sf /etc/nginx/sites-available/$(APP_NAME) /etc/nginx/sites-enabled/ && \
		echo "# Rate limiting zones for $(APP_NAME)" | sudo tee /etc/nginx/conf.d/$(APP_NAME)-rate-limiting.conf > /dev/null && \
		echo "limit_req_zone \$$binary_remote_addr zone=api:10m rate=10r/s;" | sudo tee -a /etc/nginx/conf.d/$(APP_NAME)-rate-limiting.conf > /dev/null && \
		echo "limit_req_zone \$$binary_remote_addr zone=general:10m rate=1r/s;" | sudo tee -a /etc/nginx/conf.d/$(APP_NAME)-rate-limiting.conf > /dev/null && \
		sudo nginx -t && \
		sudo systemctl reload nginx'
	@echo "$(GREEN)Nginx configured!$(NC)"

# SSL setup
.PHONY: ssl-setup
ssl-setup:
	@echo "$(YELLOW)Setting up Let's Encrypt SSL certificate...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'sudo certbot --nginx -d $(DOMAIN) -d www.$(DOMAIN) \
		--non-interactive --agree-tos -m $(EMAIL)'
	@echo "$(GREEN)SSL certificate installed!$(NC)"

.PHONY: ssl-renew
ssl-renew:
	@echo "$(YELLOW)Renewing SSL certificate...$(NC)"
	ssh -p $(SSH_PORT) $(SSH_USER)@$(SSH_HOST) 'sudo certbot renew'
	@echo "$(GREEN)SSL certificate renewed!$(NC)"

# Complete setup
.PHONY: full-setup
full-setup: deploy-setup deploy nginx-setup ssl-setup
	@echo "$(GREEN)Full setup complete! Your app is running at https://$(DOMAIN)$(NC)"

# Help
.PHONY: help
help:
	@echo "Available commands:"
	@echo "  $(GREEN)make dev$(NC)          - Start development server"
	@echo "  $(GREEN)make build$(NC)        - Build the application"
	@echo "  $(GREEN)make deploy$(NC)       - Full deploy to VPS (with dependencies)"
	@echo "  $(GREEN)make quick-deploy$(NC) - Quick deploy (source files only)"
	@echo "  $(GREEN)make restart-app$(NC)  - Restart application on VPS"
	@echo "  $(GREEN)make rebuild-app$(NC)  - Rebuild and restart app on VPS"
	@echo "  $(GREEN)make deploy-setup$(NC) - Initial VPS setup (Node.js, PM2)"
	@echo "  $(GREEN)make logs$(NC)         - View application logs"
	@echo "  $(GREEN)make status$(NC)       - Check application status"
	@echo "  $(GREEN)make restart$(NC)      - Restart the application"
	@echo "  $(GREEN)make stop$(NC)         - Stop the application"
	@echo "  $(GREEN)make nginx-setup$(NC)  - Configure Nginx reverse proxy"
	@echo "  $(GREEN)make ssl-setup$(NC)    - Setup Let's Encrypt SSL"
	@echo "  $(GREEN)make ssl-renew$(NC)    - Renew SSL certificate"
	@echo "  $(GREEN)make full-setup$(NC)   - Complete setup (deploy + nginx + SSL)"
	@echo ""
	@echo "Configuration variables (set via environment or make arguments):"
	@echo "  SSH_HOST   - VPS hostname/IP (current: $(SSH_HOST))"
	@echo "  SSH_USER   - SSH username (current: $(SSH_USER))"
	@echo "  SSH_PORT   - SSH port (current: $(SSH_PORT))"
	@echo "  REMOTE_DIR - Remote directory (current: $(REMOTE_DIR))"
	@echo "  APP_NAME   - PM2 app name (current: $(APP_NAME))"
	@echo "  DOMAIN     - Your domain (current: $(DOMAIN))"
	@echo "  EMAIL      - Email for Let's Encrypt (current: $(EMAIL))"

.DEFAULT_GOAL := help