import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Download, Eye, Filter, Gamepad2, Github, Layers3, Mail, Play, Sparkles, Wrench, Zap } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/rilez-dawn-a8bb9b411/";
const EMAIL_ADDRESS = "rilez.dawn@gmail.com";
const DISCORD_TAG = "te_yo";
const GITHUB_URL = "https://github.com/RileyFURRY";
const ROBLOX_URL = "https://www.roblox.com/users/58274315/profile";
const RESUME_URL = "/resume-riley-ebbeson.pdf";

const HEADLINE_CLASS =
  "font-black tracking-tight text-white [text-shadow:0_2px_0_rgba(0,0,0,0.95),0_4px_18px_rgba(0,0,0,0.65)]";

const SECTION_TITLE_CLASS =
  "font-black tracking-tight text-white [text-shadow:0_2px_0_rgba(0,0,0,0.95),0_3px_14px_rgba(0,0,0,0.6)]";

const CARD_TITLE_CLASS =
  "font-extrabold text-white [text-shadow:0_1px_0_rgba(0,0,0,0.95),0_2px_10px_rgba(0,0,0,0.45)]";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Card({ className = "", children }) {
  return <div className={cx("rounded-3xl border border-white/10 bg-white/[0.05]", className)}>{children}</div>;
}

function CardContent({ className = "", children }) {
  return <div className={className}>{children}</div>;
}

function Button({ asChild, variant, className = "", children }) {
  const base = "inline-flex items-center justify-center font-semibold transition disabled:pointer-events-none disabled:opacity-50";
  const variants = variant === "outline"
    ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
    : "bg-cyan-300 text-zinc-950 hover:bg-cyan-200";

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cx(base, variants, className, children.props.className),
    });
  }

  return <button className={cx(base, variants, className)}>{children}</button>;
}

function LinkedInIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function DiscordIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.54 5.34A16.72 16.72 0 0 0 15.43 4c-.18.33-.39.78-.53 1.13a15.48 15.48 0 0 0-4.8 0C9.96 4.78 9.75 4.33 9.56 4a16.63 16.63 0 0 0-4.1 1.34C2.86 9.22 2.16 13 2.51 16.73A16.83 16.83 0 0 0 7.55 19.3c.41-.56.77-1.15 1.08-1.77-.59-.22-1.15-.49-1.68-.81.14-.1.28-.21.41-.32a11.91 11.91 0 0 0 10.28 0c.13.11.27.22.41.32-.53.32-1.09.59-1.68.81.31.62.67 1.21 1.08 1.77a16.78 16.78 0 0 0 5.04-2.57c.41-4.32-.7-8.06-2.95-11.39ZM9.2 14.43c-.98 0-1.78-.9-1.78-2s.78-2 1.78-2 1.8.9 1.78 2c0 1.1-.79 2-1.78 2Zm5.6 0c-.98 0-1.78-.9-1.78-2s.78-2 1.78-2 1.8.9 1.78 2c0 1.1-.79 2-1.78 2Z" />
    </svg>
  );
}

