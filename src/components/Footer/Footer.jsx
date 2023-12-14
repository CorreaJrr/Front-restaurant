import React from 'react'
import '../footer/Footer.css'
import { BiLogoGmail, BiLogoInstagram, BiSolidPhone } from "react-icons/bi";


function Footer() {
  return (
    <div className='footer'>
        <div className='section_padding'>
            <div className='links'>
                <div className='links_div'>
                    <h4>Contactanos</h4>
                    <a href="/instagram">
                        <p><BiLogoInstagram/> Sabor Argentino</p>
                    </a>
                    <a href="/gmail">
                        <p><BiLogoGmail/> saborargentino@gmail</p>
                    </a>
                    <a href="/celular">
                        <p><BiSolidPhone/> +54 0381 1234567</p>
                    </a>
                </div>
                <div className='links_div'>
                    <h4>Sucursales</h4>
                    <a href="/sucursal-1">
                        <p>Congreso 767</p>
                    </a>
                    <a href="/sucursal-1">
                        <p>Av. Sarmiento 232</p>
                    </a>
                    <a href="/sucursal-1">
                        <p>12 de Octubre 490</p>
                    </a>
                </div>
                <div className='links_div'>
                    <h4>Horarios</h4>
                    <p>Lunes a Viernes:</p>
                    <p>07:00 a 22:00</p>
                    <p>Sabados y Domingos:</p>
                    <p>10:00 a 01:00</p>
                </div>
            </div>

            <hr/>

            <div className='abajo'>
                <div className='copyright'>
                    <p>
                        @{new Date().getFullYear()} Sabor Argentino. All right reserver.
                    </p>
                </div>
                <div className='abajo_links'>
                    <a href="terms"><div><p>Terms & Conditions</p></div></a>
                    <a href="privacy"><div><p>Privacy</p></div></a>
                    <a href="segurity"><div><p>Segurity</p></div></a>
                    <a href="cookie"><div><p>Cookie Declaration</p></div></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;