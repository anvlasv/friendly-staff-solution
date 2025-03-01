
import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Telegram, MessageCircle } from "lucide-react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-t from-blue-50 to-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-200">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold mb-4 font-display">СтаффПро</h4>
            <p className="text-muted-foreground mb-6 font-body">
              Профессиональный аутстафинг персонала для вашего бизнеса. Предоставляем квалифицированных сотрудников для различных задач, включая мерчендайзинг.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://t.me/tmnsklwork" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <Telegram className="h-5 w-5" />
              </a>
              <a href="https://wa.me/79227837198" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold mb-4 font-display">Услуги</h4>
            <ul className="space-y-3 font-body">
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Грузчики
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Разнорабочие
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Упаковщики
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Уборщики
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Мерчендайзеры
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Горничные
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold mb-4 font-display">Информация</h4>
            <ul className="space-y-3 font-body">
              <li>
                <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#cases" className="text-muted-foreground hover:text-primary transition-colors">
                  Наши клиенты
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Условия сотрудничества
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Правовая информация
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-xl font-semibold mb-4 font-display">Контакты</h4>
            <ul className="space-y-4 font-body">
              <li className="flex">
                <Phone className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <a href="tel:+79240424890" className="text-muted-foreground hover:text-primary transition-colors">
                  +7 (924) 042-48-90
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <a href="mailto:barm.70@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  barm.70@gmail.com
                </a>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-muted-foreground">
                  г. Тюмень, ул. Республики 207, оф. 502
                </span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-muted-foreground">
                  Пн-Пт: 9:00 - 18:00<br />
                  Сб: 10:00 - 15:00
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <div className="pt-8 flex flex-wrap justify-between items-center">
          <p className="text-sm text-muted-foreground font-body">
            © {year} СтаффПро. Все права защищены. Аутстаффинг персонала, грузчики на заказ, работники для склада, уборщики для офиса, мерчендайзинг.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0 font-body">
            Дизайн <a href="https://t.me/person_grata" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SV-Group</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
