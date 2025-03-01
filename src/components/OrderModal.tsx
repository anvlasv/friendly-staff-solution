
import React, { useState } from "react";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { GlassButton } from "./ui/Glass";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceType?: string;
}

const OrderModal: React.FC<OrderModalProps> = ({ open, onOpenChange, serviceType = "персонал" }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // In a real implementation, you would send this data to your backend or email service
      console.log("Sending order to barm.70@gmail.com:", {
        name,
        phone,
        comment,
        serviceType,
      });

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");
      
      // Reset form
      setName("");
      setPhone("");
      setComment("");
      
      // Close modal
      onOpenChange(false);
    } catch (error) {
      toast.error("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
      console.error("Error sending order:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md glass-panel bg-white/90 backdrop-blur-md border border-white/20 animate-enter">
        <DialogHeader>
          <DialogTitle className="text-2xl">Заказать {serviceType}</DialogTitle>
          <DialogDescription>
            Заполните форму, и мы свяжемся с вами в ближайшее время для уточнения деталей.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
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
              placeholder="Комментарий к заказу"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="bg-white/50 border-white/30 min-h-[100px]"
            />
          </div>
          <DialogFooter className="sm:justify-between mt-4 gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="w-full sm:w-auto"
            >
              Отмена
            </Button>
            <GlassButton type="submit" className="w-full sm:w-auto" disabled={loading}>
              {loading ? "Отправка..." : "Отправить заявку"}
            </GlassButton>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
