import Link from "next/link";

import { Card } from 'antd';
import { Carousel } from 'antd';
import styles from "./page.module.css";

const bags = [
  { id: "1", imgurl: "/1сумка.jpg", name: "Gardenia Noi", price: "5 200" },
  { id: "2", imgurl: "/2сумка.jpg", name: "Jasmine Éclat", price: "4 800" },
  { id: "3", imgurl: "/3сумка.jpg", name: "Oud Royal", price: "12 900" },
  { id: "4", imgurl: "/4сумка.jpg", name: "Vanille Absolue", price: "6 100" },
  { id: "5", imgurl: "/5сумка.jpg", name: "Rose de Mai", price: "7 300" },
  { id: "6", imgurl: "/6сумка.jpg", name: "Ambre Lumineux", price: "5 900" },
  { id: "7", imgurl: "/7сумка.jpg", name: "Santal Blanc", price: "8 400" },
  { id: "8", imgurl: "/8сумка.jpg", name: "Bergamote Fraîche", price: "4 200" },
  { id: "9", imgurl: "/9сумка.jpg", name: "Tubéreuse Nocturne", price: "6 700" },
  { id: "10", imgurl: "/10сумка.jpg", name: "Patchouli Vintage", price: "5 600" },
  
];

const MainPage = () => {
const contentStyle = {
  margin: 0,
  height: '720px',
  width: "100%",
  color: '#fff',
  textAlign: 'center',
};
  return (
    <>
      
  <Carousel autoplay={{ dotDuration: true }} autoplaySpeed={3000}>
    <div>
      <img style={contentStyle}  src="/сумка.PNG" alt="1" />
    </div>
    <div>
      <img style={contentStyle}  src="/акция.PNG" alt="1" />
    </div>
  </Carousel>
      <main>
        <h2>Каталог товаров</h2>
        <div className={styles.perfumesList}>
          {
            bags.map((bag) => {
              return (
                <Card
                  key={bag.id}
                  hoverable
                  className={styles.cardRoot}
                  cover={
                    <img
                      draggable={false}
                      alt={bag.name}
                      src={bag.imgurl}
                      className={styles.cardCover}
                    />
                  }
                  bodyclassname={styles.cardBody}
                >
                  <p>{bag.name}</p>
                  <p>Цена: {bag.price} ₽</p>
                </Card>
              )
            })
          }

        </div>
      </main>
      <footer>

      </footer>
    </>
  )
}

export default MainPage;
