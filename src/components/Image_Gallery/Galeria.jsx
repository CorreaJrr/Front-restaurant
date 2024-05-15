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


function Galeria() {
  return (
    <div className='main'>
    <h1 align="center" color=''>Platos Fuertes</h1>
    <h3>Nuestra carta inspirada por grandes chefs argentinos ofrece una gran variedad de platos, tanto del Norte Como del nuestro Sur, de sus platos más importantes de toda la Argentina, siempre podes acompañar de nuestra experiencia gastronómica con los mejores vinos. No te limites a la experiencia y deja que tu paladar recorra cada sabor desde Jujuy hasta Tierra del fuego.</h3>
    <div className='Imagenes-Portada'>
      <div className='wrapper'>
		<div className='single-box'>
			<a href="#">
				<img src={entraña} alt="" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={bife} alt="" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={pizza} alt="" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={carne} alt="" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={tamales} alt="" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src={empanadas} alt="" />
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
								<img src={asado} alt="asado" />
							</div>
							<h2>Asado</h2>
							<p>Acompañada de guarnición</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={carbonada} alt="Carbonada" />
							</div>
							<h2>Carbonada</h2>
							<p>Acompañada de variedades de panes</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={bife2} alt="Bife" />
							</div>
							<h2>Bife</h2>
							<p>Acompañada de guarnición</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={choripan} alt="Choripan" />
							</div>
							<h2>Choripan</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={empanadas2} alt="Empanadas" />
							</div>
							<h2>Empanadas</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={locro} alt="Locro" />
							</div>
							<h2>Locro</h2>
							<p>Acompañada de entrada</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src={milanesa} alt="Milanesa" />
							</div>
							<h2>Milanesa</h2>
							<p>Acompañada de guarnición</p>
						</div>
					</div>
					<div class="card-Almuerzo">
						<div class="card">
							<div class="card-img">
								<img src="src\assets\imagenes\ñoqui.jpg" alt="Ñoquis de Papa" />
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
				<img src="src\assets\imagenes\port-7.jpeg" alt="" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src="src\assets\imagenes\port-8.jpeg" alt="" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src="src\assets\imagenes\port-9.jpeg" alt="" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src="src\assets\imagenes\port-10.jpeg" alt="" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src="src\assets\imagenes\port-11.jpeg" alt="" />
			</a>
		</div>
		<div className='single-box'>
			<a href="#">
				<img src="src\assets\imagenes\port-12.jpeg" alt="" />
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
								<img src="src\assets\imagenes\medialunas.jpg" alt="Medialunas" />
							</div>
							<h2>Medialunas</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src\assets\imagenes\churros.jpg" alt="Churros" />
							</div>
							<h2>Churros</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src\assets\imagenes\chipa.jpg" alt="Chipa" />
							</div>
							<h2>Chipa</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
					<div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src\assets\imagenes\tortasnegras.jpg" alt="Torta-Negra" />
							</div>
							<h2>Torta Negra</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
                    <div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src\assets\imagenes\rojel.jpeg" alt="Torta Rojel" />
							</div>
							<h2>Torta Rojel</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
                    <div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src\assets\imagenes\alfajores.jpeg" alt="Alfajores" />
							</div>
							<h2>Alfajores</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
                    <div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src\assets\imagenes\bolasdefraile.jpeg" alt="Bolas de Fraile" />
							</div>
							<h2>Bolas de Fraile</h2>
							<p>Acompañada de cualquier infusion</p>
						</div>
					</div>
                    <div class="card-Desayuno">
						<div class="card">
							<div class="card-img">
								<img src="src\assets\imagenes\pastafrola.jpeg" alt="Pasta Frola" />
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