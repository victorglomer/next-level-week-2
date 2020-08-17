import React from 'react';
import whatsappImagem from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars2.githubusercontent.com/u/2295384?s=460&u=744c3932721636ce5b8e3cc0bcb9750e121db6a5&v=4" alt="Rodrigo" />
                <div>
                    <strong>Rodrigo</strong>
                    <span>Química</span>

                </div>
            </header>
            <p>
                texto maneiro
        </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$ 10,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappImagem} alt="Whatsapp" />
                Entrar em contato
            </button>
            </footer>
        </article>
    )
}
export default TeacherItem;