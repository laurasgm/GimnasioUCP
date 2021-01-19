<template>
  	<div class="container-gruop">
		<h1>Grupos en casa</h1>
		<template v-if="tipoEjercicio == grupoMuscular['Pierna'].toString()">
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
		<template v-else-if ="tipoEjercicio == grupoMuscular['Hombro'].toString()">
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