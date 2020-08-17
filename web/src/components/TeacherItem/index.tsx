import React from 'react';
import whatsappImagem from '../../assets/images/icons/whatsapp.svg'

import './styles.css';
import api from '../../services';

export interface Professor {
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    nome: string,
    subject: string,
    whatsapp: string,
}

interface dadosProfessorProps {
    teacher: Professor;
}

const TeacherItem: React.FC<dadosProfessorProps> = ({ teacher }) => {

    function createNewConnection() {
        api.post('connections', {
            user_id: teacher.id
        })
    }

    return (
        <article className="teacher-item">
            <header>
                <img src={teacher.avatar} alt={teacher.nome} />
                <div>
                    <strong>{teacher.nome}</strong>
                    <span>{teacher.subject}</span>

                </div>
            </header>
            <p>
                {teacher.bio}
            </p>
            <footer>
                <p>
                    Preço/hora
                <strong>R$ {teacher.cost}</strong>
                </p>
                <a 
                    target="_blank" 
                    onClick={createNewConnection} 
                    href={`https://wa.me/${teacher.whatsapp}`} type="button">
                    <img src={whatsappImagem} alt="Whatsapp" />
                    Entrar em contato
                </a>
            </footer>
        </article>
    )
}
export default TeacherItem;