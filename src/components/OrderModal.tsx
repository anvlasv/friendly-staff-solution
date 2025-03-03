
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { GlassButton } from "./ui/Glass";
import { toast } from "sonner";
import InputMask from "react-input-mask";

interface OrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceType?: string;
  isIndividualRequest?: boolean;
}

const OrderModal: React.FC<OrderModalProps> = ({
  open,
  onOpenChange,
  serviceType = "персонал",
  isIndividualRequest = false,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState(serviceType || "");
  const [quantity, setQuantity] = useState("");
  const [duration, setDuration] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setName("");
    setPhone("");
    setSelectedService(""); // Reset to empty so placeholder shows
    setQuantity("");
    setDuration("");
    setMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In a real implementation, you would send this data to your backend
      console.log("Order submitted:", {
        name,
        phone,
        selectedService,
        quantity,
        duration,
        message,
      });

      toast.success("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.");

      // Reset form
      resetForm();
      onOpenChange(false);
    } catch (error) {
      toast.error("Произошла ошибка при отправке заявки. Пожалуйста, попробуйте еще раз.");
    } finally {
      setLoading(false);
    }
  };

  // Set the service type when the modal opens
  useEffect(() => {
    if (open && serviceType) {
      setSelectedService(serviceType);
    }
  }, [serviceType, open]);

  // Reset form when modal is closed
  useEffect(() => {
    if (!open) {
      resetForm();
    }
  }, [open]);

  // Service options for the select field
  const serviceOptions = [
    "Грузчики",
    "Разнорабочие",
    "Упаковщики",
    "Уборщики",
    "Мерчендайзеры",
    "Горничные",
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            {isIndividualRequest ? "Индивидуальный запрос" : "Быстрый расчет стоимости"}
          </DialogTitle>
          <DialogDescription>
            Заполните форму, и мы рассчитаем стоимость предоставления персонала для вашей компании.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/50"
              />
            </div>
            <div>
              <InputMask
                mask="+7 (999) 999-99-99"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              >
                {/* @ts-ignore */}
                {(inputProps) => (
                  <Input
                    {...inputProps}
                    type="tel"
                    placeholder="Номер телефона"
                    required
                    className="bg-white/50"
                  />
                )}
              </InputMask>
            </div>
          </div>

          <div>
            {isIndividualRequest ? (
              <Input
                placeholder="Тип персонала"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
                className="bg-white/50"
              />
            ) : (
              <select
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                required
                className="w-full px-3 py-2 bg-white/50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="" disabled>Выберите тип персонала</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Input
                placeholder="Количество сотрудников"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="bg-white/50"
              />
            </div>
            <div>
              <Input
                placeholder="Срок работы (в днях)"
                type="number"
                min="1"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
                className="bg-white/50"
              />
            </div>
          </div>

          <div>
            <Textarea
              placeholder="Дополнительная информация"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="bg-white/50 min-h-[80px]"
            />
          </div>

          <div className="pt-2">
            <GlassButton type="submit" className="w-full" disabled={loading}>
              {loading ? "Отправка..." : isIndividualRequest ? 
                "Получить индивидуальное предложение" : 
                "Рассчитать стоимость"}
            </GlassButton>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderModal;
