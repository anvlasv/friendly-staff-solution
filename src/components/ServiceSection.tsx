
import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./ui/Glass";

const services = [
  {
    title: "Грузчики",
    description: "Профессиональная помощь при переездах, погрузке-разгрузке, на складах и производствах.",
    imageUrl: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
    bgColor: "bg-blue-900/30",
  },
  {
    title: "Разнорабочие",
    description: "Помощь на стройплощадках, складах и производстве для выполнения различных задач.",
    imageUrl: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bgColor: "bg-blue-800/30",
  },
  {
    title: "Упаковщики",
    description: "Сотрудники для работы на складах, в логистических центрах и производственных линиях.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bgColor: "bg-green-800/30",
  },
  {
    title: "Уборщики",
    description: "Поддержание чистоты в офисах, торговых центрах, на производствах и других объектах.",
    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bgColor: "bg-green-700/30",
  },
  {
    title: "Мерчендайзеры",
    description: "Специалисты по выкладке товара, оформлению витрин и контролю товарных запасов в точках продаж.",
    imageUrl: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bgColor: "bg-blue-700/30",
  },
  {
    title: "Горничные",
    description: "Персонал для гостиниц, отелей, хостелов и апартаментов для поддержания чистоты и комфорта.",
    imageUrl: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    bgColor: "bg-green-600/30",
  }
];

const ServiceSection: React.FC = () => {
  return (
    <section id="services" className="py-16 relative overflow-hidden bg-blue-50/30">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-blue-100/30 blur-3xl z-0" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-green-100/30 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
          >
            Услуги
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold font-display"
          >
            Аутстаффинг персонала - широкий спектр услуг
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto font-body"
          >
            Мы предоставляем персонал различных специализаций для решения широкого спектра задач. 
            От складских работ и мерчендайзинга до клининга и обслуживания.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard 
                className={`h-full overflow-hidden ${service.bgColor} backdrop-blur-md`}
                opacity="light"
                blur="lg"
              >
                <div className="relative h-48">
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} - аутстаффинг персонала`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <h3 className="text-white font-semibold p-4 font-display">
                      {service.title}
                    </h3>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-foreground font-body">
                    {service.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#pricing">
            <button className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg">
              Посмотреть все услуги и цены
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
