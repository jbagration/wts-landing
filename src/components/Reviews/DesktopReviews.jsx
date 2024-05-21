import React, { useState } from 'react';
import work1Image from '../../assets/work-1.jpg';
import work2Image from '../../assets/work-2.jpg';
import work3Image from '../../assets/work-3.jpg';
import work4Image from '../../assets/work-4.jpg';
import work5Image from '../../assets/work-5.jpg';
import work6Image from '../../assets/work-6.jpg';
import work7Image from '../../assets/work-7.jpg';
import work8Image from '../../assets/work-8.jpg';
import connectorLine1 from '../../assets/connector-line-1.svg';
import connectorLine2 from '../../assets/connector-line-2.svg';
import '../../styles/Reviews.css';

const DesktopHowWeWork = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const stepsData = [
    {
      title: '1. Обсудим ваш проект',
      description: 'В удобном для вас формате. Вышлем и изучим заполненный бриф и предложим оптимальное решение под бюджет и поставленные бизнес-цели.',
      image: work1Image,
      connectorImage: connectorLine1,
    },
    {
      title: '2. Подпишем договор',
      description: 'Подготовим тех. документацию и календарный план разработки. Все прозрачно, вы будете знать, в какие сроки будет завершена та или иная стадия работ. Процесс регулярно демонстрируется на наших серверах, а также согласовывается с вами.',
      image: work2Image,
      connectorImage: connectorLine2,
    },
    {
      title: '3. Погрузимся в задачу',
      description: 'Проведем консультацию перед началом проекта, подберем референсы и создадим уникальный дизайн. Проанализируем рынок, изучим продукт и ЦА, чтобы выделить ваш продукт среди конкурентов.',
      image: work3Image,
      connectorImage: connectorLine1,

    },
    {
      title: '4. Разработаем дизайн',
      description: 'Подготовим тех. документацию и календарный план разработки. Все прозрачно, вы будете знать, в какие сроки будет завершена та или иная стадия работ. Процесс регулярно демонстрируется на наших серверах, а также согласовывается с вами.',
      image: work4Image,
      connectorImage: connectorLine2,
    },
    {
      title: '5. Реализуем верстку',
      description: 'На основе анализа ниши, референсов и ваших пожеланий. Подготовим несколько уникальных вариантов. Согласуем концепт и контент, а при необходимости дополнительно создадим для вас продающий текст под поисковые системы.',
      image: work5Image,
      connectorImage: connectorLine1,
    },
    {
      title: '6. Подключим домен',
      description: 'С поддержкой и гарантией до 12 месяцев. Следим за работоспособностью серверов, работой сайта, накоплением мусорных файлов, а также очисткой от вирусов и вредоносного ПО.',
      image: work6Image,
      connectorImage: connectorLine2,
    },
    {
      title: '7. Выпустим готовый проект',
      description: 'Настроим админ-панель, почту и веб-аналитику. Поставим цели для отслеживания конверсии и проведем всестороннее тестирование перед запуском. Подключим необходимые сервисы, такие как чат-бот и подписная форму',
      image: work7Image,
      connectorImage: connectorLine1,
    },
    {
      title: '8. Настроим рекламу',
      description: 'И приведем “горячих” клиентов, готовых приобрести ваш товар прямо сейчас. Оценим эффективность и масштабируем, для достижения новых показателей вашего бизнеса.',
      image: work8Image,
      connectorImage: '',
    },
  ];
  const handleStepClick = (index) => {
    setSelectedStep(index + 1);
  };

  return (
    <div className="how-we-work-container" id="reviews">
      <h1 className='section-title title-purple'>Как мы работаем?</h1>
      <h2>Доведем идею до совершенства и реализуем лучший проект в вашей нише!</h2>
      <div className="steps-container">
        <div className="steps-left">
          {stepsData.map((step, index) => (
            <div
              key={index}
              className={`step ${selectedStep === index + 1 ? 'selected' : ''}`}
              onClick={() => handleStepClick(index)}
            >
              <span className={selectedStep === index + 1 ? 'active-title' : ''}>{step.title}</span>
              {index !== stepsData.length - 1 && <img src={step.connectorImage} className="connector-image" alt={`Connector ${index}`} />}
            </div>
          ))}
        </div>
        <div className="steps-right">
          <div className="step-info">
            <div className="step-description">{stepsData[selectedStep - 1].description}</div>
          </div>
          <img src={stepsData[selectedStep - 1].image} alt={`Step ${selectedStep}`} />
        </div>
      </div>
    </div>
  );
};

export default DesktopHowWeWork;
