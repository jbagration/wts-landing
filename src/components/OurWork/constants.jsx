import kaiImage from '../../assets/kai.jpg';
import tradeImage from '../../assets/trade.jpg';
import fireImage from '../../assets/fire.jpg';
import skinclubImage from '../../assets/skinclub.jpg';
import kaiTabletImage from '../../assets/kai-tablet.jpg';
import tradeTabletImage from '../../assets/trade-tablet.jpg';
import fireTabletImage from '../../assets/fire-tablet.jpg';
import skinclubTabletImage from '../../assets/skinclub-tablet.jpg';
import kaiMobileImage from '../../assets/kai-mobile.jpg';
import tradeMobileImage from '../../assets/trade-mobil.jpg';
import fireMobileImage from '../../assets/fire-mobile.jpg';
import skinclubMobileImage from '../../assets/skinclub-mobile.jpg';
import kaiModalImage from '../../assets/kai-modal.png';
import tradeModalImage from '../../assets/trade-modal.jpg';
import fireModalImage from '../../assets/fire-modal.jpg';
import skinclubModalImage from '../../assets/skinclub-modal.jpg';

const slides = [
    { 
        image: skinclubImage, 
        imageTablet: skinclubTabletImage,
        imageMobile: skinclubMobileImage,
        imageModal: skinclubModalImage,
        alt: "Slide 1", 
        logoText: "SkinClub - портал для розыгрыша скинов",
        tasksTitle: "Поставленные задачи:", 
        tasksList: [
            "Сложная система начисления призов",
            "Отслеживание рекородов",
            "Система интеграции по API",
            "Админ панель для управления",
            "Выдача предметов из Counter-Strike"
        ], 
        duration: "Срок выполнения работы: ",
        date: '40 дней',
        buttonText: 'Оставить заявку',
        projectLink: 'https://webteamstorm.ru/projects/skin-club-odnostranichnuj-sajt-dlya-prognozov-counter-strike/'
      },
      { 
        image: fireImage, 
        imageTablet: fireTabletImage,
        imageMobile: fireMobileImage,
        imageModal: fireModalImage,
        alt: "Slide 2", 
        logoText: "Одностраничник Center of Fireproof Tech",
        tasksTitle: "Поставленные задачи:", 
        tasksList: [
            "Мультиязычность",
            "Система управления",
            "Динамичный прайс лист",
            "Конверсия более 5%"
        ], 
        duration: "Срок выполнения работы: ",
        date: '20 дней',
        buttonText: 'Оставить заявку',
        projectLink: 'https://webteamstorm.ru/projects/myltiyazuchnuyi_lending_protivopojarnuh_tehnologiyi_28/​​​​​​​'
      },
      { 
        image: kaiImage, 
        imageTablet: kaiTabletImage,
        imageMobile: kaiMobileImage,
        imageModal: kaiModalImage,
        alt: "Slide 3", 
        logoText: "Введение в предпринимательство КАИ",
        tasksTitle: "Поставленные задачи:", 
        tasksList: [
            "Стильный и современный дизайн",
            "Синхронизация данных с внешнего сервиса",
            "Выбор графика для записи на тренинги",
            "Скорость загрузки менее 2 сек."
        ], 
        duration: "Срок выполнения работы: ",
        date: '10 дней',
        buttonText: 'Оставить заявку',
        projectLink: 'https://webteamstorm.ru/projects/lending_vvedenie_v_predprinimatelstvo_10/'
      },
      { 
        image: tradeImage, 
        imageTablet: tradeTabletImage,
        imageMobile: tradeMobileImage,
        imageModal: tradeModalImage,
        alt: "Slide 4", 
        logoText: "Оказание финансовый услуг трейдинвест",
        tasksTitle: "Поставленные задачи:", 
        tasksList: [
            "Оперирование с динамическими курсами",
            "Синхронизация со счетами по API",
            "Настраиваемый калькулятор стоимости",
            "Связь с CRM для отправки заявок",
            "Низкий показатель отказов (менее 10%)"
        ], 
        duration: "Срок выполнения работы: ",
        date: '15 дней',
        buttonText: 'Оставить заявку',
        projectLink: 'https://webteamstorm.ru/projects/odnostranichnuyi_lending_treyid-invest_31/'
      },
  ];

export default slides;