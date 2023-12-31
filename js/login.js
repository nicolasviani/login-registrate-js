////////////////// login header//////

const contenedorGeneral = document.getElementById("contenedorGeneral");
console.log(contenedorGeneral);

const header = document.createElement("header");
header.classList.add("header-container");
header.innerHTML = `
                    <a href="https://wwwmambadesingcom.netlify.app/index.html" class="logo-container">
                                <img src="assets/logos/logoMB.png" alt="logo de la compania">
                            </a>
                            <div class="nav-bottom-container">
                                <nav class="navbar-bottom-container">
                                    <ul>
                                        <li><a href="index.html">Inicio</a></li>
                                        <li><a href="pages/hombres.html">Hombres</a></li>
                                        <li><a href="pages/mujeres.html">Mujeres</a></li>
                                        <li><a href="pages/zapatillas.html">Zapatillas</a></li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="nav-auxiliary-container">
                                <nav class="navbar-top-container">
                                    <ul>
                                        <li><a href="pages/unite.html">Login</a></li>
                                        <li><a href="pages/compras.html">Compras</a></li>
                                        <li><a href="pages/contactos.html">Contactos</a></li>
                                    </ul>
                                </nav>
                                <div class="auxiliary-menu"> 
                                    <input placeholder="buscar" type="text" id="clic" class="input-container">
                                    <label type="submit" for="clic"><img src="../assets/logos/lupa-input.png.png" alt="lupa del buscador"></label>
                                <div class="icon-container">
        
                                </div>
                                </div>
                            </div>
                    `
contenedorGeneral.appendChild(header);

//////////// login main///////////

const main = document.createElement("main");
main.classList.add("main-container");
main.innerHTML = `
                <form id="form" class="form">
                    <h2 class="form-titulo">Inicia sesion</h2>
                    <p class="form-subtitulo">¿Aun no tenes una cuenta?</p>
                    <div class="form-container">
                        <div class="form-grupo">
                            <input type="text" name="nombre" class="form-input" placeholder="">
                            <label for="name" class="form-label">Nombre</label>
                            <span class="form-linea"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="email" name="email" class="form-input" placeholder="">
                            <label for="user" class="form-label">E-mail</label>
                            <span class="form-line"></span>
                        </div>
                        <div class="form-grupo">
                            <input type="text"  name="contraseña" class="form-input" placeholder="">
                            <label for="password" class="form-label">Contraseña</label>
                            <span class="form-line"></span>

                        <div class="form-container">
                            <button id="enviar" class="boton"> Iniciar sesion </button>
                        </div>
                    </div>
                </form>
                `

contenedorGeneral.appendChild(main);

const baseDeDatos = [
    {
        nombre: "nicolas",
        email: "viani.nicolas.87@gmail.com",
        contraseña: "1234",
    },
    {
        nombre: "daniel",
        email: "daniel.villajuan@gmail.com",
        contraseña: "profesorcoder",
    },
    {
        nombre: "julieta",
        email: "julieta.viani.pacheco@gmail.com",
        contraseña: "soyjuly",
    },
    
];

const user = {
    nombre: "",
    email: "",
    contraseña: "",
};

const usuariosRegistrados = JSON.parse(localStorage.getItem("nombre"));

const form = document.querySelector("#form");
const inputs = document.querySelectorAll("input");
const botonIniciarSesion = document.querySelector("#enviar");

const bienvenida = nombre =>{
    form.innerHTML = `<h3 class="form-titulo"> Bienvenido ${nombre} a Mamba Desing... </h3> `
};

const bienvenidaUndefined = () => {
    form.innerHTML = `<h3 class="form-titulo"> No estas registrado... </h3>
                        <div id="registrate" class="registrate">
                            <button><a href="./registrate.html">Registrate</a></button>
                        </div>                              
                        `
};

botonIniciarSesion.addEventListener("click",() =>{
    const usuarios = baseDeDatos.find((personas) => user.nombre === personas.nombre && user.email === personas.email && user.contraseña === personas.contraseña);
    if(usuarios != undefined){
        bienvenida(usuarios.nombre);
        localStorage.setItem("usuario",JSON.stringify(usuarios));
    }else{
        bienvenidaUndefined();
    }
});

inputs.forEach((elemento) =>{
    elemento.addEventListener("input", (event) =>{
        user[event.target.name] = event.target.value;
    });
});


/////////////// login footer///////////////

const footer = document.createElement("footer");
footer.classList.add("footer-container");
footer.innerHTML = `
                    <section class="nosotros-container">
                        <h2>Quienes somos</h2>
                        <h3>Mamba Design diseña ropa deportiva y urbana para personas de todo tipo. Creadores que disfrutan de cambiar las reglas del juego. Desafiar las convenciones. Romper las normas y definir nuevas. Y volverlas a romper. Confeccionamos la ropa que visten todas las personas que le gusta hacer deportes y vestirse bien. Para que no pierdan la concentración. Diseñamos indumentaria deportiva para que llegues a la meta. Nuestras tiendas deportivas ofrecen atuendos para mujeres, con tops deportivos y calzas diseñados con un objetivo en mente. Diseñamos, innovamos e iteramos. Ponemos a prueba nuevas tecnologías. En el La ropa deportiva retro inspira nuevos elementos esenciales de la ropa urbana. Como las camperas y los conjuntos Firebird. Los modelos deportivos clásicos vuelven a la vida. </h3>
                    </section>
                    <section class="redes-container">
                        <h2>redes sociales</h2>
                        <a href="#">whatsapp</a>
                        <a href="#">facebook</a>
                        <a href="#">instagram</a>
                        <a href="#">e-mail</a>
                    </section>
                    <section class="pago-container">
                        <h2>formas de pago</h2>
                        <a href="#">efectivo</a>
                        <a href="#">debito</a>
                        <a href="#">tarjetas de credito</a>
                        <a href="#">mercado pago</a>
                    </section>
                    `
contenedorGeneral.appendChild(footer);
