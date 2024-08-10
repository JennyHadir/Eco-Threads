import React from 'react'
import logo from '../../asset/image/logo/logo.png'
import { Link } from 'react-scroll'

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="footer-col">
                            <div className="contact-item">
                                <span>email:</span>
                                <button>ghadabennasr2003@gmail.com</button>
                            </div>
                            <br></br> 
                            <div className="contact-item">
                                <span>address:</span>
                                <button>Monastir Bassatine Rue de Girofle <br></br> immeuble Dagdoug</button>
                            </div>
                            <br></br> 
                            <div className="contact-item">
                                <span>number:</span>
                                <button>+216 99 80 14 06</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="footer-col"><Link offset={-50} to='header' className="logo"><img src={logo} alt='' style={{ width: '500px', height: 'auto' }} /></Link></div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="footer-col"><span>&copy;2024 Green Waves .<br></br><br></br>  developed by <a href="https://www.badfi.tech/" target="_blank" rel="noopener noreferrer">Badfi tech</a> All Rights Reserved</span></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
