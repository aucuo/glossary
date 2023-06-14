import React from 'react';
import './footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__text">
                    <span>Вы также можете</span>
                    <a href="/add" className="footer__text-button">Добавить свою статью</a>
                </div >
            </footer >
        )
    }
}

export default Footer