<template>
  	<div class="container-gruop">
		<h1>Grupos en casa</h1>
		<template v-if="tipoEjercicio == grupoMuscular['Pierna'].toString()">
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Principiante</h2>
    <!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pierna/sentadilla.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Sentadilla</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Es el ejercicio más básico de calistenia, pero no por ello fácil. Intenta bajar hasta que las nalgas lleguen o supere la altura de las rodillas (90°) sin doblar la espalda. 
									Puedes utilizar cualquier tipo de lastre (peso extra) para añadirle dificultad al movimiento.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pierna/lunges.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Lunges</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									En esta variante de lunges –o zancadas– in situ debes permanecer en un mismo punto bajando y subiendo sin separar los pies del suelo. 
									Después de llegar a cierto número de repeticiones cambias de pierna.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pierna/calf-raises.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Calf Raises</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									En este ejercicio puedes utilizar el suelo o un escalón para tener mayor rango de movimiento. 
									También te recomiendo utilizar calzado para que sea más cómodo, levanta los talones manteniendo la punta de los pies pegadas al suelo en todo momento, 
									extiende por completo las pantorrillas al subir y luego baja.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		<!-- Card -->

		<!-- Card -->
		<div class="row">
			<div class="col-md-4">
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/lunges-laterales.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Lunges Laterales</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								En las zancadas laterales si debes alejar un pie de ti y apoyarte sobre él, 
								como una sentadilla lateral, ve variando ambas piernas.
							</p>
						</div>
					</div>
				</section>
			</div>
			<!-- Card -->

			<!-- Card -->
			<div class="col-md-4">
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/calf-raises-una-pierna.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Calf Raises Una Pierna</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								A diferencia del tercer ejercicio de la lista, este lo tienes que hacer con una pierna a la vez.
							</p>
						</div>
					</div>
				</section>
			</div>
			<!-- Card -->

			<!-- Card -->
			<div class="col-md-4">
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/lunges-dinamicos.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Lunges Dinámicos</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								A diferencia de los lunges del segundo ejercicio, en este si debes mover uno de los pies hacia delante y luego volver a la posición inicial, esto lo puedes hacer variando las piernas en cada repetición.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
		<!-- Card -->

		<!-- Card -->
		<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Intermedio</h2>
		<div class="row">
			<div class="col-md-4">
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/split-squats.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Split Squats</strong></h4>
							<h5>10 x 10</h5>
							<p class="card-text">
								Las split squats también son conocidas como sentadillas búlgaras. 
								Utiliza cualquier superficie alta –como una silla– para este ejercicio, intenta que tu rodilla no sobrepase demasiado la linea de tu pie de apoyo.
							</p>
						</div>
					</div>
				</section>
			</div>
			<!-- Card -->

			<!-- Card -->
			<div class="col-md-4">
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/flexion-pierna-atras.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Flexión de piernas hacia atrás</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Este es un ejercicio bastante complejo, mientras más hacia atrás te eches, más difícil te será volver arriba. Es un ejercicio brutal.
							</p>
						</div>
					</div>
				</section>
			</div>
			<!-- Card -->

			<!-- Card -->
			<div class="col-md-4">
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/sentadilla-hindu.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Sentadilla Hindú</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								A diferencia de las sentadillas normales, las sentadillas hindú debes hacerlas sin apoyar los talones del suelo en ningún momento, solo la punta de los pies. 
								Es más complicada porque debes mantener el equilibrio.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
		<!-- Card -->

		<!-- Card -->
		<div class="row">
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/step-ups.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Steps Up</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Este ejercicio es como subir una súper escalera. Mientras más alta sea la superficie para subir, más difícil y mayor implicación de los cuádriceps.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/sentadilla-flexion-adelante.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Sentadilla flexión adelante</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Comienza agachado apoyando solo la punta de los pies,
								cuando subas debes extender por completo las piernas -o lo más que puedas- e intentar apoyarte en toda la planta de los pies.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/patinador.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Patinador</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Tienes que utilizar calcetines y estar sobre un suelo liso o resbaladizo para que sea fácil ejecutar el movimiento. 
								Simplemente tienes que arrastrar el pie lejos de ti y traerlo de vuelta.
							</p>
						</div>
					</div>
				</section>
			</div>
    	</div>
    	<!-- Card -->

		<!-- Card -->
		<div class="row">
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/hip-thrust-piernas-cruzada.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Hip thrust con piernas cruzadas</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								A diferencia del empuje con cadera tradicional con ambas piernas apoyadas en el suelo, en esta variación debes cruzar una pierna encima de la otra para aumentar la dificultad del ejercicio.
								Si lo prefieres, también puedes ponerte un disco o lastre sobre el estómago.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/sissy-squats.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Sissy squats</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								En este ejercicio nunca pegues los talones del suelo. 
								Utiliza una pared de apoyo e intenta bajar lo más posible antes de subir.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/elevaciones-pierna-straddle.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Elevaciones de piernas en straddle</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Intenta solo elevar tus piernas en este ejercicio, dejando tu espalda recta y los brazos extendidos en todo momento.
							</p>
						</div>
					</div>
				</section>
			</div>
    	</div>
    	<!-- Card -->

		<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Avanzado</h2>
		<!-- Card -->
		<div class="row">
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/lunges-estrechos.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Lunges Estrechos</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Este ejercicio es como los lunges o zancadas tradicionales in situ, con la diferencia que debes juntar mucho más las piernas para tener un rango de movimiento más vertical.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/step-downs-lateral.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Step Downs Laterales</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								A diferencia de los Steps ups (ejercicio 10 de la lista), los Steps downs, como su nombre lo indica, se ejecutan lateralmente –no frontalmente– en un banco o plataforma, comenzando desde arriba y bajando lentamente con una pierna.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/elevaciones-pierna-sentado.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Elevaciones de piernas sentado</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Mantén la espalda recta y las piernas totalmente extendidas en todo momento Haz varias repeticiones con una pierna y luego la otra, también puedes alternar cada repetición.
							</p>
						</div>
					</div>
				</section>
			</div>
    	</div>
    	<!-- Card -->

		<!-- Card -->
		<div class="row">
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/hip-thrust-una-pierna.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Hip thrust con una pierna</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								El movimiento es el mismo que el Hip thrust con piernas cruzadas, pero al no tener una pierna apoyada sobre otra, sino libre, hará que el ejercicio sea mucho más complicado.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/pistol-squats.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Pistol squats</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Debes mantener la espalda recta, una de las piernas extendidas completamente y la planta del pie de apoyo totalmente pegada al suelo –sin levantar el talón-.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/shrimp-squats.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Shrimp squats</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Las shrimp squats podrían decirse que son lo contrario a las pistol squat, ya que, en vez de llevar la pierna completamente extendida hacia adelante, se lleva hacia atrás. También es de nivel muy avanzado.
							</p>
						</div>
					</div>
				</section>
			</div>
    	</div>
    	<!-- Card -->

		<!-- Card -->
		<div class="row">
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/step-ups-laterales.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Step ups laterales</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Para este movimiento debes encontrar una superficie u objeto medianamente alto (como un escalón), el corto recorrido hará que trabajes los glúteos.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/abduccion-cadera-asometrica.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Abducción de cadera isométrica</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Parece fácil, pero el simple hecho de mantener los glúteos en esta posición –en constante equilibro y tensión-, hará que se fortalezcan.
								Puedes utilizar cualquier objeto o pared para sostenerte e intentar aguantar el mayor tiempo posible.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/abduccion-cadera-circulos-pierna.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Abducción de cadera con círculos de pierna</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								En diferencia con el ejercicio anterior, ahora tienes que formar círculos imaginarios –cortos o amplios– con tu pierna. 
								Estos movimientos circulares sirven para aumentar el rango de músculos implicados.
							</p>
						</div>
					</div>
				</section>
			</div>
    	</div>
    	<!-- Card -->
		<!-- Card -->
		<div class="row">
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/puente.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Puente</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Versión fácil: Apoyando cabeza y pies en el suelo
								Dificultad aumentada: Subiendo los pies sobre un sofá o banca mientras la cabeza permanece en suelo
								Versión avanzada: Apoyando la espalda y pies sobre un sofá o banca y dejando el culo al aire para tener mayor rango de movimiento
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/hip-thrust.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Hip thrust</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								El movimiento del hip thrust es igual al del puente (ejercicio anterior) pero como te diste cuenta, 
								es apoyando la espalda sobre un sofá o banco y manteniendo los pies en el suelo. La idea es que toques el suelo con los glúteos y al subir extiendas completamente.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/patinador-sobre-hielo.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Patinador sobre de hielo</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								La dificultad de este ejercicio radica en mantener la pierna de apoyo ligeramente flexionada. Y con la pierna libre hacer movimientos circulares –como si estuvieses patinando sobre hielo-.
							</p>
						</div>
					</div>
				</section>
			</div>
    	</div>
    	<!-- Card -->
		<!-- Card -->
		<div class="row">
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/sliding-frontal.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Slidding frontal</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								El sliding frontal es muy similar a las pistol squats, con la diferencia que no debes llevar el culo hasta el suelo –sino hasta la línea de la rodilla– y deslizando el otro pie para apoyarte.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/patadas-mawashi-geri.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Patadas ‘Mawashi Geri’</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								En este ejercicio debes abrir la cadera lo más que puedas mientras das patadas al aire, flexionando y extendiendo únicamente la rodilla mientras el resto del cuerpo permanece inmóvil.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/patadas-atras.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Patada atrás</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Al dar patadas hacia atrás debes hacerlo con la pierna completamente estirada y el pie apuntando hacia abajo en todo momento (no hagas flexión plantar).
							</p>
						</div>
					</div>
				</section>
			</div>
    	</div>
    	<!-- Card -->
		<!-- Card -->
		<div class="row">
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/puente-con-una-pierna.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Puente con una pierna</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								A diferencia del puente común, en esta variación debes mantener una pierna colgando sobre ti, con un ángulo de 90° con respecto a tu abdomen y completamente extendida. Mientras apoyas la otra pierna y la extiendes y flexionas.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/peso-muerto-una-pierna.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Peso muerto con una pierna</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								Puedes realizar este ejercicio agarrando algún peso con la mano para aumentar la carga de trabajo. Con el peso muerto no solo entrenas glúteos, sino también cuádriceps.
								En este movimiento debes sentir como se extienden y contraen al máximo los músculos del trasero.
							</p>
						</div>
					</div>
				</section>
			</div>
			<div class="col-md-4"  >
				<section>
					<div class="card card-cascade">
						<div class="view overlay view-cascade">
							<a href="#!">
								<img  src="../assets/img/home/pierna/extension-cadera-flexion-cadera.jpg" class="img-fluid" alt="placeholder image with a man">
								<div class="mask rgba-white-slight waves-effect waves-light"></div>
							</a>
						</div>
						<div class="card-body text-center card-body-cascade">
							<h4 class="card-title"><strong>Extensión de cadera con flexión de piernas</strong></h4>
							<h5>10 X 10</h5>
							<p class="card-text">
								En esta variante de extensión de cadera, tienes que empujar la cadera hacia adelante cuando muevas la rodilla hacia atrás. 
								Intenta mantener la cadera tensionada durante todo el ejercicio.
							</p>
						</div>
					</div>
				</section>
			</div>
    	</div>
		</template>
    	<!-- Card -->
		<template v-if ="tipoEjercicio == grupoMuscular['Hombro'].toString()">
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Principiante</h2>
    <!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Shoulder-taps.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Shoulder Taps</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Simplemente colócate en posición como si quisieras hacer una flexión de brazos, seguidamente date golpecitos en los hombros alternando los brazos (mano derecha con hombro izquierdo y mano izquierda con hombro derecho).
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Rotaciones-externas-en-plancha.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Rotaciones externas en plancha</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Ponte en posición boca abajo apoyándote sobre uno de los brazos y con las rodillas –Ver imagen-. Desde esa posición, realiza una rotación de torso, concéntrate en lograr una rotación máxima del hombro.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Pike-pushups.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Pike Push Up</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Las flexiones en pica son ideales para construir unos hombros duros y fuertes, de hecho, es el ejercicio que abre camino hacia las HSPU (flexiones en pino). Por otra parte, pudiera decirse que es la contraparte del press militar de gimnasio, pero en este caso utilizamos nuestro propio peso como resistencia.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<!-- Card -->
			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Press-de-espalda-supino.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Press de espalda supino (Back press supinas) </strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Colócate en el suelo boca arriba, como si fueras a ser crucificado  Presiona con los dorsos de la mano y haz una ligera rotación interna con los brazos al subir.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Flexiones-agarre-ancho.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones con agarre ancho</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este ejercicio es más complicado que las flexiones estándar debido al poco rango de movimiento que tenemos. Es ideal para fortalecer el deltoides anterior de los hombros.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Plank-pushbacks.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Plank Push Backs</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Comienza el movimiento en posición de Planche Lean (hombros más adelantados que las manos y protracción escapular), seguidamente, utilizando los pies deslízate hacia atrás hasta tocar el piso con las piernas. Vuelve a la posición inicial y repite.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Intermedio</h2>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Vertical-en-pared.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Vertical en pared</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Aunque es más difícil ponerse de cara a la pared que de espalda, esta posición es perfecta para acostumbrarse a mantener una postura de pino correcta (sin arquear la espalda). Simplemente aguanta la posición el mayor tiempo posible (manteniendo los codos bloqueados) y verás como tus hombros comienzan a arder.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Wall-walks.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Wall Walks</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									La caminata o paseo en pared es excelente para desarrollar fuerza no solo en hombros, sino en trapecios, tríceps y muñecas.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Flexiones-a-escuadra-invertida.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones a escuadra invertida</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Ponte en posición de flexión con los pies en un banco, apuntando los dedos de las manos hacia adelante y los codos hacia adentro. Seguidamente procede a realizar la flexión, manteniendo el abdomen presionado en todo momento, regresa a la posición inicial y repite el movimiento.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Straddle-sit-pressups.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Straddle Sit Press Ups</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Si no tienes mucha flexibilidad en las piernas, quizás hacer flexiones en straddle sit sea una misión difícil para ti. No obstante, puedes utilizar unos agarres push ups o barras paralelas para facilitar el movimiento.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/HSPU-Flexiones-en-pared.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>HSPU asistidos en pared</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Separa las manos a la altura de los hombros, con los dedos apuntando hacia adelante, forma un triángulo (con ambas manos y tu cabeza) en la parte baja del movimiento.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Flexiones-Wax-off.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones ‘Wax off’</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Estas flexiones que imitan el movimiento de estar encerando el piso de tu casa, con la única diferencia que el movimiento del brazo en este ejercicio es en dirección contraria a las agujas del reloj, en el otro ejercicio es siguiendo la dirección de las agujas (para trabajar los pectorales).
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Avanzado</h2>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Wall-handstand-walk-lateral.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Lateral Handstand Wall Walk</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									También conocido como paseos laterales en pared parado de manos, este movimiento es excelente para fortalecer todo el tren superior del cuerpo y mejorar el equilibrio.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Handstand-pushups-en-pared.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>HSPU de espalda a la pared</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Es el mismo movimiento que el HSPU que viste más arriba en la lista, pero esta vez de espalda y no de frente a la pared. Podemos decir que este ejercicio tiene 2 niveles de dificultad, si te apoyas con las piernas dobladas a la pared, es más fácil que hacerlo con las piernas completamente extendidas.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Handstand-shoulder-taps-en-pared.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Handstand Shoulder Taps en pared</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Colócate de cara a la pared, seguidamente date golpecitos en el hombro con una mano mientras te sostienes con la otra.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Back-bend-handstand-pushups.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Backbend HSPU</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Con todo lo dicho, es imposible pensar que los hombros no recibirán un gran estímulo, sobre todo en su parte Posterior. Del mismo modo, es bueno para fortalecer el core y el resto de músculos de la parte superior del cuerpo.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Handstand-pushups.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>HSPU libres </strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Y aquí estamos, ante el ejercicio de peso corporal más efectivo para fortalecer y desarrollar los hombros, y por supuesto, uno de los más complicados de dominar. No sólo por el hecho de que se necesita tener mucha fuerza en brazos y hombros, sino que además, debes dominar el handstand o parada de manos.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/hombros/Elevaciones-laterales.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Elevaciones Laterales</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									no solamente están involucrados los brazos y hombros (deltoides lateral o medio), sino el resto del cuerpo (que actúa como estabilizador).
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</template>

		<template v-if ="tipoEjercicio == grupoMuscular['Pecho'].toString()">
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Principiante</h2>
    <!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-inclinadas-con-rodillas.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones inclinadas con rodillas</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este es el ejercicio más fácil de toda la lista, ideal para aquellos que no han hecho nunca una flexión o sufran de sobrepeso. Igualmente sirve como calentamiento previo a otros ejercicios.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-con-rodillas.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones con rodillas</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Una versión más difícil al anterior ejercicio. Igualmente sirve para calentar o como progresión para conseguir flexiones completas.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									También conocida como flexiones de pecho, flexiones de brazos o flexiones de codo. Es la versión definitiva de las flexiones para trabajar los músculos del pecho.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<!-- Card -->
			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-declinadas.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones declinadas</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Mientras más alto este el soporte de los pies más difícil es el movimiento y más intervienen los músculos deltoides (pecho). En cualquier caso es excelente para trabajar pecho y pecho.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-inclinadas-sobre-barras.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones inclinadas sobre barra</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Esta variación también la puedes realizar también sobre una silla, mesa, sofá o cualquier superficie alta. A diferencia de las anteriores flexiones inclinadas, estas son sin apoyo en rodillas.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-Atlas.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong> Flexiones “Atlas” o “Atlante”</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Las flexiones atlas permiten ampliar el rango de recorrido bajando más de la horizontal. En consecuencia se estimulan más fibras del pecho.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Lizards-Push-Ups.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Lizards Push Ups (Flexiones Lagartija)</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Las Lizard Push Ups simulan el movimiento que realizan las lagartijas. Este ejercicio es excelente para calentar el cuerpo antes de cualquier entrenamiento.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-rebotando.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones rebotando</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Es un tipo de flexión explosiva que te sirve para desarrollar fuerza explosiva necesaria para poder realizar ejercicios más complejos.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-Hindú.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Divebomber Push Ups (Flexiones Hindú)</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Esa variación de flexión es bastante complicada, no tanto por requerir fuerza, sino porque requiere cierto grado de concentración y coordinación corporal.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Intermedio</h2>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-Wax-On.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones Wax On</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Las Flexiones Wax On simulan el movimiento circular que se realiza cuando limpias el piso. Puede que si nunca le hayas pasado cera al piso de tu casa este ejercicio te resulte un poco complicado.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Kneeling-One-Arm-Flyes.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong> Kneeling One Arm Flyes (Apertura de rodillas con un brazo)</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este ejercicio es la versión fácil de las aberturas. Ayúdate colocando las rodillas en el piso.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Fondos-para-Pecho.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Fondos para Pecho</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Para activar mejor el músculo pectoral, inclina el tronco hacia adelante al bajar.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Fondos-en-Barra.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Fondos en Barra</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Los fondos en barra suelen hacerse como una de las principales progresiones para sacar el Muscle Up.También conocido como paseos laterales en pared parado de manos, este movimiento es excelente para fortalecer todo el tren superior del cuerpo y mejorar el equilibrio.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-con-aplauso.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones con aplauso</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Una de las variaciones más comunes de flexiones explosivas es la flexión con un aplauso, aunque se puede progresar hasta poder lograr 2, 3 o más aplausos, incluso por detrás de la espalda.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-inclinadas-con-un-brazo.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones inclinadas con un brazo</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este ejercicio sirve como progresión para sacar las flexiones con un brazo. A medida que ganes fuerza puedes hacerlas cada vez más con un soporte más bajo.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Aperturas-con-un-brazo.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Aperturas con un brazo</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Asegúrate que el piso sea un poco resbaladizo, mientras más lo sea, mayor control tendrás sobre las repeticiones.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Archer-Push-Ups.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Archer Push Ups (Flexiones Arquero)</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									A diferencia del ejercicio anterior, en este es tu tronco que se mueve y no los brazos.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Sliding-Plank.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Sliding Plank (Plancha deslizante)</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este ejercicio es similar a la plancha abdominal pero aquí deslizas tus pies. Además de trabajar los pectorales este ejercicio también afecta el dorsal ancho y los deltoides.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Avanzado</h2>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Stalder-Forward-Lean.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Stalder Forward Lean</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Siéntate en el piso con posición de straddle, progresivamente ve subiendo e inclínate hacia adelante sin despegar los pies del suelo. Como resultado de este ejercicio trabajarás los pectorales y pecho.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-Superman.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones Superman</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Una de las flexiones pliométricas más efectivas y difíciles que existe. Excelente para ganar potencia y fuerza en el tren superior (pecho y brazos).
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Stalder-Hold.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Stalder Hold</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Para realizar este ejercicio en suelo debes tener flexibilidad en las piernas. Las versiones más fáciles son en agarres push ups o barras paralelas. Mantén esta posición en isométrico el mayor tiempo posible.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Flexiones-con-un-brazo.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones con un brazo</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									La flexión con un brazo es quizás la progresión más difícil de todas las flexiones de la lista.
									Mucha gente cree que tiene la fuerza suficiente para realizarlas y se lanza a ello sin saber que pueden ser muy lesivas si no se realizan correctamente.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Aperturas.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Aperturas</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este ejercicio es similar a las aperturas para pecho con mancuernas. Utiliza una toalla para poder deslizar las manos fácilmente en el suelo. Una progresión más complicada es hacerlas con apoyo en pies y no en rodillas.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/pecho/Stalder-Forward-Lean.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones en Stalder</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este ejercicio es ligeramente parecido al Stalder Hold que te mencioné más arriba. La única diferencia es que harás repeticiones y no isométricos.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</template>

		<template v-if ="tipoEjercicio == grupoMuscular['Abdomen'].toString()">
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Principiante</h2>
    <!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Plancha.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Plancha</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									La plancha abdominal es uno de los mejores ejercicios para fortalecer los músculos abdominales.
									Apóyate sobre los codos y punta de los pies. Mantén el culo y abdomen apretado en todo momento y hazlo de 30 segundos en adelante.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Torsiones-sentado.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Torsiones sentado</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Las torsiones sentado puedes hacerla agarrando un objeto pesado para sobrecargar más los músculos oblicuos. Si apoyas los pies en el suelo es más sencillo que si los mantienes colgando.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Plancha-dinámica.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Plancha dinámica</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									La plancha dinámica tiene una pequeña variante respecto a la plancha regular. Solo debes bajar y subir las rodillas mientras mantienes el abdomen apretado y el resto del cuerpo inmóvil.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<!-- Card -->
			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Plancha-extendida.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Plancha extendida</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Es importante que mantengas el culo apretado hacia adentro, de manera que no se te arquee la espalda. Intenta aguantar mínimo 15 segundos en esta posición con los brazos lo más alejados posible de ti.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Russian-twists.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Russian twists</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Las russian twists también puedes hacerlas sosteniendo un objeto pesado. A diferencia de las torsiones sentado, este ejercicio lo haces con los brazos completamente extendidos.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Hollow-body-hold.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Hollow body hold</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									En este ejercicio debes mantener toda la espalda y trasero pegado al suelo, evita el arqueo. Mantén los brazos detrás de ti y las piernas totalmente extendidas colgando durante todo el ejercicio.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Intermedio</h2>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Roll-downs.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Roll downs</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Los roll downs son como un súper crunch. Es un movimiento complicado de realizar porque debes utilizar solamente la fuerza de tu abdomen para subir y bajar, no puedes utilizar los brazos o piernas para impulsarte.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Sliding-crunches.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Sliding crunches</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Asegúrate de utilizar una toalla, alfombra o cualquier objeto resbaladizo para que el ejercicio sea fluido.
									Intenta no pegar pequeños saltos o impulsarte demasiado, concentra toda la fuerza en el abdomen para contraerte y extenderte.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Plancha-lateral-dinámica.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Plancha lateral dinámica </strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Debes mover únicamente tu cadera para subir y bajar. En esta variante de la plancha trabajarás los oblicuos.
									Puedes dejar tu brazo colgando en el aire y utilizarlo de palanca, o dejar la mano apoyada sobre la cadera.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Pole-climbers.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Pole climbers</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									El pole climbers puedes hacerlo apoyándote sobre un palo de escoba, marco de puerta, respaldar de silla o cualquier objeto que tengas a la mano.
									Recuerda que estás trabajando el abdomen, por ello trata de utilizarlo más que los brazos en este ejercicio, también mantenlo bajo tensión en todo momento.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Hollow-rock.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong> Hollow rock </strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									El hollow rock es muy similar al hollow body hold en cuanto a la posición inicial, con la pequeña variante que debes balancearte de atrás hacia adelante (manteniendo siempre la forma en C).
									Recuerda no arquear la espalda, mantén la espalda y trasero contraídos en todo momento.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/V-crunches.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>V-crunches</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									El v-crunch es un ejercicio bastante complicado porque debes tener fuerza y coordinación. La idea es que contraigas los brazos y piernas al mismo tiempo para que se encuentren en la parte final del movimiento, no te preocupes si te cuesta mucho, te acostumbrarás después de un tiempo.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Avanzado</h2>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Kickers.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Kickers</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este ejercicio kickers o “pateadores” es la típica patada de videojuego de lucha. Es muy interesante y divertido de hacer, pero debes practicarlo para acostumbrarte al movimiento.
									Básicamente, debes intentar tocar el suelo con el lateral de cada nalga.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Elevaciones-de-pierna-sentado.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Elevaciones de pierna sentado</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Debes utilizar únicamente la fuerza de tu abdomen para subir en este ejercicio, los brazos están principalmente como soportes.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/L-Twists.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>L-Twists</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									La única diferencia entre L-Twist vs Russian Twist es la extinción de las piernas. Mantén las rodillas lo más extendidas posibles y utiliza únicamente el culo para apoyarte del suelo.
									Cuando ya domines el movimiento, puedes utilizar una pesa rusa, disco de mancuerna o garrafa de agua para aumentar la dificultad del ejercicio.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Plancha-a-tabla.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong> Plancha a tabla</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Comienzas en la posición de plancha y terminas en la posición de tabla, o lo que es lo mismo, la posición inicial de una flexión de brazos.
									En este ejercicio debes utilizar la fuerza de tus brazos y hombros para subir y bajar, manteniendo el abdomen contraído en todo momento.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/abdomen/Plancha-en-pared.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Plancha en pared</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Para hacer wall plank necesitas tener bastante fuerza no solo en el abdomen, sino también en los hombros -ya que son los músculos que soportarán la mayor carga-.
									Lógicamente debes utilizar una pared poco resbaladiza o colocarte calcetines que no te hagan perder la posición.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->
			</div>
		</template>

		<template v-if ="tipoEjercicio == grupoMuscular['Brazo'].toString()">
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Principiante</h2>
    <!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Curl-de-Bíceps-con-un-brazo.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Curl de Bíceps con 1 brazo</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									El primer ejercicio de la lista, es una simulación del Curl de bíceps que se realiza en el gym pero con un ligero cambio, ahora usarás una cuerda atada a cualquier superficie y tu propio cuerpo como peso.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Curls-sentado.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Curls sentado</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Siéntate en el suelo como muestra la imagen, y utilizando una cuerda, crea resistencia empujando con las piernas, bien sea en la fase de flexión o de extensión.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Curl-de-bíceps-con-ambos-brazos.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Curl de Bíceps con ambos brazos</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Mismo principio que el primer ejercicio de Curl, pero ahora utiliza ambos brazos a la vez.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<!-- Card -->
			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Remo-de-Bíceps.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Remo de Bíceps</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Siéntate en el suelo utilizando la pared como apoyo para los pies. Para activar los bíceps, lleva las manos hacia tu pecho.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Chin-ups-Horizontales.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Chin Ups horizontales</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									También conocido como Dominadas Australianas, utiliza un agarre supino para activar los músculos de los bíceps.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Chin-Ups.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Chin Ups</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Las Chin Ups, también conocidas como Dominadas Supinas (palmas hacia dentro). Realiza un rango completo de movimiento.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Intermedio</h2>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Dominadas-Commando.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Dominadas Commando</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Estas dominadas se realizan con subidas asimétricas, intenta tocar la barra con el hombro en cada subida. Igualmente, realiza un rango completo de movimiento al subir y bajar.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Chin-Ups-Horizontales-con-un-Brazo.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Chin Ups horizontales con 1 brazo</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Igual a las Chin Ups horizontales, pero ahora utiliza sólo un brazo y con agarre supino.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Remo-de-Bíceps-con-un-brazo.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Remo de Bíceps con 1 brazo</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Mismo principio que el remo de bíceps con ambos brazos, lleva la mano hasta tu pecho para activar el bíceps.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Headbangers-agarre-supino.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Headbangers</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este ejercicio es nivel avanzado, hay que tener mucha fuerza en los brazos y dorsales.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Plancha-Isométrica-con-dedos.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Plancha Isométrica con dedos</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Cualquier ejercicio que implique hacer fuerza con los dedos de las manos, es excelente para fortalecer los músculos de los antebrazos. En este ejercicio, simplemente intenta aguantar el mayor tiempo posible en la posición.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Plank-Pushups.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Plank Pushups</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									En este ejercicio se trabajan no sólo los antebrazos sino también bíceps y tríceps.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Avanzado</h2>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Flexiones-con-dedos.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Flexiones de dedos</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Igual a la flexiones de pecho estándar, pero sólo utilizando los dedos (y no las palmas) de las manos como soporte.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Headbangers-agarre-prono.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Headbangers (agarre pronado)</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									El tipo de agarre que se utiliza (prono, neutro o supino) condiciona completamente la forma en que actúa el ejercicio sobre el músculo. En este caso, el agarre pronado afecta directamente la región posterior o dorsal del antebrazo.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Planche-Leans.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Planche Leans</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Por último, este movimiento es excelente para fortalecer los hombros, antebrazos y muñecas. De hecho, es una de las primeras progresiones a entrenar para dominar la Full Planche.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Diamond-push-ups.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Diamond Push Ups</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									un estudio publicado en el Journal of Strength and Conditioning Research en 2005, sugiere que las flexiones con una posición estrecha -flexiones diamante-, activaban mejor el tríceps braquial y el pectoral mayor que utilizando una posición amplia.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/brazo/Extensión-de-tríceps-con-cuerda-opción-fácil.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Extensión de tríceps con cuerda</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Codos doblados con un ángulo aprox. de 90º, rodillas apoyadas en suelo y espalda completamente recta.
									Sin doblar la espalda, utiliza los tríceps para empujarte hacia arriba, extiende por completo los brazos con los codos viendo hacia afuera.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->
			</div>
		</template>

		<template v-if ="tipoEjercicio == grupoMuscular['Espalda'].toString()">
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Principiante</h2>
    <!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/vuelta-al-mundo.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Vuelta al mundo</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Colócate boca abajo en el piso y mueve los brazos en forma circular (parecido al nado estilo mariposa).
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/prensas-laterales.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong> Prensas laterales</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Esta es la versión fácil del ejercicio. Enfócate en sacar lo más posible el pecho al llegar arriba (retrayendo las escapulas).
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/aperturas-invertidas.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Aperturas invertidas</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Intenta juntar las escapulas lo más que puedas. Igualmente puedes añadirle dificultad cargando algo de peso con tus manos.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<!-- Card -->
			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/dominada-australiana.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Dominadas horizontales</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									También conocida como Australian Pull Ups. La opción fácil consiste en usar un agarre en pronación, flexionar las rodillas y apoyándose sobre la planta de los pies.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/dominada-australiana-avanzada.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Dominadas horizontales(avanzadas)</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Esta versión es más difícil a la anterior, estira las piernas y apóyate sobre los talones. Mientras más alejados coloques los pies de la barra (tu cuerpo más horizontal) más dificultad.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/dominada-agarre-ancho.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Dominadas horizontales con agarre ancho</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Al igual que las dominadas anteriores pero con agarre más abierto. Puedes jugar con distintos agarres de barra; abiertos, cerrados, pronos o supinos.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Intermedio</h2>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/remo.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Remo (fácil)</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Muy parecido a las dominadas australianas fáciles. Utiliza una cuerda, cinta o toalla y átala a la barra, flexiona las rodillas y apóyate sobre la planta de los pies. Mantén las escapulas retraídas en todo momento.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/press-de-espalda.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Press de espalda</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Esta es la versión difícil de las prensas laterales. Ahora no te apoyarás sobre los codos sino sobre las palmas de las manos con un agarre abierto.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/press-de-espalda-con-rotación-de-brazos.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Press de espalda con rotación de brazos</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Igual que el ejercicio anterior pero con una variante: comienza apoyando el reverso de tus manos y a medida que subes ve rotando los brazos hasta quedar apoyado sobre las palmas.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/dominada-escapular.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Dominadas escapulares</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Mantén los brazos siempre estirados. Toda la fuerza se realiza con las escapulas, en ningún momento utilices los brazos o piernas para impulsarte.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/sliding-plank.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Sliding plank (Plancha deslizante)</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este ejercicio además de los dorsales también trabaja los pectorales y los deltoides.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/ice-cream-maker.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Ice cream maker</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Comienza con la barbilla sobre la barra y cambia a posición de Front Lever, luego regresa a la posición inicial y repite.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<h2 style="font-size: larger;margin:50px 0px 0px 150px;text-align:left;">DIFICULTAD: Avanzado</h2>
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/extensión-de-espalda-extendida.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Extensión de espalda extendida</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Igual que el ejercicio de extensión de espalda, con la diferencia que los brazos van extendidos completamente hacia adelante y no hacia atrás. Utiliza sólo la zona lumbar (no los brazos) para subir.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/plancha-invertida.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Plancha invertida</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Mantén esta posición por el mayor tiempo posible (isométrico). Puedes realizarlo sobre cualquier superficie, siempre y cuando te queden las piernas colgando en su totalidad.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/vela-dinámica.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Vela dinámica</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Este ejercicio es el más complicado de la lista. Comienza sentado en el suelo tocando los pies con tus manos, luego procede a rodar sobre tu espalda mientras elevas las piernas, tal como se muestra en la imagen
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			<!-- Card -->
			<div class="row">
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/tabla-dinámica.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Tabla dinámica</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									Comienza nuevamente en posición inicial de flexión de brazos, pero al contrario del ejercicio Down Dog Plank, en este bajarás las rodillas hasta que toquen el suelo, sube y repite nuevamente.
								</p>
							</div>
						</div>
					</section>
				</div>
			
				<!-- Card -->

				<!-- Card -->
				<div class="col-md-4">
					<section>
						<div class="card card-cascade">
							<div class="view overlay view-cascade">
								<a href="#!">
									<img  src="../assets/img/home/espalda/dominada-escapular-horizontal.jpg" class="img-fluid" alt="placeholder image with a man">
									<div class="mask rgba-white-slight waves-effect waves-light"></div>
								</a>
							</div>
							<div class="card-body text-center card-body-cascade">
								<h4 class="card-title"><strong>Dominada escapular horizontal</strong></h4>
								<h5>10 X 10</h5>
								<p class="card-text">
									A diferencia del fabricador de helados, digo, el ice cream maker, comenzarás con los brazos totalmente extendidos y se mantendrán así durante todo el movimiento. Utiliza los dorsales para elevar el cuerpo hasta una posición horizontal.
								</p>
							</div>
						</div>
					</section>
				</div>
				<!-- Card -->
			</div>
		</template>
	</div>
