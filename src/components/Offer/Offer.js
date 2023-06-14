import React from 'react';
import './offer.css'
import userIcon from './user.svg'
import emailIcon from './sms.svg'

function Offer() {
    return (
        <section className="offer">
            <div className="offer__wrapper">
                <div className="offer__text">
                    <h2>Предложить статью</h2>
                    <p>Вы можете предложить свою статью. После модерации мы можем ее опубликовать. Заполните форму и мы рассмотрим ваше предложение.</p>
                </div>
                <form className="offer__form form" action="">
                    <div className="form__userinfo">
                        <div className="form__input">
                            <img src={userIcon} alt="Person icon" />
                            <input className="form__input-login" type="text" placeholder="Имя" required/>
                        </div>
                        <div className="form__input">
                            <img src={emailIcon} alt="Email icon" />
                            <input className="form__input-password" type="email" placeholder="Email" required/>
                        </div>
                    </div>
                    <div className="form__input">
                        <textarea className="form__input-text" type="text" ro placeholder="Текст..." required></textarea>
                    </div>
                    <button>Отправить</button>
                </form>
            </div>
        </section>
    )
}

export default Offer