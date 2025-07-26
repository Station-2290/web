import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffee, Wine, Cake, Leaf, Flame, Star } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyLead,
} from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Меню",
  description: "Меню кофейни Station2290 в Махачкале: свежеобжаренный кофе от 150₽, авторские коктейли от 350₽, изысканные десерты от 180₽. Большой выбор эспрессо, капучино, латте, мохито и тирамису.",
  keywords: ["меню station2290", "кофе цены махачкала", "коктейли цены", "десерты кофейня", "эспрессо капучино латте", "мохито тирамису"],
};

const coffeeMenu = [
  {
    name: "Эспрессо",
    description: "Классический итальянский эспрессо из зёрен собственной обжарки",
    price: "150₽",
    category: "classic",
    isPopular: true
  },
  {
    name: "Американо",
    description: "Эспрессо с горячей водой для мягкого вкуса",
    price: "180₽",
    category: "classic"
  },
  {
    name: "Капучино",
    description: "Эспрессо с взбитым молоком и воздушной пенкой",
    price: "220₽",
    category: "milk",
    isPopular: true
  },
  {
    name: "Латте",
    description: "Нежное сочетание эспрессо и молока с тонким слоем пенки",
    price: "250₽",
    category: "milk"
  },
  {
    name: "Флэт Уайт",
    description: "Двойной эспрессо с микропенкой для истинных ценителей",
    price: "280₽",
    category: "milk"
  },
  {
    name: "Раф",
    description: "Авторский кофе со сливками и ванильным сиропом",
    price: "280₽",
    category: "signature",
    isPopular: true
  },
  {
    name: "Мокко",
    description: "Кофе с шоколадом и взбитыми сливками",
    price: "320₽",
    category: "signature"
  },
  {
    name: "Кофе по-восточному",
    description: "Традиционный кофе в турке с кардамоном",
    price: "200₽",
    category: "signature"
  }
];

const cocktailMenu = [
  {
    name: "Мохито",
    description: "Классический мохито с мятой, лаймом и содовой",
    price: "350₽",
    category: "classic",
    isPopular: true
  },
  {
    name: "Пина Колада",
    description: "Тропический коктейль с кокосом и ананасом",
    price: "420₽",
    category: "tropical"
  },
  {
    name: "Дайкири",
    description: "Освежающий коктейль с ромом и лаймом",
    price: "380₽",
    category: "classic"
  },
  {
    name: "Station Spritz",
    description: "Авторский коктейль с просекко и горными травами",
    price: "450₽",
    category: "signature",
    isPopular: true
  },
  {
    name: "Махачкала Мул",
    description: "Локальная версия Moscow Mule с дагестанскими специями",
    price: "420₽",
    category: "signature"
  },
  {
    name: "Sunset Boulevard",
    description: "Яркий коктейль с гранатовым соком и цитрусами",
    price: "400₽",
    category: "signature"
  },
  {
    name: "Virgin Mojito",
    description: "Безалкогольный мохито с мятой и лаймом",
    price: "280₽",
    category: "virgin"
  },
  {
    name: "Fresh Lemonade",
    description: "Домашний лимонад с травами",
    price: "250₽",
    category: "virgin"
  }
];

const dessertMenu = [
  {
    name: "Тирамису",
    description: "Классический итальянский десерт с маскарпоне и кофе",
    price: "320₽",
    category: "classic",
    isPopular: true
  },
  {
    name: "Чизкейк New York",
    description: "Нежный сырный торт с ягодным соусом",
    price: "280₽",
    category: "classic"
  },
  {
    name: "Круассан с шоколадом",
    description: "Свежий французский круассан с тёмным шоколадом",
    price: "180₽",
    category: "pastry"
  },
  {
    name: "Круассан с миндалём",
    description: "Воздушный круассан с миндальным кремом",
    price: "200₽",
    category: "pastry"
  },
  {
    name: "Панна-котта",
    description: "Итальянский десерт с ягодами и карамелью",
    price: "290₽",
    category: "classic"
  },
  {
    name: "Дагестанская пахлава",
    description: "Традиционная восточная сладость с орехами и мёдом",
    price: "220₽",
    category: "traditional",
    isPopular: true
  },
  {
    name: "Чурчхела кофейная",
    description: "Авторская чурчхела с кофейным вкусом",
    price: "150₽",
    category: "traditional"
  },
  {
    name: "Торт Station",
    description: "Фирменный многослойный торт с кремом и фруктами",
    price: "380₽",
    category: "signature"
  }
];

interface MenuItemType {
  name: string;
  description: string;
  price: string;
  category: string;
  isPopular?: boolean;
}

function MenuCard({ item, icon }: { item: MenuItemType, icon?: React.ReactNode }) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg flex items-center gap-2">
              {icon}
              {item.name}
              {item.isPopular && (
                <Badge variant="secondary" className="text-xs">
                  <Star className="w-3 h-3 mr-1" />
                  Популярное
                </Badge>
              )}
            </CardTitle>
          </div>
          <div className="text-xl font-bold text-primary">{item.price}</div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm">{item.description}</p>
      </CardContent>
    </Card>
  );
}

