import React from 'react';
import './add.css'
import nameIcon from './quote-down-circle.svg'
import descriptionIcon from './smallcaps.svg'


function Add() {
    return (
        <section className="add">
            <div className="add__wrapper">
                <div className="add__text">
                    <h2>Добавить статью</h2>
                    <p>Статья будет добавлена в базу данных и станет видна всем пользователям. Чтобы удалить или редактировать ее - перейдите в нее в словаре на главной странице.</p>
                </div>
                <form className="add__form form" action="">
                    <div className="form__input">
                        <img src={nameIcon} alt="Name icon" />
                        <input className="form__input-name" type="text" placeholder="Название термина" required />
                    </div>
                    <div className="form__input">
                        <img src={descriptionIcon} alt="Description icon" />
                        <input className="form__input-description" type="text" placeholder="Краткое описание (макс. 100 символов)" required />
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

export default Add