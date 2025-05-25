import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { MessageCircle, Send } from "lucide-react";
import PrivacyPolicyModal from "./PrivacyPolicyModal";
import { getContactInfo } from "@/utils/contactInfo";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const [privacyPolicyOpen, setPrivacyPolicyOpen] = useState(false);
  const contactInfo = getContactInfo();

  return (
    <footer id="contact" className="bg-gradient-to-t from-blue-50 to-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl z-0"></div>
      <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h4 className="text-xl font-semibold mb-4 font-display">СтаффПро</h4>
            <p className="text-muted-foreground mb-6 font-body">
              Профессиональное предоставление персонала для вашего бизнеса. Предоставляем квалифицированных сотрудников для различных задач, включая мерчендайзинг.
            </p>
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
                <button 
                  onClick={() => setPrivacyPolicyOpen(true)} 
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  Политика конфиденциальности
                </button>
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
                <a href={`tel:${contactInfo.phone.number}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactInfo.phone.formatted}
                </a>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <a href={`mailto:${contactInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-muted-foreground">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-primary shrink-0 mr-3 mt-0.5" />
                <span className="text-muted-foreground">
                  {contactInfo.workingHours.weekdays}<br />
                  {contactInfo.workingHours.saturday}
                </span>
              </li>
              <li className="flex space-x-4 mt-4">
                <a href={contactInfo.telegram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                  <Send className="h-5 w-5" />
                </a>
                <a href={contactInfo.whatsapp} target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-muted-foreground font-body font-bold">
            ИП А.Б. Васюков ИНН 860319248616
          </p>
        </div>
        
        <div className="pt-8 border-t border-gray-200 flex flex-col items-center text-center">
          <p className="text-sm text-muted-foreground font-body mb-2">
            © {year} СтаффПро. Все права защищены.
          </p>
          <p className="text-sm text-muted-foreground font-body">
            Дизайн <a href="https://t.me/person_grata" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SV-Group</a>
          </p>
        </div>
      </div>
      
      <PrivacyPolicyModal open={privacyPolicyOpen} onOpenChange={setPrivacyPolicyOpen} />
    </footer>
  );
};

export default Footer;
