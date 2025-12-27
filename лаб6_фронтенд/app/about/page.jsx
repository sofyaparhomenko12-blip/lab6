'use client';
import { useState, useEffect } from 'react';
import styles from './page.module.css';

const AboutPage = () => {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then(response => response.json())
      .then(data => {
        
        const partnersData = data.slice(0, 8).map(comment => ({
          id: comment.id,
          name: comment.name,
          logo: `https://via.placeholder.com/120x60/${Math.floor(Math.random()*16777215).toString(16)}/ffffff?text=${comment.name.slice(0,4).toUpperCase()}`
        }));
        setPartners(partnersData);
      })
      .catch(error => {
        console.error('Ошибка загрузки партнеров:', error);
        setPartners([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      
      <section className={`${styles.section} ${styles.intro}`}>
        <h1 className={styles.heading}>СумкаМир</h1>
        <p className={styles.paragraph}>
          Где каждая сумка рассказывает свою историю
        </p>
        <p className={styles.paragraph}>
          СумкаМир — это не просто магазин аксессуаров, это пространство, где стиль встречается с функциональностью.
        </p>
        <p className={styles.paragraph}>
          Мы собираем сумки для тех, кто ценит качество и индивидуальность в каждой детали. От классических кожаных моделей до современных минималистичных решений.
        </p>
        <p className={styles.paragraph}>
          Добро пожаловать в СумкаМир — мир безграничных возможностей стиля.
        </p>
      </section>

      <hr className={styles.divider} />

      
      <section className={`${styles.section} ${styles.values}`}>
        <h2 className={styles.heading}>Почему выбирают СумкаМир?</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <strong>Ручная кураторская подборка.</strong> Только проверенные производители и уникальные дизайны.
          </li>
          <li className={styles.listItem}>
            <strong>Тестеры и образцы.</strong> Убедитесь в выборе перед покупкой.
          </li>
          <li className={styles.listItem}>
            <strong>Стильные консультации.</strong> Наши стилисты помогут с выбором онлайн.
          </li>
          <li className={styles.listItem}>
            <strong>Идеальная доставка.</strong> Распаковка как отдельное удовольствие.
          </li>
          <li className={styles.listItem}>
            <strong>Клуб стиля.</strong> Эксклюзивные предложения для постоянных клиентов.
          </li>
        </ul>
      </section>

      <hr className={styles.divider} />

      {/* Career section */}
      <section className={`${styles.section} ${styles.career}`}>
        <h2 className={styles.subheading}>СумкаМир: Карьера с перспективами</h2>
        <p className={styles.paragraph}>
          Хочешь работать там, где твоя любовь к моде будет востребована? Присоединяйся к нашей команде!
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}><strong>Продукт мечты</strong> — лучшие сумки мира.</li>
          <li className={styles.listItem}><strong>Реальный рост</strong> — твои идеи воплощаются.</li>
          <li className={styles.listItem}><strong>Обучение стилю</strong> — мастер-классы и тренды.</li>
          <li className={styles.listItem}><strong>Гибкий ритм</strong> — удаленная работа.</li>
          <li className={styles.listItem}><strong>Бонусы стиля</strong> — скидки на сумки и ДМС.</li>
        </ul>
      </section>

      <hr className={styles.divider} />

      {/* Partners section */}
      <section className={`${styles.section} ${styles.partners}`}>
        <h2 className={styles.heading}>Наши партнеры</h2>
        {loading ? (
          <p className={styles.paragraph}>Загрузка партнеров...</p>
        ) : partners.length > 0 ? (
          <ul className={styles.partnerList} id="partners-list">
            {partners.map((partner) => (
              <li key={partner.id} className={styles.partnerItem}>
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className={styles.partnerLogo}
                />
                <span>{partner.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className={styles.paragraph}>Партнеры скоро появятся</p>
        )}
      </section>
    </div>
  );
};

export default AboutPage;