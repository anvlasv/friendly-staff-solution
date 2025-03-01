
import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { GlassPanel } from "./ui/Glass";

const faqData = [
  {
    question: "Как быстро вы можете предоставить персонал?",
    answer: "Мы можем предоставить персонал в течение 2-24 часов с момента подтверждения заказа, в зависимости от типа и количества требуемых сотрудников."
  },
  {
    question: "Какие гарантии качества работы персонала вы предоставляете?",
    answer: "Мы гарантируем качество работы предоставляемого персонала. В случае возникновения проблем, мы оперативно заменим сотрудника или вернем деньги."
  },
  {
    question: "Как происходит оплата услуг?",
    answer: "Оплата происходит по факту выполненных работ. Возможны различные варианты: наличный расчет, безналичный расчет, электронные платежи."
  },
  {
    question: "Можно ли заказать персонал на один день?",
    answer: "Да, мы предоставляем персонал даже на один день. Минимальная смена - 4 часа."
  },
  {
    question: "Нужно ли заключать официальный договор?",
    answer: "Да, со всеми нашими клиентами мы заключаем договор на оказание услуг по предоставлению персонала. Это обеспечивает юридическую защиту для обеих сторон."
  },
  {
    question: "Какие документы нужны от работников?",
    answer: "Все наши работники имеют необходимые документы для легального трудоустройства: паспорт, ИНН, СНИЛС, медицинские книжки (при необходимости), разрешение на работу для иностранных граждан."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-50/30 z-0" />
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cyan-100/20 blur-3xl z-0" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-blue-100/20 blur-3xl z-0" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
          >
            Часто задаваемые вопросы
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Ответы на популярные вопросы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Здесь вы найдете ответы на самые распространенные вопросы о наших услугах предоставления персонала
          </motion.p>
        </div>

        <GlassPanel className="p-6 md:p-8">
          <Accordion type="single" collapsible className="w-full divide-y">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-none">
                <AccordionTrigger className="text-lg font-medium py-4 hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </GlassPanel>
      </div>
    </section>
  );
};

export default FAQ;
