
import React, { useState, useEffect } from "react";
import { Phone, Menu, X, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import OrderModal from "./OrderModal";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3",
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <a href="#" className="flex items-center">
                <img 
                  src="/lovable-uploads/fc784c1f-bf59-47c4-acfa-2bf355fc2325.png" 
                  alt="СтаффПро" 
                  className="h-14 w-auto" /* Increased from h-10 to h-14 */
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-body">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Услуги
              </a>
              <a
                href="#benefits"
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Преимущества
              </a>
              <a
                href="#pricing"
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Цены
              </a>
              <a
                href="#cases"
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Кейсы
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                Контакты
              </a>
            </nav>

            {/* Phone Number and Messengers */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="tel:+79240424890"
                className="flex items-center text-foreground hover:text-primary transition-colors duration-300"
              >
                <Phone className="mr-2 h-4 w-4" />
                <span>+7 (924) 042-48-90</span>
              </a>
              <a
                href="https://t.me/tmnsklwork"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/79227837198"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <Button
                onClick={() => setModalOpen(true)}
                className="ml-2 bg-primary text-white hover:bg-primary/90"
              >
                Заказать персонал
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <div className="flex space-x-2">
                <a
                  href="https://t.me/tmnsklwork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary p-1"
                >
                  <Send className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/79227837198"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary p-1"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="tel:+79240424890" className="text-primary p-1">
                  <Phone className="h-5 w-5" />
                </a>
                <button
                  onClick={toggleMobileMenu}
                  className="text-foreground p-1 focus:outline-none"
                >
                  {mobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 bg-background backdrop-blur-lg transform transition-transform duration-300 md:hidden",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6 space-y-8 font-body">
          <nav className="flex flex-col space-y-6 text-lg">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary py-2 border-b border-border"
            >
              Услуги
            </a>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary py-2 border-b border-border"
            >
              Преимущества
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary py-2 border-b border-border"
            >
              Цены
            </a>
            <a
              href="#cases"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary py-2 border-b border-border"
            >
              Кейсы
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground hover:text-primary py-2 border-b border-border"
            >
              Контакты
            </a>
          </nav>
          <div className="mt-auto">
            <Button
              onClick={() => {
                setMobileMenuOpen(false);
                setModalOpen(true);
              }}
              className="w-full bg-primary text-white hover:bg-primary/90"
            >
              Заказать персонал
            </Button>
          </div>
        </div>
      </div>

      <OrderModal open={modalOpen} onOpenChange={setModalOpen} />
    </>
  );
};

export default Header;