const showcases = [
  {
    id: "dragon-flight",
    title: "Dragon Flying System",
    category: "Movement / Creature Controller",
    status: "Completed",
    featured: true,
    youtubeUrl: "https://youtu.be/VQQyjB-IkDY",
    videoSrc: "/videos/dragon-flight.mp4",
    posterSrc: "/videos/posters/dragon-flight.jpg",
    visualLabel: "Dragon POV Flight",
    visualSubtext: "Cinematic aerial control showcase",
    summary:
      "A POV showcase of a Roblox dragon flight system focused on cinematic movement, aerial control, and creature-scale game feel.",
    built: ["flight controller", "camera feel", "POV showcase", "creature movement"],
    role: "Gameplay programmer / systems designer",
  },
  {
    id: "aot-3dmg",
    title: "Attack on Titan 3DMG System",
    category: "Traversal / Combat Movement",
    status: "Completed",
    featured: true,
    youtubeUrl: "https://youtu.be/Yl26IMocnD8",
    videoSrc: "/videos/aot-3dmg.mp4",
    posterSrc: "/videos/posters/aot-3dmg.jpg",
    visualLabel: "3DMG Movement Leak",
    visualSubtext: "High-speed grappling traversal prototype",
    summary:
      "A proof-of-concept 3D maneuver gear showcase with high-speed traversal, grappling-style movement, and anime-inspired mobility mechanics.",
    built: ["3DMG traversal", "grapple movement", "momentum feel", "prototype polish"],
    role: "Gameplay programmer / prototype developer",
  },
  {
    id: "dragon-flight-extended",
    title: "Dragon Flight Extended Showcase",
    category: "Movement / Creature Controller",
    status: "Completed",
    featured: false,
    videoSrc: "/videos/dragon-flight%202.mp4",
    visualLabel: "Dragon Flight Expansion",
    visualSubtext: "Additional creature movement and flight showcase",
    summary:
      "An additional dragon flight showcase focused on creature-scale movement, aerial control, and cinematic gameplay presentation.",
    built: ["flight controller", "creature movement", "camera feel", "showcase polish"],
    role: "Gameplay programmer / systems designer",
  },
  {
    id: "game-of-thrones-roleplay",
    title: "Game of Thrones Roleplay Game",
    category: "Roleplay / World Systems",
    status: "Completed",
    featured: false,
    videoSrc: "/videos/game%20of%20thrones%20roleplay%20game.mp4",
    visualLabel: "Roleplay Systems",
    visualSubtext: "Fantasy roleplay gameplay concept",
    summary:
      "A fantasy roleplay showcase exploring Roblox gameplay presentation, world interaction, and roleplay-oriented systems.",
    built: ["roleplay systems", "world interaction", "prototype scene", "gameplay presentation"],
    role: "Gameplay programmer / prototype developer",
  },
  {
    id: "tokyo-ghoul-concept",
    title: "Tokyo Ghoul Concept",
    category: "Combat / Anime Systems",
    status: "Completed",
    featured: false,
    videoSrc: "/videos/Tokyo%20Ghoul%20concept.mp4",
    visualLabel: "Tokyo Ghoul Concept",
    visualSubtext: "Anime-inspired combat prototype",
    summary:
      "An anime-inspired Roblox combat concept focused on ability presentation, movement feel, and prototype gameplay direction.",
    built: ["anime combat", "ability feel", "prototype systems", "visual direction"],
    role: "Gameplay programmer / prototype developer",
  },
  {
    id: "naruto-game-concept",
    title: "Naruto Game Concept",
    category: "Combat / Anime Systems",
    status: "Proof of concept",
    featured: false,
    videoSrc: "/videos/Naruto%20game%20concept.mp4",
    visualLabel: "Naruto Systems Concept",
    visualSubtext: "Anime-inspired combat and movement prototype",
    summary:
      "A Naruto-inspired Roblox concept exploring anime combat presentation, movement feel, and ability-driven gameplay systems.",
    built: ["anime combat", "ability systems", "movement feel", "prototype polish"],
    role: "Gameplay programmer / prototype developer",
  },
  {
    id: "naruto-game-concept-2",
    title: "Naruto Game Concept 2",
    category: "Combat / Anime Systems",
    status: "Proof of concept",
    featured: false,
    videoSrc: "/videos/Naruto%20game%20concept%202.mp4",
    visualLabel: "Naruto Systems Concept",
    visualSubtext: "Additional anime-inspired combat showcase",
    summary:
      "A second Naruto-inspired Roblox showcase exploring ability systems, combat presentation, movement feel, and prototype polish.",
    built: ["anime combat", "ability systems", "movement feel", "combat showcase"],
    role: "Gameplay programmer / prototype developer",
  },
  {
    id: "starwars",
    title: "Star Wars Showcase",
    category: "Combat / Sci-Fi Systems",
    status: "Proof of concept",
    featured: false,
    youtubeUrl: "https://youtu.be/EpNrl1s5SZg",
    videoSrc: "/videos/starwars-showcase.mp4",
    posterSrc: "/videos/posters/starwars-showcase.jpg",
    visualLabel: "Star Wars Systems",
    visualSubtext: "Sci-fi combat and presentation showcase",
    summary:
      "A sci-fi Roblox showcase exploring Star Wars-inspired gameplay, visuals, and combat presentation.",
    built: ["sci-fi combat", "visual direction", "prototype systems", "showcase scene"],
    role: "Gameplay programmer / Roblox developer",
  },
];

