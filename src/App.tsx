import { useEffect, useState } from "react";
import FooterComponent from "./Components/Footer";
import { logoSanMarcos, VITE_PHONE } from "./core/constants";
import chocar from "./assets/image/chocar.webp";
import iglesia from "./assets/image/luiscordero.jpeg";
import leonan from "./assets/image/leonan.jpg";
import "./App.css";

const sections = [
  { id: "inicio", label: "Inicio" },
  { id: "categorias", label: "Categorias" },
  { id: "horarios", label: "Horarios" },
  //{ id: "auspiciantes", label: "Auspiciantes" },
  { id: "ruta", label: "Mapa" },
  { id: "contacto", label: "Contacto" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const Premios = () => {
    return (
      <>
        <span className="font-semibold">Premios: </span>
        <div className="premios flex flex-wrap place-content-center ">
          <div className="first m-2 text-center content-end">
            <span className="text-gray-50">50$</span>
            <div className="box p-4 rounded-2xl text-white bg-gray-700">
              2ro
            </div>
          </div>
          <div className="first m-2 text-center">
            <span className="text-gray-50">100$</span>
            <div className="box p-5 rounded-2xl text-white bg-gray-800">
              1ro
            </div>
          </div>
          <div className="first m-2 text-center content-end">
            <span className="text-gray-50">30$</span>
            <div className="box p-4 rounded-2xl text-white bg-gray-600">
              3ro
            </div>
          </div>
        </div>
      </>
    );
  };
  //
  return (
    <div className="font-sans">
      <header className="fixed top-0 w-full bg-black shadow-md z-50">
        <div className="flex justify-between items-center p-4 md:justify-center">
          <div className=" font-bold text-lg flex items-center">
            <img src={logoSanMarcos} alt="" className="h-14" />
            <span className="text-white text- base uppercase ml-1">
              Pedalenado 2025
            </span>
          </div>
          <button
            className="md:hidden text-white cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <nav
            className={`${
              menuOpen ? "flex" : "hidden"
            } absolute top-full left-0 w-full bg-black flex-col items-center p-4 
             md:static md:flex md:flex-row md:bg-transparent md:w-auto md:gap-8`}
          >
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMenuOpen(false)}
                className="text-white font-semibold  w-full hover:bg-gray-500 p-4 text-center"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className=" space-y-24">
        <section
          id="inicio"
          className="min-h-screen flex flex-col items-center justify-center "
        >
          <div className="content bg-[#00000085] text-center w-full justify-items-center">
            <h1 className="text-4xl font-bold mb-4 text-white shadow-2xl">
              PEDALEANDO 2025
            </h1>
            <p className="text-lg text-center max-w-xl text-white">
              Bienvenido al sitio oficial de San Marcos Pedaleando 2025. Aquí
              encontrarás horarios, mapa de ruta, auspiciantes y más.
            </p>
          </div>
        </section>
        <section
          id="informacion"
          className="min-h-screen px-8 py-20 bg-white text-gray-800"
        >
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-6 text-center text-black">
              PEDALEANDO 2025
            </h2>
            <p className="text-center text-lg mb-10">
              Por las festividades en honor a San Marcos de la Parroquia Luis
              Cordero, ¡únete a esta competencia! Una ruta saludable, un evento
              diseñado para fomentar el deporte y un estilo de vida activo a
              través del ciclismo.
            </p>

            <div className="flex justify-center mb-12">
              <img
                src={logoSanMarcos}
                alt="Logo San Marcos"
                className="h-[14rem]"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center text-gray-700">
              🗺️ Lugares que recorrerás
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
              {[
                {
                  nombre: "Laguna de Chocar",
                  descripcion:
                    "Un punto panorámico espectacular donde podrás apreciar la naturaleza mientras pedaleas.",
                  imagen: chocar,
                },
                {
                  nombre: "Iglesia San Marcos",
                  descripcion:
                    "Un sitio emblemático de la parroquia, lleno de historia y tradición.",
                  imagen: iglesia,
                },
                {
                  nombre: "Via Leonan",
                  descripcion:
                    "Desde el descenso a la meta podrás observar un punto panorámico espectacular donde podrás observar todo el valle de Azogues mientras pedaleas.",
                  imagen: leonan,
                },
              ].map((lugar, i) => (
                <div
                  key={i}
                  className="bg-gray-100 border border-gray-300 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200"
                >
                  <img
                    src={lugar.imagen}
                    alt={lugar.nombre}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-gray-800 mb-2">
                      {lugar.nombre}
                    </h4>
                    <p className="text-gray-600 text-sm">{lugar.descripcion}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="categorias"
          className="min-h-screen px-8 py-20 bg-black text-white"
        >
          <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide">
            Categorías de Competencia
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { title: "🏁 Élite Femenino", desc: "Élite hasta 35 años." },
              {
                title: "🏁 Master Femenino",
                desc: "Master 36 años en adelante.",
              },
              {
                title: "🏁 Juvenil Masculino",
                desc: "Juvenil - Hasta los 19 años.",
              },
              { title: "🏁 Élite Masculino", desc: "Élite 20 a 29 años." },
              {
                title: "🏁 Master A Masculino",
                desc: "Master A 30 a 40 años.",
              },
              {
                title: "🏁 Master B Masculino",
                desc: "Master B 41 años en adelante.",
              },
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-yellow-500/30 transition-shadow border border-gray-700 hover:scale-[1.02] transform duration-200"
              >
                <h3 className="text-2xl font-bold mb-3 text-yellow-400">
                  {cat.title}
                </h3>
                <p className="text-gray-300 mb-4">{cat.desc}</p>
                <Premios />
              </div>
            ))}
          </div>
        </section>
        <section id="horarios" className="px-8 py-20 ">
          <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide">
            Información
          </h2>
          <div className=" grid grid-cols-1 bg-white text-white sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-center border border-gray-700 hover:shadow-yellow-400/20 transition-shadow">
              <h2 className="text-2xl font-bold mb-4 text-yellow-400">
                ⏰ Horarios
              </h2>
              <ul className="list-disc list-inside text-gray-300">
                <li>Etapas - 07:30 AM | Hora de salida</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-center border border-gray-700 hover:shadow-yellow-400/20 transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                📍 Lugar
              </h3>
              <p className="text-gray-300">
                Cañar - Azogues - Parroquia Luis Cordero
              </p>
            </div>

            <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-center border border-gray-700 hover:shadow-yellow-400/20 transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                📝 Inscripciones
              </h3>
              <ul className="list-disc list-inside text-gray-300">
                <li>Azogues - Terminal viejo | Ferretería Peñaloza</li>
                <li>Parq. Luis Cordero | Tienda Los SIMBA'S</li>
                <li>Quillopungo | Papelería Márquez</li>
              </ul>
            </div>

            <div className="bg-gray-900 rounded-2xl shadow-lg p-6 flex flex-col justify-center border border-gray-700 hover:shadow-yellow-400/20 transition-shadow">
              <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                💳 Costo 10$ USD  
              </h3>
              <p className="text-gray-300 font-semibold">
                Transferencia | Banco Bolivariano
              </p>
              <p className="text-gray-300">
                # Cuenta:{" "}
                <span className="font-semibold text-white">4021091167</span>
                <br />
                Byron Toalongo
              </p>
            </div>
          </div>
        </section>
        {/* <section
          id="auspiciantes"
          className="min-h-screen px-8 py-16 bg-gray-100"
        >
          <h2 className="text-3xl font-bold mb-6">Auspiciantes</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-4 shadow rounded text-center">
              Sponsor 1
            </div>
            <div className="bg-white p-4 shadow rounded text-center">
              Sponsor 2
            </div>
            <div className="bg-white p-4 shadow rounded text-center">
              Sponsor 3
            </div>
            <div className="bg-white p-4 shadow rounded text-center">
              Sponsor 4
            </div>
          </div>
        </section> */}
        <section id="ruta" className="min-h-screen px-8 py-16 bg-white">
          <h2 className="text-3xl font-bold mb-6">🗺️ Mapa de Ruta</h2>
          <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m54!1m12!1m3!1d5475.509136623124!2d-78.82997822652362!3d-2.7507385707770373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m39!3e0!4m3!3m2!1d-2.7505317!2d-78.8284351!4m5!1s0x91cd0d4297cba00f%3A0xaeabd656f612397c!2sIglesia%20Cat%C3%B3lica%20de%20San%20Marcos%2C%20Azogues!3m2!1d-2.7440624!2d-78.8255039!4m3!3m2!1d-2.7372514!2d-78.8152868!4m3!3m2!1d-2.7333366!2d-78.8071075!4m3!3m2!1d-2.7253209999999997!2d-78.7976116!4m3!3m2!1d-2.7256415!2d-78.81469469999999!4m5!1s0x91cd0d4297cba00f%3A0xaeabd656f612397c!2sIglesia%20Cat%C3%B3lica%20de%20San%20Marcos!3m2!1d-2.7440624!2d-78.8255039!4m5!1s0x91cd0d65e8270ba7%3A0x54b4347da306620c!2sAzogues!3m2!1d-2.7508653!2d-78.82880329999999!5e0!3m2!1ses!2sec!4v1743961327746!5m2!1ses!2sec"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
        <section
          id="contacto"
          className="min-h-screen px-8 py-16 bg-[#e5f5ec] flex flex-col items-center"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-green-700">
              Contáctanos por WhatsApp
            </h2>
            <p className="text-green-800">
              ¿Tienes dudas? ¡Estamos para ayudarte!
            </p>
          </div>

          <form
            className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSubmit={(e: any) => {
              e.preventDefault();
              const nombre = e.target.nombre.value;
              const mensaje = e.target.mensaje.value;
              const numero = VITE_PHONE; // <-- Reemplaza con tu número de WhatsApp (con código de país)

              const texto = encodeURIComponent(
                `Hola, soy ${nombre}.\nMensaje: ${mensaje}`
              );

              window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
            }}
          >
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              className="w-full border border-green-300 p-3 rounded"
              required
            />
            <textarea
              name="mensaje"
              placeholder="Tu mensaje"
              className="w-full border border-green-300 p-3 rounded h-32"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full font-semibold flex items-center justify-center gap-2"
            >
              Enviar a WhatsApp
            </button>
          </form>
        </section>
      </main>
      <FooterComponent />
    </div>
  );
}
