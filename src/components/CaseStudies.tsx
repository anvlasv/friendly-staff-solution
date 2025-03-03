
import React, { useState } from "react";
import { GlassCard } from "./ui/Glass";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Алексей Петров",
    position: "Руководитель склада, ООО 'ЛогистикПро'",
    content:
      "Сотрудничаем с компанией уже более года. Регулярно заказываем грузчиков и комплектовщиков для работы на складе. Персонал всегда приходит вовремя, работает качественно. Особенно ценно, что при необходимости можно быстро увеличить количество работников при сезонных пиках нагрузки.",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 2,
    name: "Марина Соколова",
    position: "Управляющая торговым центром 'Столица'",
    content:
      "Обращались в компанию для привлечения мерчендайзеров и уборщиков на постоянной основе. Сотрудники оказались хорошо обученными, вежливыми и быстро влились в наш коллектив. Отдельное спасибо менеджеру за оперативность в решении всех вопросов.",
    rating: 5,
    imageSrc: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
  },
  {
    id: 3,
    name: "Игорь Васильев",
    position: "Директор строительной компании 'СтройМастер'",
    content:
      "Привлекали разнорабочих через компанию для помощи на стройплощадке. Все работники имели необходимые допуски и опыт. Задачи выполнялись в срок и с должным качеством. Планируем продолжать сотрудничество на постоянной основе.",
    rating: 4,
    imageSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  },
];

const caseStudies = [
  {
    id: 1,
    title: "Комплектация нового склада электроники",
    description:
      "Предоставили 25 сотрудников (грузчики, комплектовщики, упаковщики) для запуска нового распределительного центра крупной сети электроники. Команда была сформирована за 3 дня, работы выполнены точно в срок.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    stats: [
      { label: "Сотрудников", value: "25" },
      { label: "Срок проекта", value: "2 месяца" },
      { label: "Экономия клиента", value: "30%" },
    ],
  },
  {
    id: 2,
    title: "Поддержка работы торгового центра",
    description:
      "Обеспечиваем торговый центр персоналом на постоянной основе: уборщики, мерчендайзеры, технический персонал. Гибкий график позволяет точно покрывать потребности в персонале в разное время суток и дни недели.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    stats: [
      { label: "Сотрудников", value: "45" },
      { label: "Длительность", value: "2+ года" },
      { label: "Снижение текучести", value: "65%" },
    ],
  },
];

const CaseStudies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"testimonials" | "cases">(
    "testimonials"
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section id="cases" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/30 to-transparent z-0" />
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-blue-100/20 blur-3xl z-0" />
      <div className="absolute -bottom-32 left-10 w-80 h-80 rounded-full bg-cyan-100/20 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
          >
            Результаты работы
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Истории успеха наших клиентов
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Узнайте, как аутстафинг персонала помогает компаниям решать
            бизнес-задачи и оптимизировать расходы.
          </motion.p>
        </div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 bg-muted rounded-lg">
            <button
              onClick={() => setActiveTab("testimonials")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "testimonials"
                  ? "bg-white shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Отзывы клиентов
            </button>
            <button
              onClick={() => setActiveTab("cases")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === "cases"
                  ? "bg-white shadow-sm text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Кейсы проектов
            </button>
          </div>
        </div>

        {activeTab === "testimonials" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <GlassCard className="h-full p-6 hover-lift">
                  <div className="flex flex-col h-full">
                    <div className="mb-4 text-primary">
                      <Quote className="h-8 w-8" />
                    </div>
                    <p className="flex-grow mb-6 italic text-muted-foreground">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.imageSrc}
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <svg
                          key={idx}
                          className={`h-5 w-5 ${
                            idx < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        )}

        {activeTab === "cases" && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {caseStudies.map((caseStudy) => (
              <motion.div key={caseStudy.id} variants={itemVariants}>
                <GlassCard className="p-0 overflow-hidden hover-lift">
                  <div className="md:flex">
                    <div className="md:w-2/5 relative h-64 md:h-auto">
                      <img
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-3/5">
                      <h3 className="text-xl font-semibold mb-3">
                        {caseStudy.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {caseStudy.description}
                      </p>
                      <div className="grid grid-cols-3 gap-4">
                        {caseStudy.stats.map((stat, idx) => (
                          <div key={idx} className="text-center">
                            <div className="text-2xl font-bold text-primary">
                              {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {stat.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CaseStudies;