export default function MenuPage() {
  return (
    <>
      <StructuredData type="menu" />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-accent/10 dark:from-accent/10 dark:to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TypographyH1 className="text-4xl md:text-6xl text-primary mb-6 font-medium">
              Наше меню
            </TypographyH1>
            <TypographyLead className="text-xl md:text-2xl text-primary/80 mb-8">
              Выберите из нашего разнообразного меню кофе, коктейлей и десертов
            </TypographyLead>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="coffee" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="coffee" className="flex items-center gap-2">
                <Coffee className="w-4 h-4" />
                Кофе
              </TabsTrigger>
              <TabsTrigger value="cocktails" className="flex items-center gap-2">
                <Wine className="w-4 h-4" />
                Коктейли
              </TabsTrigger>
              <TabsTrigger value="desserts" className="flex items-center gap-2">
                <Cake className="w-4 h-4" />
                Десерты
              </TabsTrigger>
            </TabsList>

            <TabsContent value="coffee" className="mt-8" id="coffee">
              <div className="mb-8">
                <TypographyH2 className="mb-4 text-foreground font-medium">
                  Кофейная карта
                </TypographyH2>
                <TypographyP className="text-lg text-muted-foreground">
                  Наш кофе обжаривается ежедневно для сохранения свежести и аромата. 
                  Мы используем зёрна из лучших кофейных регионов мира.
                </TypographyP>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coffeeMenu.map((item, index) => (
                  <MenuCard 
                    key={index} 
                    item={item} 
                    icon={<Coffee className="w-5 h-5 text-primary" />} 
                  />
                ))}
              </div>

              <div className="mt-12 p-6 bg-accent/20 rounded-lg">
                <TypographyH3 className="mb-4 text-primary">
                  Дополнительные опции
                </TypographyH3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span>Дополнительная порция эспрессо</span>
                      <span className="font-medium">+50₽</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Альтернативное молоко (овсяное, миндальное)</span>
                      <span className="font-medium">+30₽</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Сироп (ваниль, карамель, лесной орех)</span>
                      <span className="font-medium">+25₽</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span>Увеличенная порция</span>
                      <span className="font-medium">+40₽</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Декаф</span>
                      <span className="font-medium">без доплаты</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Кофе с собой</span>
                      <span className="font-medium">-10%</span>
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cocktails" className="mt-8" id="cocktails">
              <div className="mb-8">
                <TypographyH2 className="mb-4 text-foreground font-medium">
                  Коктейльная карта
                </TypographyH2>
                <TypographyP className="text-lg text-muted-foreground">
                  Авторские и классические коктейли от нашего бармена-миксолога. 
                  Все коктейли готовятся из качественных ингредиентов.
                </TypographyP>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cocktailMenu.map((item, index) => (
                  <MenuCard 
                    key={index} 
                    item={item} 
                    icon={
                      item.category === 'virgin' ? 
                        <Leaf className="w-5 h-5 text-primary" /> : 
                        <Wine className="w-5 h-5 text-secondary-foreground" />
                    } 
                  />
                ))}
              </div>

              <div className="mt-12 p-6 bg-secondary rounded-lg">
                <TypographyH3 className="mb-4 text-secondary-foreground">
                  Информация о коктейлях
                </TypographyH3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <TypographyH4 className="mb-2">Безалкогольные альтернативы</TypographyH4>
                    <p className="text-muted-foreground">
                      Любой коктейль можно приготовить в безалкогольной версии. 
                      Стоимость снижается на 100-150₽.
                    </p>
                  </div>
                  <div>
                    <TypographyH4 className="mb-2">Happy Hour</TypographyH4>
                    <p className="text-muted-foreground">
                      Каждый будний день с 14:00 до 16:00 скидка 20% на все коктейли.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="desserts" className="mt-8" id="desserts">
              <div className="mb-8">
                <TypographyH2 className="mb-4 text-foreground font-medium">
                  Десертная карта
                </TypographyH2>
                <TypographyP className="text-lg text-muted-foreground">
                  Наши десерты готовятся ежедневно из свежих ингредиентов. 
                  Сочетание европейских и традиционных дагестанских сладостей.
                </TypographyP>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dessertMenu.map((item, index) => (
                  <MenuCard 
                    key={index} 
                    item={item} 
                    icon={
                      item.category === 'traditional' ? 
                        <Flame className="w-5 h-5 text-destructive" /> : 
                        <Cake className="w-5 h-5 text-accent-foreground" />
                    } 
                  />
                ))}
              </div>

              <div className="mt-12 p-6 bg-muted rounded-lg">
                <TypographyH3 className="mb-4 text-accent-foreground">
                  Индивидуальные заказы
                </TypographyH3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <TypographyH4 className="mb-2">Торты на заказ</TypographyH4>
                    <p className="text-muted-foreground">
                      Изготавливаем торты для особых случаев. Минимальный заказ за 2 дня. 
                      Стоимость от 1500₽ за кг.
                    </p>
                  </div>
                  <div>
                    <TypographyH4 className="mb-2">Диетические опции</TypographyH4>
                    <p className="text-muted-foreground">
                      Предлагаем десерты без глютена и сахара. Веганские варианты по запросу.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
    </>
  );
}