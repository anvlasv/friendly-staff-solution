
import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import PricingSection from "@/components/PricingSection";
import CaseStudies from "@/components/CaseStudies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import ServiceSection from "@/components/ServiceSection";
import FAQ from "@/components/FAQ";

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col min-h-screen max-w-full overflow-x-hidden"
      >
        <Header />
        <main className="flex-grow">
          <Hero />
          <ServiceSection />
          <Benefits />
          <PricingSection />
          <CaseStudies />
          <FAQ />
          <ContactForm />
        </main>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Как быстро вы можете предоставить персонал?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Мы можем предоставить персонал в течение 2-24 часов с момента подтверждения заказа, в зависимости от типа и количества требуемых сотрудников."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Какие гарантии качества работы персонала вы предоставляете?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Мы гарантируем качество работы предоставляемого персонала. В случае возникновения проблем, мы оперативно заменим сотрудника или вернем деньги."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Как происходит оплата услуг?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Оплата происходит по факту выполненных работ. Возможны различные варианты: наличный расчет, безналичный расчет, электронные платежи."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Можно ли заказать персонал на один день?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Да, мы предоставляем персонал даже на один день. Минимальная смена - 4 часа."
                  }
                }
              ]
            }
          `}
        </script>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
