import { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Coffee, Heart, Award, Users } from "lucide-react";
import { StructuredData } from "@/components/structured-data";
import {
  TypographyH1,
  TypographyH2,
  TypographyP,
  TypographyLead,
} from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "О нас",
  description: "Узнайте историю Station2290 - уютной кофейни в центре Махачкалы. Наша команда профессионалов создает особую атмосферу для любителей качественного кофе, коктейлей и десертов.",
  keywords: ["о нас station2290", "история кофейни", "команда station2290", "кофейня махачкала история"],
};

export default function AboutPage() {
  return (
    <>
      <StructuredData type="about" />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-accent/20 to-accent/10 dark:from-accent/10 dark:to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TypographyH1 className="text-4xl md:text-6xl text-primary mb-6 font-medium">
              О Station2290
            </TypographyH1>
            <TypographyLead className="text-xl md:text-2xl text-primary/80 mb-8">
              Место, где каждая чашка кофе рассказывает свою историю
            </TypographyLead>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <TypographyH2 className="text-center mb-12 text-foreground font-medium">
              Наша история
            </TypographyH2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <TypographyP className="text-lg text-muted-foreground mb-6">
                  Station2290 открылась в 2020 году с простой идеей: создать место, где качественный кофе 
                  встречается с дагестанским гостеприимством. Название нашей кофейни связано с уникальным 
                  почтовым индексом Махачкалы и символизирует нашу глубокую связь с городом.
                </TypographyP>
                
                <TypographyP className="text-lg text-muted-foreground mb-6">
                  Мы начали как небольшая семейная кофейня с большими мечтами. Сегодня Station2290 - это 
                  место встреч для кофейных энтузиастов, студентов, деловых людей и всех, кто ценит 
                  качество и уют.
                </TypographyP>

                <TypographyP className="text-lg text-muted-foreground">
                  Каждое зерно кофе в нашей кофейне тщательно отбирается и обжаривается, чтобы раскрыть 
                  уникальный вкус и аромат. Мы гордимся тем, что можем предложить нашим гостям не просто 
                  кофе, а настоящий кофейный опыт.
                </TypographyP>
              </div>

              <div className="bg-muted rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Наши принципы</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Coffee className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Качество</h4>
                      <p className="text-muted-foreground text-sm">
                        Используем только лучшие кофейные зёрна и ингредиенты
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Heart className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Забота</h4>
                      <p className="text-muted-foreground text-sm">
                        К каждому гостю относимся как к члену семьи
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Мастерство</h4>
                      <p className="text-muted-foreground text-sm">
                        Постоянно совершенствуем искусство приготовления кофе
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Сообщество</h4>
                      <p className="text-muted-foreground text-sm">
                        Создаём пространство для встреч и общения
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground font-medium">
            Наша команда
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Coffee className="w-12 h-12 text-primary" />
                </div>
                <CardTitle>Амина Магомедова</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">Главный бариста</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Мастер кофейного дела с 8-летним опытом. Амина знает секреты идеального эспрессо 
                  и может рассказать историю каждого сорта кофе в нашем меню.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  🍰
                </div>
                <CardTitle>Салим Алиев</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">Шеф-кондитер</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Творец наших изысканных десертов. Салим сочетает традиционные дагестанские сладости 
                  с современными кондитерскими техниками.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  🍸
                </div>
                <CardTitle>Марьям Исаева</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">Бармен-миксолог</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Автор наших фирменных коктейлей. Марьям создаёт уникальные напитки, 
                  которые идеально дополняют атмосферу Station2290.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground font-medium">
              Наша миссия
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8">
              Мы создаём пространство, где каждый гость может насладиться моментом, 
              почувствовать себя как дома и открыть для себя новые вкусы.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-primary">Что нас вдохновляет</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Богатые кофейные традиции мира</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Дагестанское гостеприимство</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Стремление к совершенству</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Радость наших гостей</span>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4 text-primary">Наши достижения</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Лучшая кофейня Махачкалы 2023</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Более 5000 довольных гостей</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>50+ авторских рецептов</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Партнёрство с местными поставщиками</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}