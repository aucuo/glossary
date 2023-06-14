import React from 'react';
import './sign.css'
import arrowIcon from "./arrow-left.svg";
import userIcon from "./user.svg";
import passwordIcon from "./lock.svg";

function Sign() {
    return (
        <section className="sign">
            <div className="sign__wrapper">
                <a href="/" className="sign__button">
                    <img src={arrowIcon} alt="Arrow back icon" />
                    <span>На главную</span>
                </a>
                <div className="sign__card card">
                    <div className="card__text">
                        <h2>Вход</h2>
                        <p>Введите свой логин и пароль</p>
                    </div>
                    <form className="card__form form" action="sign.php" method="post">
                        <div className="form__input">
                            <img src={userIcon} alt="User icon" />
                            <input name="login" className="form__input-login" type="text" placeholder="Логин" required />
                        </div>
                        <div className="form__input">
                            <img src={passwordIcon} alt="Password icon" />
                            <input name="password" className="form__input-password" type="text" placeholder="Пароль" required />
                        </div>
                        <button>Войти</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Sign