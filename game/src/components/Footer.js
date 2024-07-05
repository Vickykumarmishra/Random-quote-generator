import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <div style={{ marginBottom: '0rem' }}>
      <div className="container-fluid my-5">
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#05b993' }}>
          <div className="container p-4 pb-0" style={{ marginBottom: '0rem' }}>
            <section>
              <div className="row" style={{ marginBottom: '0rem' }}>
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Quote Generator</h6>
                  <p style={{ color: "white" }}>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold" style={{ color: 'white' }}>Products</h6>
                  <p style={{ color: 'white' }}>
                    <a className="text-white">MDBootstrap</a>
                  </p>
                  <p style={{ color: 'white' }}>
                    <a className="text-white">MDWordPress</a>
                  </p>
                  <p style={{ color: 'white' }}>
                    <a className="text-white">BrandFlow</a>
                  </p>
                  <p style={{ color: 'white' }}>
                    <a className="text-white">Bootstrap Angular</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p style={{ color: 'white' }}><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p style={{ color: 'white' }}><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                  <p style={{ color: 'white' }}><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p style={{ color: 'white' }}><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#3b5998' }} href="#!" role="button">
                    <FaFacebookF />
                  </a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#55acee' }} href="#!" role="button">
                    <FaTwitter />
                  </a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#dd4b39' }} href="#!" role="button">
                    <FaGoogle />
                  </a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#ac2bac' }} href="#!" role="button">
                    <FaInstagram />
                  </a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#0082ca' }} href="#!" role="button">
                    <FaLinkedin />
                  </a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: '#333333' }} href="#!" role="button">
                    <FaGithub />
                  </a>
                </div>
              </div>
            </section>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', marginBottom: "0rem" }}>
            © 2029 Copyright:
            <a className="text-white" href="#">Quote Generator</a>
          </div>
        </footer>
      </div>
    </div>
  )
}
