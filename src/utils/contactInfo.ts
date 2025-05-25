
interface ContactInfo {
  phone: {
    number: string;
    formatted: string;
    display: string;
  };
  email: string;
  telegram: string;
  whatsapp: string;
  address: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export const getContactInfo = (): ContactInfo => {
  // Проверяем, доступна ли глобальная переменная
  if (typeof window !== 'undefined' && (window as any).CONTACT_INFO) {
    return (window as any).CONTACT_INFO;
  }
  
  // Fallback данные на случай, если глобальная переменная недоступна
  return {
    phone: {
      number: '+79224714899',
      formatted: '+7 (922) 471-48-99',
      display: '7-922-471-48-99'
    },
    email: 'barm.70@gmail.com',
    telegram: 'https://t.me/tmnsklwork',
    whatsapp: 'https://wa.me/79227837198',
    address: 'г. Тюмень, ул. Республики 207, оф. 502',
    workingHours: {
      weekdays: 'Пн-Пт: 9:00 - 18:00',
      saturday: 'Сб: 10:00 - 15:00',
      sunday: 'Вс: выходной'
    }
  };
};
