import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    if(localStorage.getItem("isLoggedIn") === null){
        localStorage.setItem("isLoggedIn","false");
    }
    return (
        <div>
            <section id="home" className="bg-primary text-white py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-3 text-center">
                            <h1 className="display-5 fw-bold mb-4">Bienvenue sur Poly Assistant </h1>
                            <p className="lead fs-5 mb-4">Votre plateforme centralisée pour les annales et cours de Polytech Paris Saclay.</p>
                            <p className="lead fs-5 mb-4">Simplifiez votre parcours académique avec Poly Assistant en accédant rapidement aux ressources dont vous avez besoin.</p>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-md-4 col-sm-6">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-2 fs-5 fw-bold">Accès Illimité aux Ressources Académiques </h5>
                                    <p className="card-text fs-6">
                                    Découvrez une collection exhaustive d'annales et de cours pour toutes les spécialités de Polytech Paris Saclay. 
                                    Avec Poly Assistant, l'accès à des ressources académiques de qualité est à portée de clic. 
                                    Explorez notre vaste bibliothèque numérique et trouvez les documents dont vous avez besoin pour réussir vos études.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-2 fs-5 fw-bold">Partage et Collaboration Facilités </h5>
                                    <p className="card-text fs-6">
                                    Contribuez à la communauté en partageant vos propres ressources et en collaborant avec vos pairs. 
                                    Poly Assistant encourage le partage et la collaboration entre étudiants, facilitant ainsi l'échange de connaissances et la construction d'une communauté d'apprentissage dynamique.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="card h-100">
                                <div className="card-body text-center">
                                    <h5 className="card-title mb-2 fs-5 fw-bold">Expérience Personnalisée et Sécurisée :</h5>
                                    <p className="card-text fs-6">
                                    Personnalisez votre expérience d'apprentissage en organisant vos ressources de manière intuitive et en accédant à votre bibliothèque personnalisée depuis n'importe quel appareil. 
                                    Profitez d'une plateforme sécurisée qui protège la confidentialité de vos données académiques tout en offrant une expérience fluide et pratique.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;









// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Home = () => {
//     return (
//         <div>
//             <section id="home" className="bg-primary text-whites "> {/* Add class names for background and text color */}
//                 <div className="container-fluid">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8 mt-5 text-center">
//                             <h1 className="display-4 fw-bolder mb-4">Feels the Fresh Business Perspective</h1>
//                             <p className="lead fs-4 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati aut molestiae porro reiciendis consectetur maiores atque necessitatibus blanditiis provident.</p>
//                             {/* <div className="buttons d-flex justify-content-center">
//                                 <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Contact Us</NavLink>
//                             </div> */}
//                         </div>
//                     </div>

//                     <div className="row mt-5">    
//                         <div className="col-md-4 col-sm-6">
//                             <div className="card p-3 ">
//                                 <div className="card-body text-center">
//                                     <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
//                                     <h5 className="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
//                                     <p className="card-text lead">
//                                         Some quick example text to build on the card title and make
//                                         up the bulk of the card's content.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-md-4 col-sm-6">
//                             <div className="card p-3 ">
//                                 <div className="card-body text-center">
//                                     <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
//                                     <h5 className="card-title mb-3 fs-4 fw-bold">Fully Responsive</h5>
//                                     <p className="card-text lead">
//                                         Some quick example text to build on the card title and make
//                                         up the bulk of the card's content.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                          <div className="col-md-4 col-sm-6">
//                             <div className="card p-3 ">
//                                 <div className="card-body text-center">
//                                     <i className="fa fa-users fa-4x mb-4 text-primary"></i>
//                                     <h5 className="card-title mb-3 fs-4 fw-bold">Users Experience</h5>
//                                     <p className="card-text lead">
//                                         Some quick example text to build on the card title and make
//                                         up the bulk of the card's content.
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     );
// }

// export default Home;



