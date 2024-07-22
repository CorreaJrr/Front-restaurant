import React from 'react';
import '../Image_Gallery/Galeria.css';
<link href="https://fonts.googleapis.com/css2?family=Kalnia:wght@600&display=swap" rel="stylesheet"></link>
import entraña from "../../../public/images/entraña.jpeg";
import bife from "../../../public/images/bife.jpeg"
import pizza from "../../../public/images/pizza.jpeg"
import carne from "../../../public/images/carne-asada.jpeg"
import tamales from "../../../public/images/tamales.jpeg"
import empanadas from "../../../public/images/empanadas.jpeg"
import asado from "../../../public/images/asado-2.jpeg"
import carbonada from "../../../public/images/carbonada.jpg"
import bife2 from "../../../public/images/bife-2.jpg"
import choripan from "../../../public/images/choripan.jpg"
import empanadas2 from "../../../public/images/empanadas-2.jpg"
import locro from "../../../public/images/locro.jpg"
import milanesa from "../../../public/images/milanesa-2.jpg"
import ñoquis from "../../../public/images/ñoqui.jpg"
import medialunas from "../../../public/images/medialunas.jpeg"
import medialunas2 from "../../../public/images/medialunas2.jpeg"
import merienda from "../../../public/images/dulce.jpeg"
import conito from "../../../public/images/conito.jpeg"
import maicena from "../../../public/images/maicenas.jpeg"
import alfajor from "../../../public/images/alfajor.jpeg"
import medialunas3 from "../../../public/images/medialunas3.jpg"
import churros from "../../../public/images/churros.jpg"
import chipa from "../../../public/images/chipa.jpg"
import tortaNegra from "../../../public/images/tortasnegras.jpg"
import rojel from "../../../public/images/rojel.jpeg"
import alfajores from "../../../public/images/alfajores.jpeg"
import bolasFraile from "../../../public/images/bolasdefraile.jpeg"
import pastafrola from "../../../public/images/pastafrola.jpeg"



function Galeria() {
  return (
    <div className='main'>
    <h1 align="center" color=''>Platos Fuertes</h1>
    <h3>Nuestra carta inspirada por grandes chefs argentinos ofrece una gran variedad de platos, tanto del Norte Como del nuestro Sur, de sus platos más importantes de toda la Argentina, siempre podes acompañar de nuestra experiencia gastronómica con los mejores vinos. No te limites a la experiencia y deja que tu paladar recorra cada sabor desde Jujuy hasta Tierra del fuego.</h3>
    <div className='Imagenes-Portada'>
      <div className='wrapper'>
		<div className='single-box'>
			<a href="#">
				<img src={entraña} alt="imagen de entraña (corte de carne)" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={bife} alt="imagen de bife" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={pizza} alt="imagen de pizza" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={carne} alt="imagen de carne" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={tamales} alt="imagen de tamales" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={empanadas} alt="imagen de empanadas" />
			</a>
		</div>
	  </div>
    </div>
    
	{/* comnienzo de las tarjetas de almuerzo */}

    <div class="container-gral">
				<h1 class="title">Almuerzos y Cenas</h1>
				<div class="container-card">
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={asado} alt="imagen de asado" />
							</div>
							<h2>Asado</h2>
							<p>Acompañada de guarnición</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={carbonada} alt="imagen de Carbonada" />
							</div>
							<h2>Carbonada</h2>
							<p>Acompañada de variedades de panes</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={bife2} alt="imagen de Bife" />
							</div>
							<h2>Bife</h2>
							<p>Acompañada de guarnición</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={choripan} alt="imagen de Choripan" />
							</div>
							<h2>Choripan</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={empanadas2} alt="imagen de empanadas" />
							</div>
							<h2>Empanadas</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={locro} alt="imagen de locro" />
							</div>
							<h2>Locro</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={milanesa} alt="imagen de milanesa" />
							</div>
							<h2>Milanesa</h2>
							<p>Acompañada de guarnición</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={ñoquis} alt="imagen de ñoquis de Papa" />
							</div>
							<h2>Ñoquis de Papa</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
				</div>
	</div>

	<h1 align="center" color=''>Dulce Truco</h1>
    <h3>Tanto lo salado como lo dulce de nuestra Argentina vas a poder disfrutar, y en este caso te ofrecemos de la panadería mas tradicional del pais, contamos con productos frescos y de alta calidad, te ofrecemos la panadería que te acompaño en gran parte de tu infancia, sin dejar de lado lo casero ya que eso nos caracteriza.</h3>

    <div className='Imagenes-Portada'>
      <div className='wrapper'>
		<div className='single-box'>
			<a href="#">
				<img src={medialunas} alt="imagen de medialunas" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={medialunas2} alt="imagen de medialunas" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={merienda} alt="imagen de pan frito" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={conito} alt="imagen de conitos rellenos" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={maicena} alt="imagen de alfajores de maicenas" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={alfajor} alt="imagen de alfajores de chocolate" />
			</a>
		</div>
	  </div>
    </div>

	{/* comnienzo de las tarjetas de merienda */}

	<div class="container-gral">
				<h1 class="title">Desayunos y meriendas</h1>
				<div class="container-card">
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src={medialunas3} alt="imagen de medialunas" />
							</div>
							<h2>Medialunas</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src={churros} alt="imagen de churros" />
							</div>
							<h2>Churros</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src={chipa} alt="imagen de chipa" />
							</div>
							<h2>Chipa</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src={tortaNegra} alt="imagen de torta negra" />
							</div>
							<h2>Torta Negra</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
                    <div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src={rojel} alt=" imagen de torta rojel" />
							</div>
							<h2>Torta Rojel</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
                    <div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src={alfajores} alt="imagen de alfajores" />
							</div>
							<h2>Alfajores</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
                    <div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src={bolasFraile} alt="imagen de bolas de fraile" />
							</div>
							<h2>Bolas de Fraile</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
                    <div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src={pastafrola} alt="imagen de pasta frola" />
							</div>
							<h2>Pasta Frola</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
				</div>
	</div>


    </div>
  );
};

export default Galeria;