const skillGroups = [
  {
    title: "Core development",
    items: ["Roblox Studio", "Lua / Luau", "Gameplay Systems", "Component Architecture"],
  },
  {
    title: "Systems & networking",
    items: ["Server Authority", "Multiplayer Systems", "Backend Architecture", "Optimization"],
  },
  {
    title: "Tooling & workflow",
    items: ["Rojo / Wally / Rokit", "Lune", "Selene / StyLua", "CI & Build Automation"],
  },
];

const workflowItems = [
  {
    title: "System-first builds",
    text: "I structure mechanics as reusable modules with clear client/server ownership instead of one-off scripts.",
  },
  {
    title: "Authoritative gameplay",
    text: "Server logic stays predictable, while client visuals handle responsiveness, camera feel, and feedback.",
  },
  {
    title: "Playable proof",
    text: "I present finished systems and proof-of-concept work through direct footage so the result is easy to judge.",
  },
];

const resumeHighlights = [
  {
    value: "Nearly 10 years",
    label: "Roblox development",
    text: "Hands-on experience across freelance, contract, and studio environments.",
  },
  {
    value: "3-day prototype",
    label: "Block Models LLC",
    text: "Owned gameplay systems and architecture for a playable prototype end-to-end.",
  },
  {
    value: "Full pipeline",
    label: "Modern Roblox workflow",
    text: "Rojo, Wally, Rokit, Lune, Selene, StyLua, repeatable builds, and sourcemaps.",
  },
  {
    value: "2B+ visit credits",
    label: "Animation contributions",
    text: "Contributed animation work to high-traffic Roblox experiences.",
  },
];

const aboutDetails = [
  "23 years old",
  "English-speaking",
  "Adjustable for any timezone",
  "Remote full-time, contract, and freelance work",
];

const services = [
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Gameplay Systems",
    text: "I build the mechanics that make a game feel alive: combat, tools, movement, disasters, rounds, entities, and player interactions.",
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: "Roblox Architecture",
    text: "I design modular systems with clean services, components, utilities, tags, and clear client/server responsibilities.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Polish & Game Feel",
    text: "I focus on the details that make gameplay satisfying: camera motion, VFX timing, responsive inputs, UI feedback, and atmosphere.",
  },
];

const showcaseFilters = [
  { label: "Showcase all", value: "All" },
  { label: "Completed", value: "Completed" },
  { label: "Proof of concept", value: "Proof of concept" },
];

