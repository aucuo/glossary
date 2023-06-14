import React from 'react';
import './index.css'
import searchIcon from "./search-normal.svg";

function Index() {
    const alphabet1 = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К', 'Л', 'М', 'Н', 'О'];
    const alphabet2 = ['П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Э', 'Ю', 'Я'];

    return (
        <div className="index-wrapper">
            <section className="search">
                <div className="search__wrapper">
                    <div className="search__text">
                        <h2>Поиск по словарю</h2>
                        <p>Можно выбрать несколько букв, по которым нужно просмотреть слова и термины. Если нужно найти что-либо - введите запрос. Если буквы не выбраны, то будут показаны все результаты.</p>
                    </div>
                    <div className="search__menu">
                        <form className="search__menu-form" action="">
                            <img src={searchIcon} alt="Search icon" />
                            <input className="search__menu-input" type="text" placeholder="Поиск..." />
                        </form>
                        <div className="search__menu-letters letters">
                            {
                                alphabet1.map((letter, index) => (
                                    <div className="letters__letter" key={index}>
                                        <input type="checkbox" id={`checkbox${letter}`} />
                                        <label htmlFor={`checkbox${letter}`}>{letter}</label>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="search__menu-letters letters">
                            {
                                alphabet2.map((letter, index) => (
                                    <div className="letters__letter" key={index}>
                                        <input type="checkbox" id={`checkbox${letter}`} />
                                        <label htmlFor={`checkbox${letter}`}>{letter}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section className="result">
                <div className="result__wrapper">
                    <div className="result__item">
                        <h3>А</h3>
                        <ul>
                            <li><a href="">Абсолютный идеализм</a></li>
                            <li><a href="">Акеизм</a></li>
                            <li><a href="">Анекдот</a></li>
                            <li><a href="">Атомарный факт</a></li>
                        </ul>
                    </div>
                    <div className="result__item">
                        <h3>А</h3>
                        <ul>
                            <li><a href="">Абсолютный идеализм</a></li>
                            <li><a href="">Акеизм</a></li>
                            <li><a href="">Анекдот</a></li>
                            <li><a href="">Атомарный факт</a></li>
                        </ul>
                    </div>
                    <div className="result__item">
                        <h3>А</h3>
                        <ul>
                            <li><a href="">Абсолютный идеализм</a></li>
                            <li><a href="">Акеизм</a></li>
                            <li><a href="">Анекдот</a></li>
                            <li><a href="">Атомарный факт</a></li>
                        </ul>
                    </div>
                    <div className="result__item">
                        <h3>А</h3>
                        <ul>
                            <li><a href="">Абсолютный идеализм</a></li>
                            <li><a href="">Акеизм</a></li>
                            <li><a href="">Анекдот</a></li>
                            <li><a href="">Атомарный факт</a></li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Index