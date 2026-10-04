const DOCTORA = {
  nombre: "Dra. Olga Cruz",
  // Cambia por el número real: con 57 al inicio, sin espacios ni signos
  whatsapp: "573000000000",
  telefono: "+57 300 000 0000",
};

const SERVICIOS = [
  {
    icono: "👶",
    titulo: "Exámenes auditivos neonatales",
    texto:
      "Exámenes para detectar a tiempo cualquier alteración auditiva en recién nacidos, de forma segura y cuidadosa.",
  },
  {
    icono: "👂",
    titulo: "Evaluación auditiva",
    texto:
      "Valoración de la audición para niños y adultos, con resultados claros y orientación para la familia.",
  },
  {
    icono: "💬",
    titulo: "Valoración fonoaudiológica",
    texto:
      "Evaluación de la comunicación, el lenguaje y la voz, con un plan de acompañamiento personalizado.",
  },
];

const PORQUE = [
  {
    titulo: "Especialista en exámenes auditivos neonatales",
    texto: "Experiencia dedicada al cuidado auditivo de los recién nacidos.",
  },
  {
    titulo: "Atención cercana",
    texto: "Explicación clara de cada resultado y acompañamiento a las familias.",
  },
  {
    titulo: "Presencia en Neiva y Garzón",
    texto: "Atención para familias de todo el Huila en dos ciudades.",
  },
  {
    titulo: "Reconocida en el Huila",
    texto: "Respaldo y confianza de pacientes y familias de la región.",
  },
];

const SEDES = [
  { ciudad: "Neiva", direccion: "" },
  { ciudad: "Garzón", direccion: "" },
];

export default function Home() {
  const wa = `https://wa.me/${DOCTORA.whatsapp}?text=${encodeURIComponent(
    "Hola Dra. Olga, quisiera agendar una cita."
  )}`;

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="sticky top-0 z-50 border-b border-teal-100 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="font-serif text-xl font-semibold text-teal-800">
            {DOCTORA.nombre}
          </a>
          <div className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#sobre-mi" className="hover:text-teal-700">Sobre mí</a>
            <a href="#servicios" className="hover:text-teal-700">Servicios</a>
            <a href="#sedes" className="hover:text-teal-700">Sedes</a>
            <a href="#contacto" className="hover:text-teal-700">Contacto</a>
          </div>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            Agendar cita
          </a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-sky-50">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
              <p className="mb-4 inline-block rounded-full bg-teal-100 px-4 py-1 text-sm font-semibold text-teal-800">
                Fonoaudióloga · Neiva y Garzón, Huila
              </p>
              <h1 className="font-serif text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
                Cuidamos la audición de tu bebé desde el primer día
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                La Dra. Olga Cruz es especialista en exámenes para recién nacidos, con
                experiencia y reconocimiento en Neiva y Garzón.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-teal-700 px-8 py-3 font-semibold text-white shadow-lg shadow-teal-700/30 transition hover:bg-teal-800"
                >
                  Agendar por WhatsApp
                </a>
                <a
                  href="#servicios"
                  className="rounded-full border border-teal-700 px-8 py-3 font-semibold text-teal-800 transition hover:bg-teal-50"
                >
                  Ver servicios
                </a>
              </div>
            </div>
            <div className="rounded-3xl border border-teal-100 bg-white/80 p-8 shadow-xl backdrop-blur">
              <p className="font-serif text-2xl font-semibold text-teal-800">
                Atención con calidez y precisión
              </p>
              <ul className="mt-6 space-y-4 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-teal-600">✔</span>Exámenes para recién nacidos</li>
                <li className="flex items-start gap-3"><span className="text-teal-600">✔</span>Resultados explicados con claridad</li>
                <li className="flex items-start gap-3"><span className="text-teal-600">✔</span>Atención en Neiva y Garzón</li>
                <li className="flex items-start gap-3"><span className="text-teal-600">✔</span>Reconocimiento en el Huila</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl font-semibold text-slate-900 md:text-4xl">Sobre la Dra. Olga Cruz</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-teal-600" />
          <p className="mt-8 text-lg leading-relaxed text-slate-600">
            Fonoaudióloga especialista en exámenes auditivos neonatales. Su trabajo se centra en
            cuidar la audición y la comunicación desde los primeros días de vida,
            acompañando a las familias con cercanía y explicando cada resultado con claridad.
            Cuenta con experiencia y reconocimiento en Neiva y en Garzón, Huila.
          </p>
        </section>

        <section id="servicios" className="bg-teal-50/60 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-center font-serif text-3xl font-semibold text-slate-900 md:text-4xl">Servicios</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-teal-600" />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {SERVICIOS.map((s) => (
                <div key={s.titulo} className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-2xl">{s.icono}</div>
                  <h3 className="font-serif text-xl font-semibold text-teal-800">{s.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{s.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-center font-serif text-3xl font-semibold text-slate-900 md:text-4xl">Experiencia y reconocimiento</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded bg-teal-600" />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {PORQUE.map((p) => (
              <div key={p.titulo} className="flex gap-4 rounded-2xl border border-teal-100 p-6">
                <div className="mt-1 h-3 w-3 shrink-0 rounded-full bg-teal-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">{p.titulo}</h3>
                  <p className="mt-1 text-slate-600">{p.texto}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="sedes" className="bg-gradient-to-br from-teal-700 to-teal-900 py-20 text-white">
          <div className="mx-auto max-w-6xl px-6 text-center">
            <h2 className="font-serif text-3xl font-semibold md:text-4xl">Dónde atendemos</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded bg-teal-300" />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {SEDES.map((s) => (
                <div key={s.ciudad} className="rounded-2xl bg-white/10 p-8 backdrop-blur">
                  <p className="font-serif text-3xl font-semibold">{s.ciudad}</p>
                  <p className="mt-1 text-teal-100">Huila</p>
                  {s.direccion && <p className="mt-3 text-teal-50">{s.direccion}</p>}
                  <p className="mt-4 text-sm text-teal-100">Atención con cita previa</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="font-serif text-3xl font-semibold text-slate-900 md:text-4xl">Agenda tu cita</h2>
          <p className="mt-6 text-lg text-slate-600">
            Escríbenos por WhatsApp y te ayudamos a programar el examen para tu bebé.
          </p>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-full bg-teal-700 px-10 py-4 text-lg font-semibold text-white shadow-lg shadow-teal-700/30 transition hover:bg-teal-800"
          >
            Escribir por WhatsApp
          </a>
          <p className="mt-4 text-slate-500">{DOCTORA.telefono}</p>
        </section>
      </main>

      <footer className="border-t border-teal-100 bg-slate-50 py-8 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} {DOCTORA.nombre} · Fonoaudióloga · Neiva y Garzón, Huila
      </footer>
    </div>
  );
}


