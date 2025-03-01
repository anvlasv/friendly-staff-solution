
import React, { useState } from "react";
import { GlassCard, GlassButton } from "./ui/Glass";
import OrderModal from "./OrderModal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const pricingData = [
  {
    title: "Грузчики",
    description: "Погрузочно-разгрузочные работы, переезды",
    price: "от 200 ₽/час",
    features: [
      "Опыт работы от 1 года",
      "Физически выносливые",
      "Наличие медкнижки",
      "Бережное отношение к грузу",
      "Работа со сложными грузами",
    ],
    keywords: "грузчики на заказ",
    popular: true,
  },
  {
    title: "Разнорабочие",
    description: "Помощь на стройплощадках, складах и производстве",
    price: "от 180 ₽/час",
    features: [
      "Выполнение подсобных работ",
      "Помощь квалифицированным специалистам",
      "Уборка территории",
      "Погрузочно-разгрузочные работы",
      "Работа в любых условиях",
    ],
    keywords: "работники для склада",
  },
  {
    title: "Упаковщики",
    description: "Упаковка и маркировка товаров на складах",
    price: "от 190 ₽/час",
    features: [
      "Внимательность к деталям",
      "Высокая скорость работы",
      "Знание стандартов упаковки",
      "Работа с документацией",
      "Опыт на складах от 6 месяцев",
    ],
    keywords: "персонал на день",
  },
  {
    title: "Уборщики",
    description: "Клининговые услуги для офисов и помещений",
    price: "от 190 ₽/час",
    features: [
      "Профессиональные средства",
      "Уборка офисов и помещений",
      "Мытье окон и фасадов",
      "Химчистка ковров и мебели",
      "Уборка после ремонта",
    ],
    keywords: "уборщики для офиса",
  },
  {
    title: "Охранники",
    description: "Контроль и обеспечение безопасности объектов",
    price: "от 220 ₽/час",
    features: [
      "Наличие лицензии",
      "Опыт работы от 2 лет",
      "Контроль доступа",
      "Видеонаблюдение",
      "Оперативное реагирование",
    ],
    keywords: "аренда персонала",
  },
  {
    title: "Официанты",
    description: "Обслуживание мероприятий и заведений",
    price: "от 210 ₽/час",
    features: [
      "Опыт работы от 1 года",
      "Знание стандартов сервиса",
      "Презентабельный внешний вид",
      "Коммуникабельность",
      "Работа на мероприятиях любого формата",
    ],
    keywords: "аутстафинг персонала",
  },
];

const PricingSection: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const openOrderModal = (service: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl z-0" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-cyan-100/30 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
          >
            Прозрачное ценообразование
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Стоимость услуг аутстаффинга
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Мы предлагаем конкурентоспособные цены на аренду персонала разных
            категорий. Итоговая стоимость зависит от количества сотрудников,
            срока работы и сложности задач.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                className={`h-full p-6 relative overflow-hidden ${
                  plan.popular
                    ? "border-primary/30 shadow-lg"
                    : "border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                      Популярное
                    </div>
                  </div>
                )}
                
                <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                  <li className="text-sm text-muted-foreground hidden">
                    {plan.keywords}
                  </li>
                </ul>
                
                <div className="mt-auto">
                  <button
                    onClick={() => openOrderModal(plan.title)}
                    className="w-full py-2.5 bg-primary/90 text-white rounded-lg hover:bg-primary/100 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    Заказать
                  </button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-lg mb-6">
            Нужен персонал другой категории или особые условия сотрудничества?
          </p>
          <GlassButton onClick={() => openOrderModal("персонал")}>
            Получить индивидуальное предложение
          </GlassButton>
        </div>
      </div>
      
      <OrderModal 
        open={modalOpen} 
        onOpenChange={setModalOpen} 
        serviceType={selectedService} 
      />
    </section>
  );
};

export default PricingSection;
