import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Clock, MapPin, Phone, Star } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyP,
  TypographyLead,
} from "@/components/ui/typography";

export default function Home() {
  return (
    <>
      <StructuredData type="restaurant" />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-accent/20 to-accent/10 dark:from-accent/10 dark:to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <TypographyH1 className="text-5xl md:text-7xl text-primary mb-6 font-medium">
            Station2290
          </TypographyH1>
          <TypographyLead className="text-xl md:text-2xl text-primary/80 mb-8 max-w-3xl mx-auto">
            Уютная кофейня в сердце Махачкалы, где встречаются традиции и современность
          </TypographyLead>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="text-lg py-2 px-4">
              <Coffee className="w-5 h-5 mr-2" />
              Свежеобжаренный кофе
            </Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">
              🍸 Авторские коктейли
            </Badge>
            <Badge variant="secondary" className="text-lg py-2 px-4">
              🧁 Изысканные десерты
            </Badge>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="text-lg px-8">
              <Link href="/menu">Посмотреть меню</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg px-8">
              <Link href="/about">О нас</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <TypographyH2 className="text-center mb-12 text-foreground font-medium">
            Почему выбирают Station2290?
          </TypographyH2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Coffee className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Качественный кофе</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Мы используем только лучшие сорта кофе, обжаренные по авторским рецептам для получения идеального вкуса
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Всегда свежее</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Ежедневная обжарка кофе, свежая выпечка и десерты, приготовленные нашими кондитерами
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Удобное расположение</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Находимся в центре Махачкалы, легко добраться на транспорте или пешком
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <TypographyH2 className="text-center mb-12 text-foreground font-medium">
            Наше меню
          </TypographyH2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Coffee className="w-6 h-6 mr-2 text-primary" />
                  Кофе
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Эспрессо</span>
                    <span className="font-medium">от 150₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Капучино</span>
                    <span className="font-medium">от 220₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Латте</span>
                    <span className="font-medium">от 250₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Раф</span>
                    <span className="font-medium">от 280₽</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild className="w-full mt-4">
                  <Link href="/menu#coffee">Все кофейные напитки</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  🍸 Коктейли
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Мохито</span>
                    <span className="font-medium">от 350₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Пина колада</span>
                    <span className="font-medium">от 420₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Дайкири</span>
                    <span className="font-medium">от 380₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Авторские коктейли</span>
                    <span className="font-medium">от 450₽</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild className="w-full mt-4">
                  <Link href="/menu#cocktails">Все коктейли</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  🧁 Десерты
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Тирамису</span>
                    <span className="font-medium">от 320₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Чизкейк</span>
                    <span className="font-medium">от 280₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Круассаны</span>
                    <span className="font-medium">от 180₽</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Авторские торты</span>
                    <span className="font-medium">от 380₽</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm" asChild className="w-full mt-4">
                  <Link href="/menu#desserts">Все десерты</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <TypographyH2 className="text-center mb-12 text-foreground font-medium">
            Посетите нас
          </TypographyH2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <TypographyH3 className="mb-2">Адрес</TypographyH3>
                  <TypographyP className="text-muted-foreground">
                    г. Махачкала, ул. Примерная, 2290<br />
                    (рядом с центральным парком)
                  </TypographyP>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <TypographyH3 className="mb-2">Часы работы</TypographyH3>
                  <TypographyP className="text-muted-foreground">
                    Понедельник - Воскресенье<br />
                    08:00 - 23:00
                  </TypographyP>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <TypographyH3 className="mb-2">Контакты</TypographyH3>
                  <TypographyP className="text-muted-foreground">
                    +7 (8722) 22-90-22<br />
                    info@station2290.ru
                  </TypographyP>
                </div>
              </div>

              <Button asChild size="lg" className="mt-6">
                <Link href="/contact">Связаться с нами</Link>
              </Button>
            </div>

            <div className="bg-muted rounded-lg p-8 text-center">
              <TypographyH3 className="mb-4">Забронировать столик</TypographyH3>
              <TypographyP className="text-muted-foreground mb-6">
                Позвоните нам или приходите без записи. Мы всегда рады новым гостям!
              </TypographyP>
              <div className="flex items-center justify-center space-x-1 text-primary">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                4.8/5 на основе 127 отзывов
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
