import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Navigation, Car } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographyLead,
} from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты кофейни Station2290 в Махачкале: адрес ул. Примерная, 2290, телефон +7 (8722) 22-90-22, режим работы 08:00-23:00. Как добраться, парковка, онлайн бронирование столиков.",
  keywords: ["контакты station2290", "адрес кофейня махачкала", "телефон station2290", "как добраться", "бронирование столиков"],
};

export default function ContactPage() {
  return (
    <>
      <StructuredData type="local-business" />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-accent/10 dark:from-accent/10 dark:to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TypographyH1 className="text-4xl md:text-6xl text-primary mb-6 font-medium">
              Контакты
            </TypographyH1>
            <TypographyLead className="text-xl md:text-2xl text-primary/80 mb-8">
              Мы всегда рады видеть вас в Station2290
            </TypographyLead>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <TypographyH2 className="mb-8 text-foreground font-medium">
                    Информация для связи
                  </TypographyH2>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <MapPin className="w-6 h-6 text-primary" />
                      Наш адрес
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TypographyP className="text-lg mb-2">г. Махачкала, ул. Примерная, 2290</TypographyP>
                    <TypographyP className="text-muted-foreground mb-4">
                      (рядом с центральным парком им. Ленина)
                    </TypographyP>
                    <Button variant="outline" size="sm">
                      <Navigation className="w-4 h-4 mr-2" />
                      Построить маршрут
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Phone className="w-6 h-6 text-primary" />
                      Телефон
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TypographyP className="text-lg mb-2">+7 (8722) 22-90-22</TypographyP>
                    <TypographyP className="text-muted-foreground mb-4">
                      Для бронирования столиков и заказов
                    </TypographyP>
                    <Button variant="outline" size="sm">
                      <Phone className="w-4 h-4 mr-2" />
                      Позвонить сейчас
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Mail className="w-6 h-6 text-primary" />
                      Электронная почта
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TypographyP className="text-lg mb-2">info@station2290.ru</TypographyP>
                    <TypographyP className="text-muted-foreground mb-4">
                      Для корпоративных заказов и сотрудничества
                    </TypographyP>
                    <Button variant="outline" size="sm">
                      <Mail className="w-4 h-4 mr-2" />
                      Написать письмо
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Clock className="w-6 h-6 text-primary" />
                      Режим работы
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Понедельник - Четверг</span>
                        <span className="font-medium">08:00 - 22:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Пятница - Суббота</span>
                        <span className="font-medium">08:00 - 23:00</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Воскресенье</span>
                        <span className="font-medium">09:00 - 22:00</span>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-accent/20 rounded-lg">
                      <p className="text-sm text-primary">
                        💡 Кухня работает до 21:30. Последний заказ коктейлей принимается за час до закрытия.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div className="space-y-8">
                {/* Mock Map */}
                <Card>
                  <CardHeader>
                    <CardTitle>Как нас найти</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted rounded-lg h-64 flex items-center justify-center mb-4">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 mx-auto mb-2 text-primary" />
                        <p className="text-muted-foreground">
                          Интерактивная карта
                        </p>
                        <p className="text-sm text-muted-foreground">
                          ул. Примерная, 2290
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Transportation */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Car className="w-6 h-6 text-primary" />
                      Как добраться
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">На общественном транспорте</h4>
                        <p className="text-muted-foreground text-sm">
                          Автобусы: №1, №5, №12 - остановка &quot;Центральный парк&quot;<br />
                          Маршрутки: №15, №23, №45 - остановка &quot;Площадь Ленина&quot;
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">На автомобиле</h4>
                        <p className="text-muted-foreground text-sm">
                          Бесплатная парковка на 15 мест перед кофейней.<br />
                          Дополнительно: платная парковка ТЦ &quot;Центр&quot; (5 минут пешком)
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-2">Пешком из центра</h4>
                        <p className="text-muted-foreground text-sm">
                          От ж/д вокзала: 15 минут<br />
                          От площади Ленина: 5 минут<br />
                          От набережной: 10 минут
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Booking Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Бронирование столиков</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-muted-foreground">
                        Мы принимаем резервы столиков на любое время. Особенно рекомендуем 
                        бронировать места для групп от 4 человек и в выходные дни.
                      </p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">Резерв на 2-3 часа</span>
                          <span className="text-sm font-medium">Бесплатно</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Корпоративные мероприятия</span>
                          <span className="text-sm font-medium">По договоренности</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">Частные вечеринки</span>
                          <span className="text-sm font-medium">От 10,000₽</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-2">
                        <Button className="flex-1">
                          <Phone className="w-4 h-4 mr-2" />
                          Забронировать по телефону
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Mail className="w-4 h-4 mr-2" />
                          Заявка на почту
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card>
                  <CardHeader>
                    <CardTitle>Мы в социальных сетях</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span>📱 Telegram</span>
                        <Button variant="ghost" size="sm">@station2290</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>📷 Instagram</span>
                        <Button variant="ghost" size="sm">@station2290_mhk</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>👥 ВКонтакте</span>
                        <Button variant="ghost" size="sm">vk.com/station2290</Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Следите за новинками меню, акциями и мероприятиями в наших социальных сетях!
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}