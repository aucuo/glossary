import React from 'react';
import './article.css'
import arrowIcon from "./arrow-left.svg";
import editIcon from "./path.svg";
import deleteIcon from "./trash.svg";
import { NavLink } from 'react-router-dom';


function Article() {
    return (
        <section className="article">
            <div className="article__wrapper">
                <div className="article__buttons button">
                    <NavLink to="/" className="article__button-back button">
                        <img src={arrowIcon} alt="Back arrow icon" />
                        <span>На главную</span>
                    </NavLink>
                    <a href="/article" className="article__button-edit button">
                        <img src={editIcon} alt="Edit icon" />
                        <span>Редактировать</span>
                    </a>
                    <a href="/article" className="article__button-delete button">
                        <img src={deleteIcon} alt="Delete icon" />
                        <span>Удалить</span>
                    </a>
                </div>
                <div className="article__text">
                    <h2>Заголовок</h2>
                    <p><b>Lorem ipsum</b> - dolor sit, amet consectetur adipisicing elit. Fugiat quaerat distinctio ea error obcaecati eius officia recusandae qui consectetur tenetur corporis, ad sequi laudantium dignissimos harum enim ratione consequuntur eos.
                        Dignissimos nesciunt necessitatibus quasi praesentium eligendi ex vero atque, architecto quae vel accusamus totam illum sapiente magnam perspiciatis adipisci deserunt eum maxime fugiat odit quo iure mollitia. Natus, iusto repudiandae?
                        Asperiores quam vel exercitationem sint fuga illo itaque, aliquid, dignissimos minus expedita ipsam. Similique, vitae provident. Saepe, laudantium quo recusandae dolor voluptate inventore nostrum aut, velit impedit, aperiam laborum numquam.
                        Qui veniam delectus reprehenderit aperiam ullam odit asperiores fugit optio excepturi, quae, deserunt et adipisci! Provident recusandae maxime illum vero fugiat fuga labore hic autem perferendis possimus expedita, nulla natus.
                        Obcaecati, ab architecto nam eaque atque quod rem est eius suscipit ad dolore tenetur quaerat quis similique sunt vel beatae sequi tempore temporibus voluptatem quae! Nulla facilis harum eveniet ipsum!
                        Earum necessitatibus quos nulla reprehenderit deserunt? Molestias maiores autem eligendi animi sit eaque, blanditiis quam voluptatibus, sunt in unde incidunt iure quaerat necessitatibus quo alias officia? Debitis vitae quo exercitationem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quaerat distinctio ea error obcaecati eius officia recusandae qui consectetur tenetur corporis, ad sequi laudantium dignissimos harum enim ratione consequuntur eos.
                        Dignissimos nesciunt necessitatibus quasi praesentium eligendi ex vero atque, architecto quae vel accusamus totam illum sapiente magnam perspiciatis adipisci deserunt eum maxime fugiat odit quo iure mollitia. Natus, iusto repudiandae?
                        Asperiores quam vel exercitationem sint fuga illo itaque, aliquid, dignissimos minus expedita ipsam. Similique, vitae provident. Saepe, laudantium quo recusandae dolor voluptate inventore nostrum aut, velit impedit, aperiam laborum numquam.
                        Qui veniam delectus reprehenderit aperiam ullam odit asperiores fugit optio excepturi, quae, deserunt et adipisci! Provident recusandae maxime illum vero fugiat fuga labore hic autem perferendis possimus expedita, nulla natus.
                        Obcaecati, ab architecto nam eaque atque quod rem est eius suscipit ad dolore tenetur quaerat quis similique sunt vel beatae sequi tempore temporibus voluptatem quae! Nulla facilis harum eveniet ipsum!
                        Earum necessitatibus quos nulla reprehenderit deserunt? Molestias maiores autem eligendi animi sit eaque, blanditiis quam voluptatibus, sunt in unde incidunt iure quaerat necessitatibus quo alias officia? Debitis vitae quo exercitationem?</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat quaerat distinctio ea error obcaecati eius officia recusandae qui consectetur tenetur corporis, ad sequi laudantium dignissimos harum enim ratione consequuntur eos.
                        Dignissimos nesciunt necessitatibus quasi praesentium eligendi ex vero atque, architecto quae vel accusamus totam illum sapiente magnam perspiciatis adipisci deserunt eum maxime fugiat odit quo iure mollitia. Natus, iusto repudiandae?
                        Asperiores quam vel exercitationem sint fuga illo itaque, aliquid, dignissimos minus expedita ipsam. Similique, vitae provident. Saepe, laudantium quo recusandae dolor voluptate inventore nostrum aut, velit impedit, aperiam laborum numquam.
                        Qui veniam delectus reprehenderit aperiam ullam odit asperiores fugit optio excepturi, quae, deserunt et adipisci! Provident recusandae maxime illum vero fugiat fuga labore hic autem perferendis possimus expedita, nulla natus.
                        Obcaecati, ab architecto nam eaque atque quod rem est eius suscipit ad dolore tenetur quaerat quis similique sunt vel beatae sequi tempore temporibus voluptatem quae! Nulla facilis harum eveniet ipsum!
                        Earum necessitatibus quos nulla reprehenderit deserunt? Molestias maiores autem eligendi animi sit eaque, blanditiis quam voluptatibus, sunt in unde incidunt iure quaerat necessitatibus quo alias officia? Debitis vitae quo exercitationem?</p>
                </div>
            </div>
        </section>
    )
}

export default Article