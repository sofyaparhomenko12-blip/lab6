// app/sales/page.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import { Tag, Space } from 'antd';
import styles from './page.module.css';


const salesList = [
  {
    id: uuidv4(),
    name: 'Зимняя распродажа',
    categories: ['parfume'],
    saleType: '2for1price',
    saleValue: 50,
    img: '/sale.webp',
  },
  {
    id: uuidv4(),
    name: 'Чёрная пятница: косметика',
    categories: ['cosmetics', 'skincare'],
    saleType: 'sale',
    saleValue: 70,
    img: '/sale.webp',
  },
  {
    id: uuidv4(),
    name: 'Подарок при заказе от 3000₽',
    categories: ['all'],
    saleType: 'gift',
    saleValue: 0,
    img: '/sale.webp',
  },
];

const saleTypeLabels = {
  '2for1price': { label: '2 по цене 1', color: '#2e7d32' },
  sale: { label: `-50%`, color: '#1976d2' },
  gift: { label: 'Подарок', color: '#7b1fa2' },
};

const SalesPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Акции</h1>

      <div className={styles.salesGrid}>
        {salesList.map((sale) => {
          const typeConfig = saleTypeLabels[sale.saleType];

          // Генерация текста бейджа в зависимости от типа
          let badgeText = typeConfig.label;
          if (sale.saleType === 'sale') {
            badgeText = `-${sale.saleValue}%`;
          }

          return (
            <Link href={`/sales/${sale.id}`} key={sale.id} className={styles.saleCard}>
              <div className={styles.saleImageWrapper}>
                <Image
                  src={sale.img}
                  alt={sale.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.saleImage}
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjE1MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjVmNWY1Ii8+PC9zdmc+"
                />
              </div>

              <div className={styles.content}>
                <h3 className={styles.title}>{sale.name}</h3>

                <span
                  className={styles.badge}
                  style={{ backgroundColor: typeConfig.color }}
                >
                  {badgeText}
                </span>

                <div className={styles.categories}>
                  <Space size={4} wrap>
                    {sale.categories.map((cat) => (
                      <Tag key={cat} className={styles.categoryTag}>
                        {cat === 'parfume' ? 'Сумки' : cat === 'cosmetics' ? 'Косметика для ухода' : 'Все'}
                      </Tag>
                    ))}
                  </Space>
                </div>

                {sale.saleType === 'sale' && (
                  <div className={styles.saleValue}>-{sale.saleValue}%</div>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SalesPage;