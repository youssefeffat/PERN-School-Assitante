import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <section id="home" className="bg-primary text-whites "> {/* Add class names for background and text color */}
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 mt-5">
                            <h1 className="display-4 fw-bolder mb-4 text-center">Feels the Fresh Business Perspective</h1>
                            <p className="lead text-center fs-4 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati aut molestiae porro reiciendis consectetur maiores atque necessitatibus blanditiis provident.</p>
                            {/* <div className="buttons d-flex justify-content-center">
                                <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Contact Us</NavLink>
                            </div> */}
                        </div>
                    </div>
                </div>

                <div className="row mt-5">    
                    <div className="col-md-4">
                        <div className="card p-3 ">
                            <div className="card-body text-center">
                                <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
                                <p className="card-text lead">
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 ">
                            <div className="card-body text-center">
                                <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Fully Responsive</h5>
                                <p className="card-text lead">
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-4">
                        <div className="card p-3 ">
                            <div className="card-body text-center">
                                <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Users Experience</h5>
                                <p className="card-text lead">
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">    
                    <div className="col-md-4">
                        <div className="card p-3 ">
                            <div className="card-body text-center">
                                <i className="fa fa-cogs fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Highly Customizable</h5>
                                <p className="card-text lead">
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card p-3 ">
                            <div className="card-body text-center">
                                <i className="fa fa-mobile fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Fully Responsive</h5>
                                <p className="card-text lead">
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                     <div className="col-md-4">
                        <div className="card p-3 ">
                            <div className="card-body text-center">
                                <i className="fa fa-users fa-4x mb-4 text-primary"></i>
                                <h5 className="card-title mb-3 fs-4 fw-bold">Users Experience</h5>
                                <p className="card-text lead">
                                    Some quick example text to build on the card title and make
                                    up the bulk of the card's content.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>   
            </section>
        </div>
    );
}

export default Home;






                {/* <div>
                    <div className="container shadow col-md-3 d-flex flex-column align-items-center text-white justify-content-center my-0" d-flex>                    
                            <h1 className="display-7 fw-bolder">Welcome Back</h1>
                            <p className="lead text-center">Enter Your Credentials To Login</p>
                    </div>
                </div> */}

// import React from 'react';
// //import About from './About';
// // import Contact from './Contact';
// //import Services from './Services';
// import { NavLink } from 'react-router-dom';

// const Home = () => {
//     return (
//         <div>
//             <section id="home">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8 mt-5">
//                             <h1 className="display-4 fw-bolder mb-4 text-center text-white">Feels the Fresh Business Perspective</h1>
//                             <p className="lead text-center fs-4 mb-5 text-white">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit obcaecati aut molestiae porro reiciendis consectetur maiores atque necessitatibus blanditiis provident.</p>
//                             <div className="buttons d-flex justify-content-center">
//                                 <NavLink to="/contact" className="btn btn-light me-4 rounded-pill px-4 py-2">Contact Us</NavLink>
//                                 {/* <NavLink to="/service" className="btn btn-outline-light rounded-pill px-4 py-2">Our Services</NavLink> */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* <About/>
//             <Services/>
//             <Contact/> */}
//         </div>
//     );
// }

// export default Home;