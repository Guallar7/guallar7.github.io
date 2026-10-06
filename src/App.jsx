import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Check,
  Code2,
  Compass,
  Copy,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  NotebookPen,
  Stethoscope,
  Twitter,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'
import { notes } from './notes'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`

const email = 'davidguallargarcia@gmail.com'

const navItems = [
  { id: 'trayectoria', label: 'Trayectoria', icon: Activity },
  { id: 'proyectos', label: 'Proyectos', icon: Layers },
  { id: 'notas', label: 'Notas', icon: NotebookPen },
  { id: 'ia', label: 'IA', icon: BookOpen },
  { id: 'contacto', label: 'Contacto', icon: Mail },
]

const discoveryItems = [
  {
    href: '#trayectoria',
    icon: Activity,
    label: 'Trayectoria',
    text: 'De Medicina y MIR a especialista en anestesiología.',
  },
  {
    href: '#proyectos',
    icon: Layers,
    label: 'Proyectos',
    text: 'Herramientas clínicas, IA y recursos abiertos.',
  },
  {
    href: '#notas',
    icon: NotebookPen,
    label: 'Notas',
    text: 'Ideas y aprendizajes sobre medicina, tecnología e IA.',
  },
  {
    href: '#enfoque',
    icon: Compass,
    label: 'Enfoque',
    text: 'Cómo pienso la tecnología desde la práctica médica.',
  },
]

const projects = [
  {
    title: 'app-PBM',
    type: 'Aplicación clínica',
    url: 'https://www.app-pbm.com',
    image: asset('app-pbm.webp'),
    description:
      'Aplicación web de apoyo en medicina perioperatoria y Patient Blood Management. Reúne protocolos, calculadoras y recursos prácticos para el trabajo diario.',
    detail:
      'El foco está en reducir fricción: tener cerca información clínica, cálculos y recursos que suelen estar dispersos.',
    tags: ['PBM', 'anestesia', 'medicina perioperatoria'],
  },
  {
    title: 'Estatuto Médico Propio',
    type: 'Portal documental',
    url: 'https://guallar7.github.io/estatuto-medico-propio/index.html',
    image: asset('estatuto-medico-propio.webp'),
    description:
      'Portal con datos, fuentes y explicaciones para entender la reivindicación de un estatuto médico y facultativo propio.',
    detail:
      'Un proyecto documental: ordenar argumentos, fuentes y contexto para que el lector pueda formarse una idea sin depender de mensajes sueltos.',
    tags: ['documentación', 'sanidad', 'GitHub Pages'],
  },
  {
    title: 'app-builder',
    type: 'Repositorio abierto',
    url: 'https://github.com/Guallar7/app-builder/',
    image: asset('app-builder-logo.webp'),
    description:
      'Guía para que profesionales sanitarios puedan crear aplicaciones sencillas con ayuda de IA, sin partir de conocimientos técnicos.',
    detail:
      'La idea es bajar la barrera de entrada: que un sanitario pueda describir una necesidad concreta y llegar a un prototipo usable.',
    tags: ['IA', 'herramientas', 'no-code'],
  },
]

const interests = [
  'Anestesiología y reanimación',
  'Medicina perioperatoria',
  'Patient Blood Management',
  'IA aplicada a medicina',
  'Herramientas para clínicos',
  'Docencia médica',
]

const careerItems = [
  {
    period: 'Jul 2025 - actualidad',
    title: 'FEA de Anestesiología y Reanimación',
    place: 'Hospital Universitario Miguel Servet, Zaragoza',
    description:
      'Trabajo como especialista en anestesiología y reanimación. Mis áreas de interés son la anestesia quirúrgica, anestesia obstétrica, anestesia fuera de quirófano, medicina perioperatoria y Patient Blood Management.',
  },
  {
    period: 'Jul 2021 - Jul 2025',
    title: 'MIR de Anestesiología y Reanimación',
    place: 'Hospital Universitario Miguel Servet, Zaragoza',
    description:
      'Completé la residencia en el mismo hospital, con una base clínica amplia en anestesia, reanimación, cuidados críticos, vía aérea, dolor, obstetricia y distintas áreas quirúrgicas.',
  },
  {
    period: 'Mar - Jun 2020',
    title: 'Auxilio sanitario durante la crisis COVID-19',
    place: 'Gobierno de Aragón',
    description:
      'Primer contacto laboral sanitario en un contexto excepcional, antes de iniciar la residencia.',
  },
  {
    period: '2014 - 2020',
    title: 'Grado en Medicina',
    place: 'Universidad de Zaragoza',
    description:
      'Formación médica universitaria en Zaragoza, que después he ido completando con posgrado en anestesiología, investigación médica, cuidados críticos y metodología clínica.',
  },
]

const careerFocus = [
  {
    icon: Stethoscope,
    title: 'Clínica',
    text: 'Anestesia, reanimación y medicina perioperatoria en práctica hospitalaria real.',
  },
  {
    icon: GraduationCap,
    title: 'Docencia',
    text: 'Colaboración en formación de estudiantes, residentes y profesionales sanitarios.',
  },
  {
    icon: Briefcase,
    title: 'Innovación',
    text: 'Proyectos digitales e IA aplicada a problemas concretos del trabajo clínico.',
  },
]

const aiAdvice = [
  {
    title: 'Dale contexto',
    text: 'Explica quién eres, para quién escribes, qué objetivo tienes y qué parte ya tienes clara.',
  },
  {
    title: 'Define la tarea',
    text: 'Pide una acción concreta: resumir, comparar, revisar, transformar, crear una tabla o detectar problemas.',
  },
  {
    title: 'Marca límites',
    text: 'Di qué no debe hacer: inventar datos, usar tono comercial, alargar la respuesta o asumir información clínica.',
  },
  {
    title: 'Pide una segunda pasada',
    text: 'Cuando tengas una respuesta, pide que la critique, la simplifique o la adapte a otra audiencia.',
  },
]

const markdownCheatsheet = [
  ['# Título', 'Título principal'],
  ['## Sección', 'Separar partes del prompt'],
  ['- idea', 'Lista de requisitos o puntos'],
  ['**importante**', 'Resaltar una instrucción clave'],
  ['```texto```', 'Pegar texto largo sin que se mezcle'],
]

const xmlCheatsheet = [
  ['<contexto>...</contexto>', 'Situación y objetivo'],
  ['<tarea>...</tarea>', 'Qué quieres que haga'],
  ['<restricciones>...</restricciones>', 'Límites y cosas que debe evitar'],
  ['<formato>...</formato>', 'Cómo quieres recibir la respuesta'],
  ['<datos>...</datos>', 'Material sobre el que debe trabajar'],
]

const promptExample = `<contexto>
Soy médico y preparo una explicación para pacientes.
</contexto>

