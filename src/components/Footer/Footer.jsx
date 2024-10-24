import React from 'react'
import './Footer.css'
import 'react-icons/bi'
import { BiLogoGmail, BiLogoInstagram, BiSolidPhone } from "react-icons/bi";
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className='footer'>
        <div className='section_padding'>
            <div className='links'>
                <div className='links_div'>
                    <h4>Contactanos</h4>
                    <a href="instagram">
                        <p><BiLogoInstagram/> Sabor Argentino</p>
                    </a>
                    <a href="email">
                        <p><BiLogoGmail/> saborargentino@gmail.com</p>
                    </a>
                    <a href="celular">
                        <p><BiSolidPhone/> +54 0381 1234567</p>
                    </a>
                </div>
                <div className='links_div'>
                    <h4>Sucursales</h4>
                    <a href="sucursal">
                        <p>Congreso 767</p>
                    </a>
                    <a href="sucursal">
                        <p>Av. Sarmiento 232</p>
                    </a>
                    <a href="sucursal">
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
                    <Link to='/Error404'><div><p>Terminos & Condiciones</p></div></Link>
                    <Link to='/Error404'><div><p>Privacidad</p></div></Link>
                    <Link to='/Error404'><div><p>Seguridad</p></div></Link>
                    <Link to='/Error404'><div><p>Cookie Declaration</p></div></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;