// TODO: confirmar con el doctor todos estos datos antes de publicar.
const CLINICA = {
  doctor: "Dr. Edward Polanía",
  especialidad: "Cirugía de nariz y cirugía facial", // confirmar título exacto con el doctor
  whatsapp: "573000000000", // número con indicativo, sin + ni espacios
  telefonoVisible: "+57 300 000 0000",
  direccion: "Av. La Toma #8-60, Neiva, Huila",
  horario: "Lunes a viernes, con cita previa", // confirmar
  instagram: "https://www.instagram.com/dr_edwardpolania/",
};

const WA_LINK = `https://wa.me/${CLINICA.whatsapp}?text=${encodeURIComponent(
  "Hola, quiero agendar una valoración con el Dr. Edward Polanía."
)}`;

const SERVICIOS = [
  {
    nombre: "Rinoplastia",
    desc: "Cirugía que remodela la nariz por estética, por función respiratoria o por ambas.",
  },
  {
    nombre: "Cirugía de senos nasales",
    desc: "Tratamiento endoscópico de sinusitis crónica y obstrucciones, sin cortes externos.",
  },
  {
    nombre: "Blefaroplastia",
    desc: "Cirugía de los párpados para retirar el exceso de piel y las bolsas.",
  },
  {
    nombre: "Otoplastia",
    desc: "Corrección de la forma o la posición de las orejas.",
  },
];

const PASOS = [
  {
    titulo: "Valoración",
    desc: "El doctor examina, escucha lo que buscas y te explica qué es posible en tu caso.",
  },
  {
    titulo: "Plan quirúrgico",
    desc: "Definen juntos la técnica, los tiempos, los costos y los cuidados previos.",
  },
  {
    titulo: "Cirugía",
    desc: "Se realiza en una institución habilitada, con el equipo de anestesia y enfermería.",
  },
  {
    titulo: "Controles",
    desc: "Revisiones programadas hasta completar tu recuperación.",
  },
];

function WhatsAppButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block rounded-full bg-teal px-7 py-3.5 text-base font-semibold text-white transition-colors hover:bg-ink ${className}`}
    >
      Agendar por WhatsApp
    </a>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      {/* NAV */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-ink/10 bg-paper/95 px-6 py-4 backdrop-blur sm:px-12">
        <a href="#inicio" className="font-display text-xl font-semibold">
          {CLINICA.doctor}
        </a>
        <nav className="hidden items-center gap-8 text-sm font-medium sm:flex">
          <a href="#servicios">Servicios</a>
          <a href="#doctor">El doctor</a>
          <a href="#proceso">Cómo funciona</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="grid gap-12 px-6 py-20 sm:px-12 sm:py-28 lg:grid-cols-[1.3fr_1fr] lg:items-center"
      >
        <div>
          <p className="mb-6 text-base text-teal">{CLINICA.especialidad} en Neiva</p>
          <h1 className="font-display text-6xl font-bold leading-[0.95] sm:text-8xl">
            Edward
            <br />
            Polanía
          </h1>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-ink/80">
            Cirugía de nariz y de rostro con una valoración clara: te explicamos qué
            se puede lograr, cómo y con qué cuidados, antes de decidir.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <WhatsAppButton />
            <a href="#servicios" className="text-sm font-semibold underline underline-offset-4">
              Ver servicios
            </a>
          </div>
        </div>
        <div className="flex aspect-[4/5] items-center justify-center rounded-t-[999px] bg-mist">
          <span className="px-6 text-center text-sm text-ink/50">
            [FOTO PROFESIONAL DEL DOCTOR]
          </span>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="bg-mist px-6 py-24 sm:px-12">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Procedimientos</h2>
        <ul className="mt-12 max-w-4xl">
          {SERVICIOS.map((s) => (
            <li
              key={s.nombre}
              className="grid gap-2 border-t border-ink/20 py-7 sm:grid-cols-[1fr_1.4fr] sm:gap-10"
            >
              <h3 className="font-display text-2xl font-semibold">{s.nombre}</h3>
              <p className="leading-relaxed text-ink/80">{s.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* EL DOCTOR */}
      <section id="doctor" className="grid gap-12 px-6 py-24 sm:px-12 lg:grid-cols-2 lg:items-center">
        <div className="flex aspect-[4/3] items-center justify-center bg-blush/60">
          <span className="text-sm text-ink/50">[FOTO EN CONSULTORIO]</span>
        </div>
        <div>
          <h2 className="font-display text-4xl font-bold sm:text-5xl">Sobre el doctor</h2>
          <p className="mt-6 max-w-lg leading-[1.75] text-ink/80">
            [Aquí va la reseña del Dr. Polanía: universidad, especialización, años de
            experiencia y sociedades a las que pertenece. Se completa con los datos
            que él confirme.]
          </p>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="bg-ink px-6 py-24 text-white sm:px-12">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Cómo funciona</h2>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PASOS.map((p, i) => (
            <li key={p.titulo} className="border-t border-white/30 pt-5">
              <span className="font-display text-3xl text-blush">{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{p.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">{p.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="px-6 py-24 sm:px-12">
        <h2 className="font-display text-4xl font-bold sm:text-5xl">Agenda tu valoración</h2>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <address className="space-y-2 not-italic leading-relaxed">
            <p className="font-semibold">Consultorio</p>
            <p>{CLINICA.direccion}</p>
            <p>{CLINICA.horario}</p>
            <p>{CLINICA.telefonoVisible}</p>
            <p>
              <a
                href={CLINICA.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                @dr_edwardpolania en Instagram
              </a>
            </p>
          </address>
          <div>
            <p className="mb-5 max-w-md leading-relaxed text-ink/80">
              Escríbenos por WhatsApp y te confirmamos fecha y hora de la consulta.
            </p>
            <WhatsAppButton />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 px-6 py-8 text-xs text-ink/60 sm:px-12">
        © 2026 {CLINICA.doctor}. Los resultados varían según cada paciente; toda
        cirugía requiere una valoración médica previa.
      </footer>
    </div>
  );
}
