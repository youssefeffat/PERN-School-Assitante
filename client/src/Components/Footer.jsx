import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-white bg-primary py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <h4>POLY ASSISTANT</h4>
          </div>
          <div className="col-md-3 col-sm-6">
            <h5>Navigation</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <NavLink to="/" className="nav-link p-0 text-white">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="/About" className="nav-link p-0 text-white">
                  About
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to="/Contact" className="nav-link p-0 text-white">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-md-6 col-sm-12">
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email address"
              />
              <button className="btn btn-dark rounded-end" type="button">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="row mt-2 border-top">
          <div className="col-md-6 col-sm-12">
            <p>© 2024 Polytech Paris Saclay, Inc. All rights reserved.</p>
          </div>
          <div className="col-md-6 col-sm-12 text-end">
            <ul className="list-inline">
              <li className="list-inline-item me-3">
                <NavLink className="link-light" to="#">
                  <i className="fa fa-facebook fa-lg"></i>
                </NavLink>
              </li>
              <li className="list-inline-item me-3">
                <NavLink className="link-light" to="#">
                  <i className="fa fa-instagram fa-lg"></i>
                </NavLink>
              </li>
              <li className="list-inline-item">
                <NavLink className="link-light" to="#">
                  <i className="fa fa-twitter fa-lg"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;






// import React from "react";
// import { NavLink } from "react-router-dom";

// const Footer = () => {
//   return (
//     <div className="footer-container">
//     <footer className="footer text-white bg-primary fixed-bottom py-3">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3">
//             <h4>POLY ASSISTANT</h4>
//           </div>
//           <div className="col-md-3">
//             <h5>Navigation</h5>
//             <ul className="nav flex-column">
//               <li className="nav-item mb-2">
//                 <NavLink to="/" className="nav-link p-0 text-white">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink to="/About" className="nav-link p-0 text-white">
//                   About
//                 </NavLink>
//               </li>
//               <li className="nav-item mb-2">
//                 <NavLink
//                   to="/Contact"
//                   className="nav-link p-0 text-white"
//                 >
//                   Contact Us
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//           <div className="col-md-6">
//             <h5>Subscribe to our newsletter</h5>
//             <p>Monthly digest of what's new and exciting from us.</p>
//             <div className="input-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Email address"
//               />
//               <button className="btn btn-dark rounded-end" type="button">
//                 Subscribe
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="row mt-4 border-top">
//           <div className="col-md-6">
//             <p>© 2024 Polytech Paris Saclay, Inc. All rights reserved.</p>
//           </div>
//           <div className="col-md-6 text-end">
//             <ul className="list-inline">
//               <li className="list-inline-item me-3">
//                 <NavLink className="link-light" to="#">
//                   <i className="fa fa-facebook fa-lg"></i>
//                 </NavLink>
//               </li>
//               <li className="list-inline-item me-3">
//                 <NavLink className="link-light" to="#">
//                   <i className="fa fa-instagram fa-lg"></i>
//                 </NavLink>
//               </li>
//               <li className="list-inline-item">
//                 <NavLink className="link-light" to="#">
//                   <i className="fa fa-twitter fa-lg"></i>
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </footer>
//     </div>
//   );
// };

// export default Footer;





















// // import React from "react";
// // import { NavLink } from "react-router-dom";

// // const Footer = () => {
// //   return (
// //     <div>
// //       <footer className="footer text-white">
// //         <div className="container">
// //           <footer className="py-5">
// //             <div className="row">
// //               <div className="col-3">
// //                 <h4>FINE ART</h4>
// //               </div>

// //               <div className="col-2">
// //                 <h5>Section</h5>
// //                 <ul className="nav flex-column">
// //                   <li className="nav-item mb-2">
// //                     <NavLink to="/" className="nav-link p-0 text-white">
// //                       Home
// //                     </NavLink>
// //                   </li>
// //                   <li className="nav-item mb-2">
// //                     <NavLink to="/About" className="nav-link p-0 text-white">
// //                       About
// //                     </NavLink>
// //                   </li>
// //                   <li className="nav-item mb-2">
// //                     <NavLink to="/Contact" className="nav-link p-0 text-white">
// //                       Conatct Us
// //                     </NavLink>
// //                   </li>
// //                 </ul>
// //               </div>

// //               {/* <div className="col-2">
// //                 <h5>Section</h5>
// //                 <ul className="nav flex-column">
// //                   <li className="nav-item mb-2">
// //                     <NavLink to="#" className="nav-link p-0 text-white">
// //                       Home
// //                     </NavLink>
// //                   </li>
// //                   <li className="nav-item mb-2">
// //                     <NavLink to="#" className="nav-link p-0 text-white">
// //                       Features
// //                     </NavLink>
// //                   </li>
// //                   <li className="nav-item mb-2">
// //                     <NavLink to="#" className="nav-link p-0 text-white">
// //                       Pricing
// //                     </NavLink>
// //                   </li>
// //                   <li className="nav-item mb-2">
// //                     <NavLink to="#" className="nav-link p-0 text-white">
// //                       FAQs
// //                     </NavLink>
// //                   </li>
// //                   <li className="nav-item mb-2">
// //                     <NavLink to="#" className="nav-link p-0 text-white">
// //                       About
// //                     </NavLink>
// //                   </li>
// //                 </ul>
// //               </div> */}

// //               <div className="col-4 offset-1">
// //                 <form>
// //                   <h5>Subscribe to our newsletter</h5>
// //                   <p>Monthly digest of whats new and exciting from us.</p>
// //                   <div className="d-flex w-100 gap-2">
// //                     <label htmlFor="newsletter1" className="visually-hidden">
// //                       Email address
// //                     </label>
// //                     <input
// //                       id="newsletter1"
// //                       type="text"
// //                       className="form-control"
// //                       placeholder="Email address"
// //                     />
// //                     <button
// //                       className="btn btn-primary rounded-pill px-4"
// //                       type="button"
// //                     >
// //                       Subscribe
// //                     </button>
// //                   </div>
// //                 </form>
// //               </div>
// //             </div>

// //             <div className="d-flex justify-content-between pt-4 mt-4 border-top">
// //               <p>© 2024 Company, Inc. All rights reserved.</p>
// //               <ul className="list-unstyled d-flex">
// //                 <li className="ms-3">
// //                   <NavLink className="link-light" to="#">
// //                     <i className="fa fa-facebook fa-2x"></i>
// //                   </NavLink>
// //                 </li>
// //                 <li className="ms-3">
// //                   <NavLink className="link-light" to="#">
// //                     <i className="fa fa-instagram fa-2x"></i>
// //                   </NavLink>
// //                 </li>
// //                 <li className="ms-3">
// //                   <NavLink className="link-light" to="#">
// //                     <i className="fa fa-twitter fa-2x"></i>
// //                   </NavLink>
// //                 </li>
// //               </ul>
// //             </div>
// //           </footer>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default Footer;