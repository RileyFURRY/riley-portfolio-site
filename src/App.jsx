import React, { useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  PawPrint,
  Github,
  Check,
  Copy,
} from "lucide-react";
import { showcases } from "./showcases";

const links = {
  email: "mailto:rilez.dawn@gmail.com",
  github: "https://github.com/RileyFURRY",
  roblox: "https://www.roblox.com/users/58274315/profile",
  linkedin: "https://www.linkedin.com/in/rilez-dawn-a8bb9b411/",
  resume: "/resume-riley-ebbeson.pdf",
};
const filters = ["All", "Completed", "Proof of concept", "Work in progress"];
const notes = {
  "dragon-flight":
    "A dragon flight controller, from aerial movement to the camera that follows it. Best watched in motion.",
  "aot-3dmg":
    "Grappling, momentum, and high-speed traversal inspired by Attack on Titan's maneuver gear.",
  "dragon-flight-extended":
    "Another look at the dragon controller, with more flight and creature movement footage.",
  "fps-system-wip":
    "An early look at my first-person shooter system. Weapon handling and combat are still a work in progress.",
  "game-of-thrones-roleplay":
    "A fantasy roleplay project, with a look at its world interactions and gameplay systems.",
  "tokyo-ghoul-concept":
    "A Tokyo Ghoul-inspired combat concept, bringing abilities and movement together.",
  "naruto-game-concept":
    "An experiment with Naruto-inspired abilities, combat, and movement.",
  "naruto-game-concept-2":
    "More footage from my Naruto-inspired systems, exploring abilities and combat interactions.",
  starwars:
    "A Star Wars-inspired experiment in sci-fi combat and gameplay presentation.",
};

function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </a>
  );
}