function smoothScrollTo(event, targetId) {
  event.preventDefault();
  const target = document.getElementById(targetId);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getStatusClasses(status) {
  if (status === "Completed") {
    return "border-emerald-400/30 bg-emerald-400/10 text-emerald-200";
  }
  return "border-amber-400/30 bg-amber-400/10 text-amber-200";
}

function VideoPreview({ showcase }) {
  return (
    <div className="relative aspect-video overflow-hidden bg-black">
      <video
        className="h-full w-full object-cover"
        controls
        playsInline
        preload="metadata"
        poster={showcase.posterSrc}
      >
        <source src={showcase.videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="pointer-events-none absolute left-5 top-5 flex flex-wrap gap-3">
        <span className={`rounded-full border px-4 py-1.5 text-sm font-semibold backdrop-blur ${getStatusClasses(showcase.status)}`}>
          {showcase.status}
        </span>
        {showcase.featured && (
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold text-cyan-200 backdrop-blur">
            Featured
          </span>
        )}
      </div>
    </div>
  );
}

function ShowcaseCard({ showcase }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="group grid h-full overflow-hidden rounded-[1.5rem] border-white/10 bg-white/[0.045] transition hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.07] md:grid-cols-[minmax(0,1.35fr)_minmax(20rem,.65fr)]">
        <VideoPreview showcase={showcase} />

        <CardContent className="flex h-full min-h-full flex-col border-t border-white/10 bg-zinc-950/35 p-6 md:border-l md:border-t-0 md:p-7">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">{showcase.category}</p>
              <h3 className={`mt-2 text-2xl leading-tight ${CARD_TITLE_CLASS}`}>{showcase.title}</h3>
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300/20">
              <Play className="h-5 w-5" />
            </div>
          </div>

          <p className="mt-5 leading-7 text-zinc-300">{showcase.summary}</p>

          <div className="mt-6 grid gap-3">
            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Status</p>
              <span className={`mt-3 inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStatusClasses(showcase.status)}`}>
                {showcase.status}
              </span>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/25 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">My role</p>
              <p className="mt-2 text-sm leading-6 text-zinc-200">{showcase.role}</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">Built with</p>
            <div className="flex flex-wrap gap-2">
              {showcase.built.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}

function ShowcaseGridCard({ showcase }) {
  return (
    <motion.article
      className="h-full"
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.35 }}
    >
      <Card className="group h-full overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.045] transition hover:-translate-y-1 hover:border-cyan-300/20 hover:bg-white/[0.07]">
        <VideoPreview showcase={showcase} />
        <CardContent className="p-8 md:p-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">{showcase.category}</p>
              <h3 className={`mt-2 text-3xl leading-tight md:text-4xl ${CARD_TITLE_CLASS}`}>{showcase.title}</h3>
            </div>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300/20">
              <Play className="h-4 w-4" />
            </div>
          </div>

          <p className="mt-6 line-clamp-3 text-xl leading-9 text-zinc-300">{showcase.summary}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            {showcase.built.slice(0, 3).map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-zinc-300">
                {item}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.article>
  );
}

function EmptyShowcaseSlot() {
  return (
    <Card className="h-full min-h-[42rem] rounded-[2rem] border border-dashed border-white/15 bg-white/[0.02]">
      <CardContent className="flex h-full items-center justify-center p-6 text-center text-sm text-zinc-500">
        Portfolio slot
      </CardContent>
    </Card>
  );
}

export default function RileyPortfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredShowcases = useMemo(() => {
    if (activeFilter === "All") return showcases;
    return showcases.filter((showcase) => showcase.status === activeFilter);
  }, [activeFilter]);

  const completedCount = showcases.filter((showcase) => showcase.status === "Completed").length;
  const conceptCount = showcases.filter((showcase) => showcase.status === "Proof of concept").length;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10rem] h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[35rem] w-[35rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 mx-auto flex max-w-[1600px] items-center justify-between border-b border-white/10 bg-zinc-950/70 px-8 py-5 backdrop-blur-xl">
        <a href="#top" onClick={(event) => smoothScrollTo(event, "top")} className="text-xl font-black tracking-tight text-white transition hover:text-cyan-200">
          Riley Dawn
        </a>
        <nav className="hidden items-center gap-8 text-base font-bold text-zinc-200 md:flex">
          <a className="transition hover:text-cyan-200" href="#showcase" onClick={(event) => smoothScrollTo(event, "showcase")}>Showcases</a>
          <a className="transition hover:text-cyan-200" href="#skills" onClick={(event) => smoothScrollTo(event, "skills")}>Skills</a>
          <a className="transition hover:text-cyan-200" href="#info" onClick={(event) => smoothScrollTo(event, "info")}>Info</a>
          <a className="transition hover:text-cyan-200" href="#contact" onClick={(event) => smoothScrollTo(event, "contact")}>Contact</a>
        </nav>
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Open Riley Dawn's LinkedIn profile"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/10"
        >
          <LinkedInIcon /> LinkedIn
        </a>
      </header>

      <main id="top" className="relative z-10">
        <section className="mx-auto grid max-w-[1600px] items-center gap-14 px-8 pb-24 pt-16 md:grid-cols-[minmax(0,1.1fr)_minmax(30rem,.9fr)] md:pt-28">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Zap className="h-4 w-4" /> Roblox Gameplay Developer
            </div>
            <h1 className={`max-w-5xl text-6xl leading-tight md:text-8xl ${HEADLINE_CLASS}`}>
              Roblox systems shown through real playable showcases.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-zinc-300">
              Senior Roblox systems developer with nearly 10 years of experience building traversal, combat, backend architecture, multiplayer mechanics, optimization pipelines, and polished gameplay prototypes.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild className="rounded-full px-8 py-7 text-base">
                <a href="#showcase" onClick={(event) => smoothScrollTo(event, "showcase")}>
                  View showcases <Eye className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 px-8 py-7 text-base text-white hover:bg-white/10">
                <a href="#contact" onClick={(event) => smoothScrollTo(event, "contact")}>Contact me</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/5 px-8 py-7 text-base text-white hover:bg-white/10">
                <a href={RESUME_URL} target="_blank" rel="noreferrer">
                  Resume <Download className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur">
              <CardContent className="p-0">
                <VideoPreview showcase={showcases[0]} />
                <div className="grid grid-cols-3 border-t border-white/10 text-center">
                  <div className="p-4">
                    <p className="text-2xl font-black text-white">{showcases.length}</p>
                    <p className="text-xs text-zinc-400">Videos</p>
                  </div>
                  <div className="border-x border-white/10 p-4">
                    <p className="text-2xl font-black text-emerald-200">{completedCount}</p>
                    <p className="text-xs text-zinc-400">Done</p>
                  </div>
                  <div className="p-4">
                    <p className="text-2xl font-black text-amber-200">{conceptCount}</p>
                    <p className="text-xs text-zinc-400">Concepts</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section className="mx-auto max-w-[1600px] px-8 py-14">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.title} className="rounded-3xl border-white/10 bg-white/[0.05]">
                <CardContent className="p-8">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                    {service.icon}
                  </div>
                  <h3 className={`text-2xl ${CARD_TITLE_CLASS}`}>{service.title}</h3>
                  <p className="mt-4 text-base leading-8 text-zinc-300">{service.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="showcase" className="mx-auto max-w-[1900px] px-6 py-20 scroll-mt-24">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Actual Showcase System</p>
              <h2 className={`text-4xl md:text-5xl ${SECTION_TITLE_CLASS}`}>Watch the work in motion.</h2>
              <p className="mt-4 max-w-2xl leading-8 text-zinc-300">
                Browse the full work grid, then filter into larger single-column case-study views for finished systems or proof-of-concept prototypes.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-2">
              <Filter className="ml-2 h-4 w-4 text-zinc-400" />
              {showcaseFilters.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeFilter === filter.value
                      ? "bg-cyan-300 text-zinc-950"
                      : "text-zinc-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {activeFilter === "All" ? (
            <div className="mx-auto grid max-w-[1750px] auto-rows-fr grid-cols-1 gap-12 sm:grid-cols-2">
              {filteredShowcases.map((showcase) => (
                <ShowcaseGridCard key={showcase.id} showcase={showcase} />
              ))}
              {Array.from({ length: Math.max(0, 4 - filteredShowcases.length) }).map((_, index) => (
                <EmptyShowcaseSlot key={`empty-slot-${index}`} />
              ))}
            </div>
          ) : (
            <div className="grid gap-5">
              {filteredShowcases.map((showcase) => (
                <ShowcaseCard key={showcase.id} showcase={showcase} />
              ))}
            </div>
          )}
        </section>

        <section id="skills" className="mx-auto max-w-[1600px] px-8 py-20 scroll-mt-24">
          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.04]">
            <CardContent className="p-8 md:p-12">
              <div className="mb-10 max-w-3xl">
                <div className="max-w-3xl">
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Skill Set</p>
                  <h2 className={`text-5xl md:text-6xl ${SECTION_TITLE_CLASS}`}>Production-ready Roblox systems.</h2>
                  <p className="mt-5 text-lg leading-9 text-zinc-300">
                    I focus on gameplay code that can survive real projects: modular, network-aware, responsive, and easy to extend.
                  </p>
                </div>
              </div>

              <div className="grid gap-5 lg:grid-cols-3">
                {skillGroups.map((group) => (
                  <div key={group.title} className="rounded-2xl border border-white/10 bg-black/25 p-6">
                    <div className="mb-5 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-200">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <h3 className={`text-xl ${CARD_TITLE_CLASS}`}>{group.title}</h3>
                    </div>
                    <div className="grid gap-3">
                      {group.items.map((skill) => (
                        <div key={skill} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm text-zinc-200">
                          <span>{skill}</span>
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="info" className="mx-auto max-w-[1600px] px-8 py-20 scroll-mt-24">
          <div className="mb-10">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Info</p>
            <h2 className={`text-5xl md:text-6xl ${SECTION_TITLE_CLASS}`}>About Riley.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-zinc-300">
              A clear snapshot of who I am, how I work, and what I bring into Roblox production.
            </p>
          </div>

          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.045]">
            <CardContent className="grid gap-10 p-8 md:grid-cols-[.9fr_1.1fr] md:p-12">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">About Me</p>
                <h3 className={`text-4xl md:text-5xl ${SECTION_TITLE_CLASS}`}>Self-taught systems developer built around real production work.</h3>
              </div>

              <div>
                <p className="text-lg leading-9 text-zinc-300">
                  I am a 23-year-old Roblox developer focused on clean gameplay systems, fast iteration, and strong collaboration. I speak English, work remotely, and can adjust my schedule around different timezones when a project needs reliable overlap.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {aboutDetails.map((detail) => (
                    <div key={detail} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/25 px-5 py-4 text-zinc-200">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-300" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mx-auto max-w-[1600px] px-8 py-16">
          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Professional Snapshot</p>
              <h2 className={`text-4xl md:text-5xl ${SECTION_TITLE_CLASS}`}>Resume-backed experience.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href={ROBLOX_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:bg-white/10"
              >
                Roblox profile
              </a>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {resumeHighlights.map((highlight) => (
              <Card key={highlight.label} className="rounded-3xl border-white/10 bg-white/[0.045]">
                <CardContent className="p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300">{highlight.label}</p>
                  <h3 className={`mt-4 text-3xl ${CARD_TITLE_CLASS}`}>{highlight.value}</h3>
                  <p className="mt-4 text-base leading-8 text-zinc-300">{highlight.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1600px] px-8 py-20">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
            <Card className="overflow-hidden rounded-3xl border-white/10 bg-white/[0.045]">
              <CardContent className="p-9 md:p-10">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <div>
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">How I work</p>
                    <h2 className={`text-4xl md:text-5xl ${SECTION_TITLE_CLASS}`}>Clean systems, playable feel.</h2>
                  </div>
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                    <Wrench className="h-7 w-7" />
                  </div>
                </div>

                <div className="grid gap-4">
                  {workflowItems.slice(0, 2).map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-black/25 p-5">
                      <h3 className={`text-2xl ${CARD_TITLE_CLASS}`}>{item.title}</h3>
                      <p className="mt-3 text-base leading-8 text-zinc-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="rounded-3xl border-cyan-400/20 bg-cyan-400/10">
              <CardContent className="flex h-full flex-col justify-between p-9 md:p-10">
                <div>
                  <CheckCircle2 className="mb-5 h-8 w-8 text-cyan-200" />
                  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-100/80">Showcase approach</p>
                  <h3 className={`text-4xl ${CARD_TITLE_CLASS}`}>Clear proof, no guesswork.</h3>
                  <p className="mt-5 text-lg leading-8 text-cyan-100">
                    Finished work and proof-of-concept experiments are labeled directly, then shown through local video so the mechanics can speak for themselves.
                  </p>
                </div>
                <div className="mt-8 rounded-2xl border border-cyan-200/20 bg-black/20 p-5">
                  <h4 className="font-bold text-white">{workflowItems[2].title}</h4>
                  <p className="mt-2 text-sm leading-7 text-cyan-100/85">{workflowItems[2].text}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1600px] px-8 pb-28 pt-12 scroll-mt-24">
          <Card className="overflow-hidden rounded-[2rem] border-white/10 bg-white/[0.06]">
            <CardContent className="p-8 text-center md:p-14">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
              <h2 className={`mx-auto max-w-5xl text-4xl md:text-6xl ${SECTION_TITLE_CLASS}`}>
                Need Roblox gameplay systems, tools, or a polished prototype?
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-zinc-300">
                Reach out for collaboration, commissions, or serious game development work.
              </p>
              <div className="mx-auto mt-10 grid max-w-6xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="rounded-3xl border border-white/10 bg-black/20 p-6 text-left transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <Mail className="mb-4 h-6 w-6 text-cyan-300" />
                  <p className={`font-bold ${CARD_TITLE_CLASS}`}>Email</p>
                  <p className="mt-2 text-base leading-7 text-zinc-300">{EMAIL_ADDRESS}</p>
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-white/10 bg-black/20 p-6 text-left transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <LinkedInIcon className="mb-4 h-6 w-6 text-cyan-300" />
                  <p className={`font-bold ${CARD_TITLE_CLASS}`}>LinkedIn</p>
                  <p className="mt-2 text-base leading-7 text-zinc-300">Riley Dawn</p>
                </a>

                <div className="rounded-3xl border border-white/10 bg-black/20 p-6 text-left">
                  <DiscordIcon className="mb-4 h-6 w-6 text-cyan-300" />
                  <p className={`font-bold ${CARD_TITLE_CLASS}`}>Discord</p>
                  <p className="mt-2 text-base leading-7 text-zinc-300">{DISCORD_TAG}</p>
                  <p className="mt-3 text-base leading-7 text-zinc-300">
                    Send a friend request and I'll accept it the moment Im available.
                  </p>
                </div>

                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-white/10 bg-black/20 p-6 text-left transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <Github className="mb-4 h-6 w-6 text-cyan-300" />
                  <p className={`font-bold ${CARD_TITLE_CLASS}`}>GitHub</p>
                  <p className="mt-2 text-base leading-7 text-zinc-300">RileyFURRY</p>
                </a>

                <a
                  href={ROBLOX_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-white/10 bg-black/20 p-6 text-left transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <Gamepad2 className="mb-4 h-6 w-6 text-cyan-300" />
                  <p className={`font-bold ${CARD_TITLE_CLASS}`}>Roblox</p>
                  <p className="mt-2 text-base leading-7 text-zinc-300">Profile</p>
                </a>

                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-3xl border border-white/10 bg-black/20 p-6 text-left transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <Download className="mb-4 h-6 w-6 text-cyan-300" />
                  <p className={`font-bold ${CARD_TITLE_CLASS}`}>Resume</p>
                  <p className="mt-2 text-base leading-7 text-zinc-300">PDF download</p>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
