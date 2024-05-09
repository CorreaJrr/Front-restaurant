import React from 'react'
import './Footer.css'
import 'react-icons/bi'
import { BiLogoGmail, BiLogoInstagram, BiSolidPhone } from "react-icons/bi";

function Footer() {
  return (
    <div className='footer'>
        <div className='section_padding'>
            <div className='links'>
                <div className='links_div'>
                    <h4>Contactanos</h4>
                    <a href="">
                        <p><BiLogoInstagram/> Sabor Argentino</p>
                    </a>
                    <a href="">
                        <p><BiLogoGmail/> saborargentino@gmail.com</p>
                    </a>
                    <a href="">
                        <p><BiSolidPhone/> +54 0381 1234567</p>
                    </a>
                </div>
                <div className='links_div'>
                    <h4>Sucursales</h4>
                    <a href="">
                        <p>Congreso 767</p>
                    </a>
                    <a href="">
                        <p>Av. Sarmiento 232</p>
                    </a>
                    <a href="">
                        <p>12 de Octubre 490</p>
                    </a>
                </div>
                <div className='links_div'>
                    <h4>Horarios</h4>
                    <p>Lunes a Domingo:</p>
                    <p>07:00 a 21:00</p>
                </div>
            </div>

            <hr/>

            <div className='abajo'>
                <div className='copyright'>
                    <p>
                        @{new Date().getFullYear()} Sabor Argentino. All rights reserved.
                    </p>
                </div>
                <div className='abajo_links'>
                    <a href="terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="privacy"><div><p>Privacy</p></div></a>
                    <a href="segurity"><div><p>Security</p></div></a>
                    <a href="cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;