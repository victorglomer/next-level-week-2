import React, { useState, useEffect } from 'react';
import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';
import { Link } from 'react-router-dom';
import api from '../../services';



function Landing() {


    const [totalConnections, setTotalConnections] = useState(0);

    // buscar assim que a pagina está pronta - useEffect
    useEffect( () => {
        api.get('connections').then(response => {
            const  {total} = response.data;
            setTotalConnections(total);
        });

    }, [])

    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt="proffy" />
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                <img src={LandingImg} alt="" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Estudar" />
                            Estudar
                    </ Link>
                    <Link to="give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Dar aula" />
                            Dar aula
                    </Link>


                </div>
                <span className="total-connections">
                    Total de {totalConnections} conexões já realizadas <img src={purpleHeartIcon} alt="Coração roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing;