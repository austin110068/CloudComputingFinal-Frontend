import React from "react";
import {Link} from "react-router-dom";
import "./footer.css"

const Footer = () => {
  return (
      // <footer className="bg-dark py-3 ">
      //   <div className="text-center">
      //     <span className="text-muted text-center">&copy; Whiteboard 2021</span>
      //   </div>
      // </footer>

      // <footer class="page-footer font-small special-color-dark bg-dark py-3">
      //
      //   <div class="container-fluid text-center text-md-left">
      //
      //     <div class="row">
      //
      //       <div class="col-md-6 mt-md-0 mt-3">
      //
      //         <h5 class="text-uppercase font-weight-bold">Footer text 1</h5>
      //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita sapiente sint, nulla, nihil
      //           repudiandae commodi voluptatibus corrupti animi sequi aliquid magnam debitis, maxime quam recusandae
      //           harum esse fugiat. Itaque, culpa?</p>
      //
      //       </div>
      //
      //     </div>
      //   </div>
      //   <div class="footer-copyright text-center py-3">© 2020 Copyright:
      //     <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
      //   </div>
      // </footer>
      <div className='main-footer'>
        <footer className="font-small bg-dark text-light pt-3">

          <div className="container-fluid text-center text-md-left">

            <div className="row ml-5">
              <div className="col-md-6 mt-md-0 mt-3">

                <h5>Project Description:</h5>
                <p style={{color: '#9f9f9f'}}>
                  MealForToday.com is the final project of CS5610 Web
                  Development at Northeastern University.
                </p>
                <h5>Team Member:</h5>
                <p style={{color: '#9f9f9f'}}>Xiang Zhang, Zhe Zhao, Muhan Na,
                  Yuyan Zhou</p>

              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5>Service</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" style={{color: '#9f9f9f'}}>Home</a>
                  </li>
                  <li>
                    <a href="/search" style={{color: '#9f9f9f'}}>Search</a>
                  </li>

                </ul>

              </div>
              <div className="col-md-3 mb-md-0 mb-3">
                <h5>Account</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="/" style={{color: '#9f9f9f'}}>Subscribe</a>
                  </li>
                  <li>
                    <a href="/login" style={{color: '#9f9f9f'}}>Login</a>
                  </li>
                  <li>
                    <a href="/profile"
                          style={{color: '#9f9f9f'}}>Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright text-center">2021 Copyright:&nbsp;
            <span className="text-center py-3">&copy; Whiteboard 2021</span>
          </div>

        </footer>
      </div>
  )
}

export default Footer