function Project({ project, number }) {
  return (
    <article className="project">
      <div className="project-video">
        <video
          controls
          playsInline
          preload="none"
          poster={project.posterSrc}
          aria-label={`${project.title} showcase`}
        >
          <source src={project.videoSrc} type="video/mp4" />
          <a href={project.videoSrc}>Download the {project.title} video</a>
        </video>
      </div>
      <div className="project-meta">
        <span>
          {String(number).padStart(2, "0")} / {project.category}
        </span>
        <span
          className={`status ${project.status === "Completed" ? "complete" : ""}`}
        >
          {project.status}
        </span>
      </div>
      <h3>{project.title}</h3>
      <p>{notes[project.id]}</p>
      <details>
        <summary>
          Behind the build <span aria-hidden="true">+</span>
        </summary>
        <div className="project-details">
          <p>
            <strong>My role:</strong> {project.role}
          </p>
          <ul>
            {project.built.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {project.youtubeUrl && (
            <ExternalLink href={project.youtubeUrl}>
              Watch on YouTube
            </ExternalLink>
          )}
        </div>
      </details>
    </article>
  );
}

export default function RileyPortfolio() {
  const [filter, setFilter] = useState("All");
  const [copyStatus, setCopyStatus] = useState("");
  const visibleProjects = showcases.filter(
    (project) => filter === "All" || project.status === filter,
  );
  async function copyDiscord() {
    try {
      await navigator.clipboard.writeText("te_yo");
      setCopyStatus("Copied! Send me a friend request.");
    } catch {
      setCopyStatus("Copy my username manually: te_yo");
    }
  }

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a className="wordmark" href="#top" aria-label="RileyTheFurryDev home">
          <PawPrint aria-hidden="true" size={26} />
          <span>
            Riley<span className="wordmark-rest">TheFurryDev</span>
            <span className="pink">.</span>
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#showcase">My work</a>
          <a href="#experience">Experience</a>
          <a href="#info">About me</a>
        </nav>
        <a className="header-contact" href="#contact">
          Say hello <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </header>

      <main id="main">
        <section id="top" className="hero wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="little-star" aria-hidden="true">
                ✳
              </span>{" "}
              Roblox developer. Furry. Riley.
            </p>
            <h1>
              Hey, I'm
              <br />
              <span className="riley-name">Riley.</span>
              <span className="hello-star" aria-hidden="true">
                ✧
              </span>
            </h1>
            <p className="handle">
              You might know me as <strong>RileyTheFurryDev.</strong>
            </p>
            <p className="intro">
              I'm 23, and I build things on Roblox. Flying dragons, fast-paced
              combat, or the systems behind a game's shop — that's my kind of
              work.
            </p>
            <div className="hero-actions">
              <a className="button" href="#showcase">
                Take a look around <ArrowDown size={18} aria-hidden="true" />
              </a>
              <a
                className="text-link"
                href={links.resume}
                target="_blank"
                rel="noreferrer"
              >
                My résumé <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <p className="hero-footnote">
              Nearly a decade of building, learning, and trying things.
            </p>
          </div>
          <figure className="portrait">
            <div className="photo-tape" aria-hidden="true" />
            <img
              src="/images/riley.jpg"
              alt="Riley in their fursuit under pink and blue lights"
              width="5504"
              height="6813"
              fetchpriority="high"
            />
            <figcaption>
              <span>Yep, that's me.</span>
              <PawPrint size={23} aria-hidden="true" />
            </figcaption>
            <span className="photo-credit">
              Photo: @Lenny.posts.pics / @LennyGaming69
            </span>
          </figure>
        </section>

        <div className="intro-strip">
          <div className="wrap">
            <span>Luau & Roblox Studio</span>
            <span aria-hidden="true">✳</span>
            <span>Gameplay & movement</span>
            <span aria-hidden="true">✳</span>
            <span>Systems that fit together</span>
          </div>
        </div>

        <section id="experience" className="experience wrap section-space">
          <div className="section-heading">
            <p className="eyebrow">01 / A few things I've been part of</p>
            <h2>
              Good projects.
              <br />
              <em>Good people.</em>
            </h2>
          </div>
          <div className="experience-list">
            <article className="experience-row">
              <div>
                <p className="eyebrow">Front-end development</p>
                <h3>Eleons</h3>
              </div>
              <div>
                <p>
                  I worked on the front-end systems players interact with,
                  including:
                </p>
                <ul className="contributions">
                  <li>The entire storage system</li>
                  <li>The shop vendor system</li>
                  <li>Porting emotes, summons, and custom summons</li>
                </ul>
              </div>
            </article>
            <article className="experience-row">
              <div>
                <p className="eyebrow">Gameplay & architecture</p>
                <h3>Block Models</h3>
              </div>
              <div>
                <p>
                  I worked with Chris at Block Models, who previously ran the
                  Roblox Acceleration Program.
                </p>
                <p>
                  My work included building the gameplay systems and
                  architecture for a playable prototype in three days.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section id="showcase" className="work-section section-space">
          <div className="wrap">
            <div className="work-heading">
              <div>
                <p className="eyebrow">02 / From my Roblox Studio</p>
                <h2>
                  Things I've <em>made.</em>
                </h2>
              </div>
              <p>
                Some finished systems, some experiments.
                <br />
                Hit play and have a look.
              </p>
            </div>
            <div className="filter-row">
              <div
                className="filters"
                role="group"
                aria-label="Filter projects by status"
              >
                {filters.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={filter === item}
                    onClick={() => setFilter(item)}
                  >
                    {item === "All" ? "Everything" : item}
                  </button>
                ))}
              </div>
              <span className="project-count" aria-live="polite">
                {visibleProjects.length}{" "}
                {visibleProjects.length === 1 ? "project" : "projects"}
              </span>
            </div>
            <div className="project-grid">
              {visibleProjects.map((project) => (
                <Project
                  key={project.id}
                  project={project}
                  number={showcases.indexOf(project) + 1}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="info" className="about wrap section-space">
          <div className="about-title">
            <p className="eyebrow">03 / The person behind the scripts</p>
            <h2>
              A bit more
              <br />
              <em>about me.</em>
            </h2>
            <div className="about-doodle" aria-hidden="true">
              <PawPrint size={72} strokeWidth={1.3} />
              <span>also answers to Riley</span>
            </div>
          </div>
          <div className="about-copy">
            <p className="large-copy">
              I'm a self-taught developer who likes making things you can
              actually play with.
            </p>
            <p>
              I've spent nearly 10 years working with Roblox, across freelance,
              contract, and studio projects. My work ranges from movement and
              combat to the storage, shops, and multiplayer systems that keep a
              game running.
            </p>
            <p>
              I care about how a game feels in your hands, and how its code
              holds up when it's time to add the next thing.
            </p>
            <p>
              I work remotely, speak English, and can arrange overlap across
              time zones. I'm open to full-time, contract, and freelance work.
            </p>
            <div id="skills" className="toolbox">
              <h3>At my desk</h3>
              <dl>
                <div>
                  <dt>The everyday stuff</dt>
                  <dd>Roblox Studio · Lua / Luau · Gameplay systems</dd>
                </div>
                <div>
                  <dt>Under the hood</dt>
                  <dd>
                    Client/server architecture · Multiplayer · Optimization
                  </dd>
                </div>
                <div>
                  <dt>My toolkit</dt>
                  <dd>Rojo · Wally · Rokit · Lune · Selene · StyLua · CI</dd>
                </div>
              </dl>
            </div>
            <ExternalLink className="text-link" href={links.resume}>
              The longer version is in my résumé
            </ExternalLink>
          </div>
        </section>

        <section id="contact" className="contact section-space">
          <div className="wrap contact-layout">
            <div>
              <p className="eyebrow">04 / Let's talk</p>
              <h2>
                Got something
                <br />
                <em>in mind?</em>
              </h2>
              <p>
                Tell me what you're making and where you need a hand.
                <br />
                Or just say hi — that's okay too.
              </p>
              <a className="email-link" href={links.email}>
                rilez.dawn@gmail.com <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <div className="contact-notes">
              <p className="eyebrow">Find me around the internet</p>
              <div className="social-links">
                <ExternalLink href={links.github}>
                  <Github size={18} aria-hidden="true" /> GitHub
                </ExternalLink>
                <ExternalLink href={links.roblox}>Roblox</ExternalLink>
                <ExternalLink href={links.linkedin}>LinkedIn</ExternalLink>
              </div>
              <div className="discord">
                <span>More of a Discord person?</span>
                <button
                  type="button"
                  onClick={copyDiscord}
                  aria-label="Copy Discord username te_yo"
                >
                  <strong>te_yo</strong>
                  {copyStatus.startsWith("Copied") ? (
                    <Check size={18} aria-hidden="true" />
                  ) : (
                    <Copy size={18} aria-hidden="true" />
                  )}
                </button>
                <p aria-live="polite">
                  {copyStatus ||
                    "Send a friend request. I'll get back to you when I can."}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <a className="wordmark" href="#top">
          <PawPrint size={20} aria-hidden="true" /> RileyTheFurryDev
          <span className="pink">.</span>
        </a>
        <span>A little corner of the internet, by Riley.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