</template>


<script>
import router from '../router/index'
var tipoEjercicio
var grupoMuscular;
//https://decalistenia.biz/19-ejercicios-espalda-casa/
export default {
  name: 'HomeExercises',
  beforeCreate() {
	debugger;
	tipoEjercicio = this.$router.currentRoute.params.grupo;
    grupoMuscular = Object.freeze({ "Pierna": 1, "Hombro": 2, "Pecho": 3, "Abdomen": 4, "Brazo": 5, "Espalda": 6 });
  },
  data: () => {
	  return {
		  tipoEjercicio,
		  grupoMuscular,
	  }
  },
}
</script>

<style lang="scss" scoped>
.container-gruop {
  display: block;
  width: 100%;
  background-image: url("../assets/img/1.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 150px;
  text-align: center;
  .row {
    margin: 0;
    padding: 50px 10% 0px 10%;
  }

  button {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 10px;
    width: 50%;
    padding: 5px;
    text-transform: uppercase;
    letter-spacing: 4px;
  }
  .botonF1 {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: #f44336;
    right: 0;
    top: 200px;
    position: absolute;
    // margin-right: 16px;
    // margin-bottom: 30%;
    border: none;
    outline: none;
    color: #fff;
    font-size: 36px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: 0.3s;
  }
  .botonF1:active {
    transform: scale(1.1);
  }
  @media (max-width: 570px) {
    .card {
      margin-top: 20px;
    }
    .container-gruop {
      background-color: url("../assets/img/1.jpg");
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
      height: 100%;
      width: 100%;
      text-align: center;
    }
  }
}
</style>