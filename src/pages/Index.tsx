
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import PricingSection from "@/components/PricingSection";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

const Index = () => {
  useEffect(() => {
    // Add the framer-motion library since we're using it
    const loadFramerMotion = async () => {
      if (!window.framerMotion) {
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/framer-motion@latest/dist/framer-motion.min.js";
        script.async = true;
        document.body.appendChild(script);
        window.framerMotion = true;
      }
    };

    loadFramerMotion();
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col min-h-screen"
      >
        <Header />
        <main className="flex-grow">
          <Hero />
          <section id="services" className="py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="text-center mb-16">
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
                >
                  Наши услуги
                </motion.span>
                <motion.h2
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold"
                >
                  Широкий спектр персонала для различных задач
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
                >
                  Мы предоставляем персонал различных специализаций для решения широкого спектра задач в разных отраслях бизнеса.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Грузчики, разнорабочие",
                    description: "Профессиональная помощь при переездах, погрузке-разгрузке, на складах и производствах.",
                    imageUrl: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80",
                  },
                  {
                    title: "Упаковщики, комплектовщики",
                    description: "Сотрудники для работы на складах, в логистических центрах и производственных линиях.",
                    imageUrl: "https://images.unsplash.com/photo-1609094532655-5c03d584a1f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                  },
                  {
                    title: "Уборщики, клинеры",
                    description: "Поддержание чистоты в офисах, торговых центрах, на производствах и других объектах.",
                    imageUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                  },
                  {
                    title: "Официанты, горничные",
                    description: "Персонал для гостиниц, ресторанов, кафе и обслуживания мероприятий.",
                    imageUrl: "https://images.unsplash.com/photo-1589128777073-263566ae5e4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="relative h-48">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                        <h3 className="text-white font-semibold p-4">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <a href="#pricing">
                  <button className="px-6 py-2.5 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors">
                    Посмотреть все услуги и цены
                  </button>
                </a>
              </div>
            </div>
          </section>
          <Benefits />
          <PricingSection />
          <CaseStudies />
          <ContactForm />
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
