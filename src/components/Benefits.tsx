
import React from "react";
import { GlassCard } from "./ui/Glass";
import { motion } from "framer-motion";
import { Clock, Users, Award, Coins, ShieldCheck, Zap } from "lucide-react";

const benefitsData = [
  {
    icon: <Clock className="h-10 w-10 text-primary" />,
    title: "Оперативность",
    description:
      "Предоставим персонал в течение 2-24 часов после оформления заявки, даже в срочных случаях.",
  },
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Квалифицированный персонал",
    description:
      "Тщательный отбор и проверка каждого сотрудника для обеспечения качественного выполнения работ.",
  },
  {
    icon: <Award className="h-10 w-10 text-primary" />,
    title: "Гарантия качества",
    description:
      "Мы несем ответственность за работу предоставленного персонала и гарантируем высокое качество услуг.",
  },
  {
    icon: <Coins className="h-10 w-10 text-primary" />,
    title: "Прозрачные условия",
    description:
      "Честные цены без скрытых платежей, оплата только за фактически отработанное время.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: "Юридическая безопасность",
    description:
      "Мы берем на себя все обязательства работодателя, снимая с вас юридические риски.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Гибкие условия",
    description:
      "Возможность заказать персонал на день или на долгосрочной основе в зависимости от ваших потребностей.",
  },
];

const Benefits: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="benefits" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-blue-50/50 z-0" />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl z-0" />
      <div className="absolute -bottom-40 -left-20 w-80 h-80 rounded-full bg-cyan-100/30 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
          >
            Наши преимущества
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Почему клиенты выбирают нас
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Мы предлагаем комплексные решения по аутстаффингу персонала,
            обеспечивая высокое качество услуг и индивидуальный подход к каждому
            клиенту.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefitsData.map((benefit, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="h-full p-6 hover-lift">
                <div className="flex flex-col h-full">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
