import Link from "next/link";
import { Coffee, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Coffee className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-foreground font-medium">Station2290</span>
            </Link>
            <p className="text-sm">
              Уютная кофейня в сердце Махачкалы, где встречаются традиции и современность.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://t.me/station2290" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Telegram"
              >
                📱
              </Link>
              <Link 
                href="https://instagram.com/station2290_mhk" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                📷
              </Link>
              <Link 
                href="https://vk.com/station2290" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="ВКонтакте"
              >
                👥
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:text-primary transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm hover:text-primary transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm hover:text-primary transition-colors">
                  Меню
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary transition-colors">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <Link 
                  href="https://maps.google.com/?q=Махачкала,+ул.+Примерная,+2290" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-primary transition-colors"
                >
                  г. Махачкала, ул. Примерная, 2290
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <Link href="tel:+78722229022" className="text-sm hover:text-primary transition-colors">
                  +7 (8722) 22-90-22
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <Link href="mailto:info@station2290.ru" className="text-sm hover:text-primary transition-colors">
                  info@station2290.ru
                </Link>
              </li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Режим работы</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Ежедневно</span>
              </div>
              <div className="text-sm space-y-1 ml-6">
                <p>Пн-Чт: 08:00 - 22:00</p>
                <p>Пт-Сб: 08:00 - 23:00</p>
                <p>Вс: 09:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Station2290. Все права защищены.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}