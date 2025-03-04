
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PrivacyPolicyModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({
  open,
  onOpenChange,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold">
            Политика конфиденциальности
          </DialogTitle>
          <DialogDescription>
            Последнее обновление: {new Date().toLocaleDateString("ru-RU")}
          </DialogDescription>
        </DialogHeader>

        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-muted-foreground">
            <section>
              <h3 className="text-lg font-medium text-foreground mb-2">1. Введение</h3>
              <p>
                Настоящая Политика конфиденциальности определяет порядок обработки и защиты персональных данных пользователей сайта и услуг компании ИП А.Б. Васюков ИНН 860319248616 (далее – "СтаффПро", "Мы", "Нас", "Наш").
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-foreground mb-2">2. Какую информацию мы собираем</h3>
              <p>
                Мы собираем следующие виды персональных данных:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>ФИО</li>
                <li>Контактный телефон</li>
                <li>Адрес электронной почты</li>
                <li>Сведения о взаимодействии с нашим сайтом</li>
                <li>
                  Информация, которую Вы предоставляете в формах обратной связи
                </li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-foreground mb-2">3. Как мы используем вашу информацию</h3>
              <p>
                Мы используем полученную информацию в следующих целях:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Предоставление услуг по аутстаффингу персонала</li>
                <li>Обработка заявок и запросов</li>
                <li>Информирование о наших услугах и специальных предложениях</li>
                <li>Улучшение качества нашего сервиса</li>
                <li>Выполнение наших обязательств по договорам</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-foreground mb-2">4. Хранение и защита данных</h3>
              <p>
                Мы принимаем все необходимые организационные и технические меры для защиты персональной информации от неправомерного доступа, уничтожения, изменения, блокирования и других неправомерных действий. Мы храним ваши данные только в течение срока, необходимого для достижения целей их обработки, или срока, установленного законодательством РФ.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-foreground mb-2">5. Предоставление данных третьим лицам</h3>
              <p>
                Мы не передаем ваши персональные данные третьим лицам, за исключением следующих случаев:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>С вашего согласия</li>
                <li>Если это необходимо для выполнения наших обязательств перед вами</li>
                <li>По требованию законодательства РФ</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-foreground mb-2">6. Файлы cookie</h3>
              <p>
                Наш сайт использует файлы cookie для улучшения пользовательского опыта и сбора аналитических данных. Вы можете отключить использование файлов cookie в настройках вашего браузера, однако это может повлиять на функциональность сайта.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-foreground mb-2">7. Ваши права</h3>
              <p>
                В соответствии с законодательством РФ вы имеете право:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Получать информацию об обработке ваших персональных данных</li>
                <li>Требовать уточнения, блокирования или уничтожения неверных данных</li>
                <li>Отозвать согласие на обработку персональных данных</li>
                <li>Обжаловать действия или бездействие оператора персональных данных</li>
              </ul>
            </section>

            <section>
              <h3 className="text-lg font-medium text-foreground mb-2">8. Изменения в Политике конфиденциальности</h3>
              <p>
                Мы оставляем за собой право вносить изменения в настоящую Политику конфиденциальности. Актуальная версия всегда доступна на нашем сайте. Рекомендуем периодически проверять данную страницу для ознакомления с обновлениями.
              </p>
            </section>

            <section>
              <h3 className="text-lg font-medium text-foreground mb-2">9. Контактная информация</h3>
              <p>
                Если у вас возникли вопросы относительно настоящей Политики конфиденциальности или обработки ваших персональных данных, вы можете связаться с нами по следующим контактным данным:
              </p>
              <p className="mt-2">
                ИП А.Б. Васюков<br />
                ИНН: 860319248616<br />
                Адрес: г. Тюмень, ул. Республики 207, оф. 502<br />
                Телефон: +7 (924) 042-48-90<br />
                Email: barm.70@gmail.com
              </p>
            </section>
          </div>
        </ScrollArea>

        <DialogFooter>
          <Button onClick={() => onOpenChange(false)}>Закрыть</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;
