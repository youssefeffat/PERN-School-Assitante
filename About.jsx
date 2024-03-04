import React from 'react';
import Footer from './Footer';
const About = () => {
    return (
        <div>
            <section id="about" className="pb-5">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img
                             src="https://static.apidae-tourisme.com/filestore/objets-touristiques/images/186/145/17076666-diaporama.jpg" 
                             alt="About" 
                             className="w-100 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <h1 className="display-6 mb-2">Qui sommes nous ?</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">Poly Assistant est le fruit du travail d'une équipe de développeurs passionnés, tous étudiants de Polytech Paris Saclay. Forts de notre propre expérience étudiante, nous avons créé cette plateforme pour simplifier et enrichir le parcours académique de nos pairs. Notre engagement envers l'excellence et l'innovation guide chacune de nos actions, dans le but de fournir une solution de qualité supérieure adaptée aux besoins spécifiques de notre communauté éducative.</p>
                        {/* <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                       <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                     */}</div> 
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;