<tarea>
Resume este texto en lenguaje claro.
</tarea>

<formato>
Dame 5 puntos, evita tecnicismos innecesarios y señala dudas.
</formato>`

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  useEffect(() => {
    const sectionIds = ['inicio', ...navItems.map((item) => item.id), 'enfoque']

    const updateProgress = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0
      setScrollProgress(Math.min(Math.max(progress, 0), 1))
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visible?.target.id) {
          setActiveSection(visible.target.id)
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.2, 0.6] },
    )

    sectionIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    // Aparición suave de bloques al hacer scroll.
    const revealSelector = [
      '.section-heading',
      '.subsection-heading',
      '.timeline-item',
      '.career-focus',
      '.project-card',
      '.note',
      '.advice-card',
      '.prompt-example',
      '.cheatsheet-card',
      '.principles > div',
      '.contact-band > *',
    ].join(', ')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    let revealObserver

    if (!prefersReducedMotion && 'IntersectionObserver' in window) {
      document.documentElement.classList.add('js-reveal')
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      )

      document.querySelectorAll(revealSelector).forEach((element) => {
        const siblings = [...element.parentElement.children].filter((child) =>
          child.matches(revealSelector),
        )
        const index = Math.min(siblings.indexOf(element), 4)
        element.style.setProperty('--reveal-delay', `${index * 80}ms`)
        element.classList.add('reveal')
        revealObserver.observe(element)
      })
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      observer.disconnect()
      revealObserver?.disconnect()
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="site-shell">
      <a className="skip-link" href="#trayectoria">
        Saltar al contenido
      </a>
      <header className="topbar">
        <div
          className="scroll-progress"
          style={{ transform: `scaleX(${scrollProgress})` }}
          aria-hidden="true"
        />
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">DG</span>
          <span>David Guallar</span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a
              href={`#${item.id}`}
              key={item.id}
              aria-current={activeSection === item.id ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-copy">
            <img
              className="hero-avatar"
              src={asset('david-guallar-profile.webp')}
              alt="Fotografía de David Guallar"
            />
            <p className="eyebrow">
              Médico especialista en Anestesiología y Reanimación
            </p>
            <h1>Medicina, anestesia e inteligencia artificial.</h1>
            <p className="hero-text">
              Soy David Guallar, médico en Zaragoza. Me interesa construir y
              compartir herramientas digitales que salgan de problemas reales de
              la práctica clínica.
            </p>
            <div className="hero-actions" aria-label="Enlaces principales">
              <a className="button primary" href="#proyectos">
                Ver proyectos
                <ArrowUpRight size={18} aria-hidden="true" />
              </a>
              <a className="button secondary" href="#ia">
                <BookOpen size={18} aria-hidden="true" />
                IA práctica
              </a>
              <a
                className="button secondary"
                href="https://github.com/Guallar7"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} aria-hidden="true" />
              GitHub
            </a>
          </div>

          <div className="hero-discovery" aria-label="Accesos de contenido">
            {discoveryItems.map(({ href, icon: Icon, label, text }) => (
              <a className="discovery-card" href={href} key={label}>
                <Icon size={20} aria-hidden="true" />
                <span>{label}</span>
                <p>{text}</p>
              </a>
            ))}
          </div>

          <a className="scroll-cue" href="#trayectoria">
            <ArrowDown size={16} aria-hidden="true" />
            Sigue bajando
          </a>
        </div>

          <aside className="hero-panel" aria-label="Resumen">
            <img
              className="profile-portrait"
              src={asset('david-guallar-profile.webp')}
              alt="Fotografía de David Guallar"
            />
            <div>
              <span className="panel-label">Ahora mismo</span>
              <p>
                Clínica primero. Tecnología después. Y, cuando algo no está
                claro, mejor decirlo.
              </p>
            </div>
          </aside>
        </section>

        <section className="section compact-band" aria-label="Intereses">
          <div className="interest-list">
            {interests.map((interest) => (
              <span key={interest}>{interest}</span>
            ))}
          </div>
        </section>

        <section className="section career-section" id="trayectoria">
          <div className="section-heading">
            <p className="eyebrow">01 / Trayectoria laboral</p>
            <h2>Mi recorrido, sin convertir esto en un CV completo</h2>
            <p>
              Lo importante para entender mi perfil: soy médico clínico, me he
              formado en anestesiología en Zaragoza y ahora combino la práctica
              hospitalaria con docencia, innovación e IA aplicada a problemas
              concretos.
            </p>
          </div>

          <div className="career-layout">
            <div className="timeline" aria-label="Línea temporal profesional">
              {careerItems.map((item, index) => (
                <article className="timeline-item" key={item.title}>
                  <p className="timeline-period">{item.period}</p>
                  <div>
                    <h3>{item.title}</h3>
                    <p className="timeline-place">{item.place}</p>
                    <details className="timeline-details" open={index === 0}>
                      <summary>Contexto</summary>
                      <p>{item.description}</p>
                    </details>
                  </div>
                </article>
              ))}
            </div>

            <aside className="career-focus" aria-label="Ejes actuales">
              <p className="eyebrow">Ejes actuales</p>
              {careerFocus.map(({ icon: Icon, title, text }) => (
                <div className="focus-item" key={title}>
                  <Icon size={22} aria-hidden="true" />
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </aside>
          </div>
        </section>

        <section className="section" id="proyectos">
          <div className="section-heading">
            <p className="eyebrow">02 / Proyectos</p>
            <h2>Lo que estoy construyendo o compartiendo</h2>
            <p>
              Proyectos relacionados con medicina, IA y programación. Algunos
              nacen para uso clínico; otros para explicar, ordenar o facilitar
              que otros sanitarios construyan sus propias herramientas.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-visual">
                  <img src={project.image} alt="" />
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <span>{project.type}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <details className="project-details">
                    <summary>Más contexto</summary>
                    <p>{project.detail}</p>
                  </details>
                  <div className="tags" aria-label={`Temas de ${project.title}`}>
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir proyecto
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section notes-section" id="notas">
          <div className="section-heading">
            <p className="eyebrow">03 / Notas</p>
            <h2>Cosas que pienso, pruebo o aprendo</h2>
            <p>
              Notas breves sobre medicina, tecnología e IA. Sin calendario fijo:
              aparecen cuando hay algo que merece la pena contar.
            </p>
          </div>

          <div className="notes-list">
            {notes.map((note, index) => (
              <article className="note" id={`nota-${note.slug}`} key={note.slug}>
                <details open={index === 0}>
                  <summary>
                    {note.displayDate && (
                      <time dateTime={note.date}>{note.displayDate}</time>
                    )}
                    <h3>{note.title}</h3>
                    {note.summary && <p>{note.summary}</p>}
                  </summary>
                  <div
                    className="note-body"
                    dangerouslySetInnerHTML={{ __html: note.html }}
                  />
                </details>
              </article>
            ))}
          </div>
        </section>

        <section className="section ai-section" id="ia">
          <div className="section-heading">
            <p className="eyebrow">04 / IA práctica</p>
            <h2>Un espacio para aprender y trabajar mejor con IA</h2>
            <p>
              Una guía personal que irá creciendo poco a poco. De momento
              empiezo por lo más práctico: cómo hablar con la IA para obtener
              mejores respuestas.
            </p>
          </div>


          <div className="ai-content-block" id="ia-consejos">
            <div className="subsection-heading">
              <p className="eyebrow">Consejos para hablar con IA</p>
              <h3>Ser claro suele importar más que usar palabras técnicas</h3>
              <p>
                No hace falta hablar como programador. Suele funcionar mejor
                ordenar el contexto, pedir una tarea concreta y definir el
                formato de salida. Para temas clínicos, elimina datos
                identificables y revisa siempre el resultado con criterio
                profesional.
              </p>
            </div>

            <div className="ai-layout">
              <div className="ai-advice-grid" aria-label="Consejos para hablar con IA">
                {aiAdvice.map(({ title, text }) => (
                  <article className="advice-card" key={title}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>

              <div className="prompt-example">
                <p className="eyebrow">Ejemplo breve</p>
                <pre>
                  <code>{promptExample}</code>
                </pre>
              </div>
            </div>

            <div className="cheatsheet-grid">
              <article className="cheatsheet-card">
                <div>
                  <Code2 size={22} aria-hidden="true" />
                  <h3>Chuleta de Markdown</h3>
                </div>
                {markdownCheatsheet.map(([syntax, meaning]) => (
                  <div className="cheatsheet-row" key={syntax}>
                    <code>{syntax}</code>
                    <span>{meaning}</span>
                  </div>
                ))}
              </article>

              <article className="cheatsheet-card">
                <div>
                  <BookOpen size={22} aria-hidden="true" />
                  <h3>Chuleta de XML</h3>
                </div>
                {xmlCheatsheet.map(([syntax, meaning]) => (
                  <div className="cheatsheet-row" key={syntax}>
                    <code>{syntax}</code>
                    <span>{meaning}</span>
                  </div>
                ))}
              </article>
            </div>
          </div>
        </section>

        <section className="section split-section" id="enfoque">
          <div className="section-heading narrow">
            <p className="eyebrow">05 / Enfoque</p>
            <h2>No intento parecer programador. Intento resolver cosas.</h2>
          </div>

          <div className="principles">
            <div>
              <Stethoscope size={24} aria-hidden="true" />
              <h3>Desde la clínica</h3>
              <p>
                Las ideas suelen empezar en consulta, quirófano, docencia o
                leyendo sobre problemas que afectan al trabajo sanitario.
              </p>
            </div>
            <div>
              <Code2 size={24} aria-hidden="true" />
              <h3>Con herramientas simples</h3>
              <p>
                Me interesan las aplicaciones web pequeñas, claras y útiles. Si
                una herramienta necesita demasiada explicación, probablemente se
                puede simplificar.
              </p>
            </div>
            <div>
              <BookOpen size={24} aria-hidden="true" />
              <h3>Para aprender y compartir</h3>
              <p>
                Programar con IA me sirve para aprender, ordenar ideas y dejar
                recursos que otros puedan usar o mejorar.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-band" id="contacto">
          <div>
            <p className="eyebrow">06 / Contacto</p>
            <h2>Si algo te sirve o se te ocurre cómo mejorarlo, escríbeme.</h2>
            <p className="contact-text">
              Sobre todo si eres anestesista, residente o sanitario y quieres
              probar alguna herramienta o compartir impresiones.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={`mailto:${email}`}>
              <Mail size={18} aria-hidden="true" />
              Escribirme
            </a>
            <button
              className="button secondary"
              type="button"
              onClick={copyEmail}
              aria-live="polite"
            >
              {emailCopied ? (
                <Check size={18} aria-hidden="true" />
              ) : (
                <Copy size={18} aria-hidden="true" />
              )}
              {emailCopied ? 'Copiado' : 'Copiar email'}
            </button>
            <a
              className="button secondary"
              href="https://github.com/Guallar7"
              target="_blank"
              rel="noreferrer"
            >
              <Github size={18} aria-hidden="true" />
              GitHub
            </a>
            <a
              className="button secondary"
              href="https://x.com/DavidGuallar"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter size={18} aria-hidden="true" />
              X / Twitter
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/david-guallar-24ba90340"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} David Guallar · Zaragoza</p>
        <p>
          Hecha con ayuda de IA y revisada a mano ·{' '}
          <a
            href="https://github.com/Guallar7/guallar7.github.io"
            target="_blank"
            rel="noreferrer"
          >
            Código de esta web
          </a>
        </p>
      </footer>

      <nav className="mobile-bottom-nav" aria-label="Navegación móvil">
        {navItems.map(({ id, label, icon: Icon }) => (
          <a
            href={`#${id}`}
            key={id}
            className="bottom-nav-item"
            aria-current={activeSection === id ? 'page' : undefined}
          >
            <Icon size={20} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </div>
  )
}

export default App
