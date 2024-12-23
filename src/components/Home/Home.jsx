import React from "react";
import "./Home.css"; // Подключение CSS
import Header from "../Header/Header";
import Card from "../Card/Card";
import { cardArray } from "../constans";

export default function Home() {
  return (
    <>
      <Header />
        <main>
          <section className="search">
            <div className="container">
              <div className="search-box">
                <input type="text" placeholder="Поиск..." />
                <button className="btn btn-primary search-btn">
                  <img
                    className="search-btn__icon"
                    src="../../../images/search-thin.svg"
                    alt="Найти"
                  />
                  <span className="search-btn__text">Найти</span>
                </button>
              </div>
            </div>
          </section>

          <section className="content">
            <div className="container">
              <div className="content-box">
                <div className="content-main">
                  <h2 className="content-main__title">Рекомендации для вас</h2>
                  <div className="content-main__list">
                    {
                      cardArray.map(card => (
                        <Card
                          key={card.id}
                          title={card.id}
                          price={card.price}
                          address={card.address}
                          date={card.date}
                          img={card.img}
                          />
                      ))
                    }
                  
                  </div>
                </div>

                <div className="content-side">
                  <h3 className="content-side__title">Сервисы и услуги</h3>
                  <div className="content-side__box">
                    <div className="content-side__list">
                      <div className="content-side__list-item">
                        <img
                          className="content-side__list-item--img"
                          src="../../../images/delivery.svg"
                          alt="img"
                        />
                        <h5 className="content-side__list-item--title">Доставка</h5>
                        <p className="content-side__list-item--text">
                          Проверка при получении и возможность бесплатно вернуть товар
                        </p>
                      </div>

                      <div className="content-side__list-item">
                        <img
                          className="content-side__list-item--img"
                          src="../../../images/file-edit.svg"
                          alt="img"
                        />
                        <h5 className="content-side__list-item--title">Автотека</h5>
                        <p className="content-side__list-item--text">
                          Отчёт с историей авто: пробег, владельцы, сведения о залоге, ДТП и ремонтах
                        </p>
                      </div>

                      <div className="content-side__list-item">
                        <img
                          className="content-side__list-item--img"
                          src="../../../images/Shape (Stroke).svg"
                          alt="img"
                        />
                        <h5 className="content-side__list-item--title">Онлайн бронирование жилья</h5>
                        <p className="content-side__list-item--text">
                          Посуточная аренда квартир и домов
                        </p>
                      </div>
                    </div>

                    <footer className="content-side__footer">
                      <p className="content-side__footer--item">ОО "Абито", 2024</p>
                      <a href="#" className="content-side__footer--item">
                        Политика конфиденциальности
                      </a>
                      <a href="#" className="content-side__footer--item">
                        Обработка данных
                      </a>
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
    </>
  );
}
