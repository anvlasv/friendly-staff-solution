
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
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col min-h-screen max-w-full overflow-x-hidden"
      >
        <Helmet>
          <title>СтаффПро - Аутстаффинг персонала в Тюмени: грузчики, разнорабочие, упаковщики</title>
          <meta name="description" content="Профессиональный аутстаффинг персонала в Тюмени: грузчики на заказ, работники для склада, уборщики, мерчендайзеры. Заказать персонал в Тюмени по выгодным ценам." />
          <link rel="canonical" href="https://staffpro.ru" />
        </Helmet>
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
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "СтаффПро",
              "description": "Профессиональный аутстаффинг персонала в Тюмени: грузчики, разнорабочие, упаковщики, уборщики",
              "url": "https://staffpro.ru",
              "telephone": "+7 (3452) 288-222",
              "email": "info@staffpro.ru",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Тюмень",
                "addressRegion": "Тюменская область",
                "addressCountry": "RU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "57.153033",
                "longitude": "65.534328"
              },
              "priceRange": "от 2500 ₽",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "18:00"
              },
              "founder": {
                "@type": "Person",
                "name": "А.Б. Васюков"
              }
            }
          `}
        </script>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
