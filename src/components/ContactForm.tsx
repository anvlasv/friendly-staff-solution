
import React, { useState } from "react";
import { GlassCard, GlassButton } from "./ui/Glass";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real implementation, you would send this data to your backend or email service
      console.log("Sending contact form to barm.70@gmail.com:", {
        name,
        phone,
        message,
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.");
      
      // Reset form
      setName("");
      setPhone("");
      setMessage("");
    } catch (error) {
      toast.error("Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте еще раз.");
      console.error("Error sending contact form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/50 to-transparent z-0" />
      <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl z-0" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4"
          >
            Связаться с нами
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Остались вопросы? Мы на связи
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            Заполните форму, и наш менеджер свяжется с вами в течение 30 минут
            в рабочее время для обсуждения деталей сотрудничества.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Отправить запрос</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white/50 border-white/30"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Номер телефона"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-white/50 border-white/30"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Ваш запрос"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="bg-white/50 border-white/30 min-h-[120px]"
                  />
                </div>
                <div>
                  <GlassButton
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Отправка..." : "Отправить запрос"}
                  </GlassButton>
                </div>
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <GlassCard className="p-8 h-full">
              <h3 className="text-2xl font-semibold mb-6">Контактная информация</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Адрес офиса</h4>
                    <p className="text-muted-foreground">
                      г. Тюмень, ул. Республики 207, оф. 502
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Телефон</h4>
                    <p className="text-muted-foreground">
                      <a 
                        href="tel:+79240424890" 
                        className="hover:text-primary transition-colors"
                      >
                        7-924-042-48-90
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground">
                      <a 
                        href="mailto:barm.70@gmail.com" 
                        className="hover:text-primary transition-colors"
                      >
                        barm.70@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-primary shrink-0 mr-4 mt-1" />
                  <div>
                    <h4 className="font-medium mb-1">Часы работы</h4>
                    <p className="text-muted-foreground">
                      Пн-Пт: 9:00 - 18:00
                      <br />
                      Сб: 10:00 - 15:00
                      <br />
                      Вс: выходной
                    </p>
                  </div>
                </div>
                
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">
                    Мы предоставляем услуги предоставления персонала в Москве и области. 
                    Грузчики на заказ, работники для склада, уборщики для офиса и другие 
                    категории сотрудников доступны для найма на любой срок.
                  </p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
