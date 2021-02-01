<template>
  <div class="hello">
    <div class="contenedor-modal">
      <a href="#modal" class="btn" >Abrir ventana</a>

      <aside id="modal" class="modal">
        <div class="content-modal">
          <div class="wrapper logeo">

    <div class="logo"><img src="../assets/tosko/Logo Tosko.png" alt="Tosko"></div>
    <div class="close"><a href=""><i class="fa fa-times-circle fa-2x"></i></a></div>

		<div class="contain content">

      <div class="cabecero">
        <h2>{{ msg1 }}</h2>
        <p>Es rápido y fácil.</p>
      </div>

			<form class="form">
				<fieldset>

					<div class="col">
						<label>NOMBRE <span class="tooltip">?</span></label>
						<input type="text">

						<label>USUARIO <span class="tooltip">?</span></label>
						<input type="text">

						<label>EMAIL <span class="tooltip">?</span></label>
						<input type="email">
					</div>

					<div class="col">
            <label>APELLIDO <span class="tooltip">?</span></label>
						<input type="text">

            <label>FECHA DE NACIMIENTO <span class="tooltip">?</span></label>
						<div class="fecha_nacimiento">
							<input type="text" class="small">
							<input type="text" class="small">
							<input type="text" class="small">
						</div>

            <label>CONTRASEÑA <span class="tooltip">?</span></label>
						<input type="password">

					</div>

				</fieldset>
        <p>Al hacer clic en "Registrarte", aceptas nuestras <span class="resaltado">Condiciones</span>, la <span class="resaltado">Política de datos</span> y la <span class="resaltado">Política de cookies</span>. Es posible que te enviemos notificaciones por SMS, que puedes desactivar cuando quieras.</p>
				<input type="submit" value="Siguiente">

			</form>
		</div>
	</div>

          <!---------------------------------------------->
        </div>
        <a href="#" class="btn-close-modal"></a>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bienvenido a reservas tosko'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Boton */
/* #show-modal { text-align: center; background: #bc651a; padding: 15px 15px; color:#ffffff; font-weight: 500; font-size: 1.5em; border-radius: 3.5px; text-decoration: none; transition: all 0.15s linear;}
#show-modal:hover { cursor: pointer; background: #bc9d1a;} */

/* ventana interna */
.modal { position: fixed; top: -100vh; left: 0; z-index: 99999999; background: rgba(0, 0, 0, 0, 0.75); width: 100vw; height: 100vh; opacity: 0; transition: opacity 0.35s ease;}
.modal .content-modal { width: 100%; max-width: 500px; position: fixed; left: 50%; top: -100vh; transition: top 0.35s ease; margin-left: -250px; background: #ffffff; box-shadow: 0 1px 2px rgba(0,0,0,0.1); border-radius: 2px; z-index: 9999999;}
.modal h2 { padding: 0.5; text-align: center; color: #444444; margin:0;}
.modal article { height: 20em; background: #bc651a;}
.close-modal { color: #e74c3c; position: absolute; top: 0.2em; right: 0.375em; margin: 0; padding: 5px; font-size: 1.5em; text-decoration: none;}
.modal a:hover { color: #c0392b}
/*fondo negro*/
.modal:target { background: #ffffff; opacity: 1; top: 0;}
.modal .btn-close-modal { position: absolute; left: 0; width: 100%; height: 100%; z-index: 99999991;}
/* aparce la ventana */
.modal:target .content-modal { top: 50px; transition: top p.35s ease;}


@media (max-width: 600px) {
    .navbar { display: none;}
    .cajaLineas { display: flex; color: #ffffff; margin-left: auto; margin-right: 15px;}
    .btn { display: none;}
    .footer { padding: 10px 0;}
    .footer p { display: none;}
}
@media (max-width: 500px) {
  .modal .content-modal { width: 90%; max-width: none; left: 5%; margin-left: 0;}
}
.wrapper { display: flex; flex-flow:column; align-items:center; justify-content:center; width: 100%; min-height: 100%; background: rgba(255, 255, 255, 0.75);}
.logeo { justify-content:flex-start;}

.logo { width: 9em; height: 9em; background: #f1f1f1; border-radius: 50%;}
.logo img { width: 8em; padding: 45px 0;}

.close { display:flex; position: absolute; float: right; right: 20px; top: 100px}
.close .fa {color:#FF4AA1  ;}

.content { display: flex; flex-flow:column; width: 430px; padding-bottom: 100px; align-items:center; text-align: center; background-color: #ffffff;}
.cabecero { display: block; margin-left: 20px; margin-right: auto; padding-bottom: 30px; color: rgb(70,70,70);}
.cabecero h2 { font: 50px 'Oswald'; font-weight: 600;}
.cabecero p { float: left}

.form { width: 96%; margin:0 auto; padding-bottom: 30px; text-align: center;}
.col { display: inline-block; width: 49%; margin-bottom: 10px; padding: 0 5px; vertical-align: top; text-align: left;}

.form label { display: block; margin-bottom: 5px; color: rgb(70,70,70); font-size: 16px; text-transform: uppercase;}
  .form .tooltip { display: inline-block; background: rgb(70,70,70); color: #ffffff; border-radius: 50%; height: 16px; width: 16px; text-align: center; line-height: 18px; vertical-align: middle; margin-bottom: 3px;}

  .form input[type="text"], .form input[type="email"], .form input[type="password"], form select { display: block; width: 100%; background: #f1f1f1; border: 0; padding: 5px; height: 35px; margin-bottom: 15px;}
  .form input[type="text"].small { display: inline-block; width: 29.6%; margin-right: 5px;}
  .form .fecha_nacimiento .small:last-child { margin-right: 0;}

  .form p { display: inline-block;font-size: 14px; width: 90%; color: rgb(70,70,70); margin-bottom: 30px;}
  .form .resaltado { color:#6CF0E9;}


  .form input[type="submit"] { background: #6CF0E9; color: #fff; text-align: center; border:0; padding: 10px 20px; font-size: 18px; border-radius: 5px;}

@media (max-width: 370px){
  .content { width: 350px}
  .form label { font-size: 13px;}
  .form input[type="text"].small { width: 28.5%;}
}

@media (max-width: 480px){
  .logo { display: none;}
  .logo img { display: none;}
}
</style>
