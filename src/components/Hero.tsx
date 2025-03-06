
import React, { useState } from "react";
import { GlassButton, GlassPanel } from "./ui/Glass";
import { motion } from "framer-motion";
import OrderModal from "./OrderModal";

const Hero: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 z-[-1]" />
      
      {/* Decorative shapes */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-200/20 blur-3xl z-[-1]" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 rounded-full bg-cyan-200/20 blur-3xl z-[-1]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 animate-fade-in">
            <div>
              <motion.span 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
              >
                Аутстафинг персонала в Тюмени
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Рабочий персонал в Тюмени – <span className="text-primary">быстро, надежно, выгодно</span>
              </motion.h1>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              Предоставляем квалифицированный персонал для решения задач в Тюмени и районе: 
              разнорабочие, грузчики, упаковщики, уборщики, мерчендайзеры и другие 
              категории работников. Аренда персонала на день или на постоянной основе.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <GlassButton
                onClick={() => setModalOpen(true)}
                className="text-base"
              >
                Заказать персонал в Тюмени
              </GlassButton>
              <a href="#pricing">
                <button className="w-full sm:w-auto px-6 py-3 rounded-lg border border-primary/30 text-primary bg-white/50 backdrop-blur-sm hover:bg-white/80 transition-all duration-300">
                  Посмотреть цены
                </button>
              </a>
            </motion.div>
          </div>
          
          <div className="relative">
            <GlassPanel className="p-8 max-w-md mx-auto animate-float">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">Быстрый расчет стоимости в Тюмени</h3>
                  <p className="text-muted-foreground">Узнайте примерную стоимость найма персонала для ваших задач в Тюмени</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/50 rounded-lg text-center hover:shadow-md transition-all duration-300">
                    <h4 className="font-medium text-sm sm:text-base truncate">Грузчики</h4>
                    <p className="text-primary font-semibold mt-2">от 4400 ₽/смена</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg text-center hover:shadow-md transition-all duration-300">
                    <h4 className="font-medium text-sm sm:text-base truncate">Разнорабочие</h4>
                    <p className="text-primary font-semibold mt-2">от 4000 ₽/смена</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg text-center hover:shadow-md transition-all duration-300">
                    <h4 className="font-medium text-sm sm:text-base truncate">Уборщики</h4>
                    <p className="text-primary font-semibold mt-2">от 2500 ₽/смена</p>
                  </div>
                  <div className="p-4 bg-white/50 rounded-lg text-center hover:shadow-md transition-all duration-300">
                    <h4 className="font-medium text-sm sm:text-base truncate">Мерчендайзеры</h4>
                    <p className="text-primary font-semibold mt-2">от 2500 ₽/смена</p>
                  </div>
                </div>
                
                <button 
                  onClick={() => setModalOpen(true)}
                  className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300"
                >
                  Заказать персонал в Тюмени
                </button>
              </div>
            </GlassPanel>
            
            <div className="absolute -top-5 -right-5 w-10 h-10 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "1s" }} />
            <div className="absolute -bottom-7 -left-7 w-14 h-14 rounded-full bg-primary/30 animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </div>
      </div>
      
      <OrderModal open={modalOpen} onOpenChange={setModalOpen} isIndividualRequest={false} />
    </section>
  );
};

export default Hero;
