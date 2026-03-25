import Image, { type StaticImageData } from "next/image";
import profileImg from "../assets/jayeeta_photo1.jpeg";
import { data as projects } from "../data/data.js";

type Project = {
  id: number;
  title: string;
  image: StaticImageData;
  description?: string;
  technologies?: string;
  github?: string;
  live?: string;
};

const projectsData = projects as unknown as Project[];

const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-600">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-9 overflow-hidden rounded-full border border-zinc-200 bg-white">
              <Image
                src={profileImg}
                alt="Profile photo"
                fill
                className="object-cover"
                sizes="36px"
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-zinc-900">
                Jayeeta Sadhukhan
              </div>
              <div className="text-xs text-zinc-600">
                Full-Stack Software Engineer
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 sm:flex">
            <a
              href="mailto:jayeeta97.riya@gmail.com"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
            >
              Email
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-6xl px-4 pb-14 pt-10 sm:pb-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl">
                Full-Stack Software Engineer
              </h1>

              <p className="mt-4 max-w-xl text-base leading-7 text-zinc-700">
                Building scalable, production-grade MERN applications with strong
                focus on database optimization, API rate limiting, RBAC, and
                dependable delivery. Currently owning development on a SaaS
                platform serving <span className="font-semibold">2,500+</span> active
                outlets and <span className="font-semibold">50,000+</span> active users.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#projects"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
                >
                  Contact
                </a>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 sm:max-w-lg">
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-lg font-semibold text-zinc-900">3+ years</div>
                  <div className="mt-1 text-xs font-medium text-zinc-600">
                    Production experience
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-lg font-semibold text-zinc-900">MERN</div>
                  <div className="mt-1 text-xs font-medium text-zinc-600">
                    React + Node
                  </div>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="text-lg font-semibold text-zinc-900">50K+</div>
                  <div className="mt-1 text-xs font-medium text-zinc-600">
                    Active users
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-1 rounded-[28px] bg-gradient-to-b from-zinc-900/10 to-transparent blur-sm" />
              <div className="relative overflow-hidden rounded-[28px] border border-zinc-200 bg-white p-5">
                <div className="relative h-[320px] overflow-hidden rounded-2xl bg-zinc-100">
                  <Image
                    src={profileImg}
                    alt="Jayeeta Sadhukhan"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 512px"
                    priority
                  />
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {[
                    "DB optimization",
                    "API rate limiting",
                    "RBAC",
                    "Team leadership",
                    "AI-assisted workflows",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-zinc-200 bg-white p-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 h-9 w-9 rounded-xl bg-zinc-900/5" />
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">
                        What I bring
                      </div>
                      <div className="mt-1 text-sm leading-6 text-zinc-700">
                        Clear engineering ownership, measurable performance gains,
                        and a pragmatic approach to shipping reliable features.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            title="About"
            subtitle="Senior-level full-stack delivery with a strong systems mindset."
          />

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 md:col-span-2">
              <h3 className="text-base font-semibold text-zinc-900">Summary</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-700">
                Full-Stack Software Engineer with 3+ years of experience building
                scalable, production-grade MERN stack applications. Currently
                owning development on a SaaS platform serving 2,500+ active outlets
                and 50,000+ active users, with hands-on experience in database
                optimization, API rate limiting, RBAC, server deployment, and
                team leadership.
              </p>
              <p className="mt-4 text-sm leading-7 text-zinc-700">
                Proficient in leveraging AI-assisted development workflows
                (Claude, Cursor, and GitHub Copilot) to accelerate delivery,
                automate debugging, and consistently write high-quality code.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-900">Focus</h3>
              <ul className="mt-3 space-y-3 text-sm text-zinc-700">
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-zinc-900" />
                  <span>Performance improvements through query planning</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-zinc-900" />
                  <span>Security-first authorization (RBAC)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-zinc-900" />
                  <span>
                    Reliability under load (rate limiting + throttling)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            title="Skills"
            subtitle="A practical stack for building and operating production web systems."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-900">
                Languages & Frameworks
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "JavaScript (ES6+)",
                  "TypeScript",
                  "React.js",
                  "Next.js",
                  "Node.js",
                  "Express.js",
                  "Redux Toolkit",
                  "Tailwind CSS",
                  "Bootstrap",
                  "Ant Design",
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-900">
                Databases, APIs & DevOps
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  "MongoDB",
                  "Mongoose",
                  "PostgreSQL",
                  "RESTful APIs",
                  "GraphQL",
                  "Postman",
                  "AWS EC2",
                  "Nginx (deployment)",
                  "Vercel",
                  "Git/GitHub/GitLab",
                  "Linux/Ubuntu",
                  "Razorpay",
                  "Shiprocket API",
                  "Hygraph CMS",
                ].map((x) => (
                  <span
                    key={x}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-semibold text-zinc-700"
                  >
                    {x}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 lg:col-span-2">
              <h3 className="text-base font-semibold text-zinc-900">
                System & Delivery Strengths
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Data Structures & Algorithms",
                  "System Design",
                  "RBAC",
                  "MVC",
                  "DB Query Optimization",
                  "API Rate Limiting",
                  "Team planning & reviews",
                  "AI-assisted debugging workflows",
                ].map((x) => (
                  <div
                    key={x}
                    className="flex items-start gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 p-4"
                  >
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-zinc-900" />
                    <div className="text-sm font-semibold text-zinc-800">
                      {x}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            title="Experience"
            subtitle="Ownership across product features, performance, and production reliability."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Software Engineer
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Transerg LLP | Remote
                  </div>
                </div>
                <div className="text-xs font-semibold text-zinc-700">
                  July 2024 - Present
                </div>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                <li>
                  Own end-to-end development on a SaaS restaurant operations
                  platform serving 2,500+ active outlets and 50,000+ active users;
                  diagnose and resolve production bugs on a live system, ensuring
                  high availability at scale.
                </li>
                <li>
                  Collaborate with junior developers via task distribution, code
                  reviews, and best-practice sharing; participate in feature
                  scoping and cross-team delivery coordination.
                </li>
                <li>
                  Optimized MongoDB aggregation pipelines, added compound indexes,
                  and eliminated N+1 query patterns, reducing response times on
                  high-traffic analytics endpoints.
                </li>
                <li>
                  Implemented API rate limiting and request throttling to protect
                  backend services under peak load, improving system resilience.
                </li>
                <li>
                  Designed RBAC with granular permission management across multi-level
                  user hierarchies; built template-based task workflows, user rating
                  system, and group task creation using React, Redux Toolkit, and
                  Ant Design.
                </li>
                <li>
                  Produced system architecture diagrams using Miro and Mermaid,
                  improving team alignment and contributing to measurable sprint
                  velocity improvements.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Full Stack Developer
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">Eveit | Remote</div>
                </div>
                <div className="text-xs font-semibold text-zinc-700">
                  July 2023 - July 2024
                </div>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                <li>
                  Built production-ready e-commerce platforms with React.js,
                  Next.js, and Node.js, integrating Razorpay and Shiprocket API
                  for payment and order management.
                </li>
                <li>
                  Applied lazy loading and memoization techniques (React.memo,
                  useMemo, useCallback), improving website performance by ~20% and
                  enhancing Core Web Vitals.
                </li>
                <li>
                  Developed a headless CMS blog platform using React and Hygraph CMS,
                  enabling non-technical users to publish and manage content.
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6 lg:col-span-2">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Junior Software Engineer
                  </div>
                  <div className="mt-1 text-sm text-zinc-600">
                    Jupitice Justice Technologies Pvt. Ltd. | Chandigarh, India
                  </div>
                </div>
                <div className="text-xs font-semibold text-zinc-700">
                  February 2023 - July 2023
                </div>
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-700">
                <li>
                  Designed MySQL schemas for blockchain transaction management,
                  handling dynamic user data and cryptographic materials with
                  feature-gated activation.
                </li>
                <li>
                  Integrated multiple third-party APIs to extend platform functionality
                  and improve user experience.
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            title="Projects"
            subtitle="Selected work with a focus on responsive UI, full-stack integration, and practical deployments."
          />

          <div className="relative">
            <div
              className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-zinc-50 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-zinc-50 to-transparent"
              aria-hidden="true"
            />

            <div
              className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory scroll-smooth"
              aria-label="Project sliding window"
            >
              {projectsData.map((p) => {
                const techTags = (p.technologies ?? "")
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean)
                  .slice(0, 10);

                return (
                  <article
                    key={p.id}
                    className="snap-start min-w-[290px] max-w-[320px] group overflow-hidden rounded-2xl border border-zinc-200 bg-white"
                  >
                    <div className="relative h-40 bg-zinc-100">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent" />
                    </div>

                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-zinc-900">
                        {p.title}
                      </h3>
                      {p.description ? (
                        <p className="mt-2 break-words text-[13px] leading-5 text-zinc-700">
                          {p.description.length > 220
                            ? `${p.description.slice(0, 220)}...`
                            : p.description}
                        </p>
                      ) : null}

                      {techTags.length ? (
                        <div className="mt-3 flex flex-wrap items-center gap-2">
                          {techTags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-zinc-200 bg-zinc-50 px-2 py-0.5 text-[11px] font-semibold text-zinc-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : null}

                      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                        {p.live ? (
                          <a
                            href={p.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 flex-1 items-center justify-center rounded-full bg-zinc-900 px-4 text-[13px] font-semibold text-white transition-colors hover:bg-zinc-800"
                          >
                            Live Demo
                          </a>
                        ) : null}

                        {p.github ? (
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-9 flex-1 items-center justify-center rounded-full border border-zinc-300 bg-white px-4 text-[13px] font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
                          >
                            Source Code
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-14">
          <SectionHeading
            title="Contact"
            subtitle="Let us build something reliable. Reach out for collaboration or job opportunities."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 bg-white p-6 lg:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-600">Email</div>
                  <a
                    href="mailto:jayeeta97.riya@gmail.com"
                    className="mt-2 block text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline"
                  >
                    jayeeta97.riya@gmail.com
                  </a>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-600">Phone</div>
                  <a
                    href="tel:+917003543629"
                    className="mt-2 block text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline"
                  >
                    +91-7003543629
                  </a>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-600">Location</div>
                  <div className="mt-2 text-sm font-semibold text-zinc-900">
                    West Bengal, India
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <div className="text-xs font-semibold text-zinc-600">LinkedIn</div>
                  <a
                    href="https://linkedin.com/in/jayeeta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline"
                  >
                    linkedin.com/in/jayeeta
                  </a>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 sm:col-span-2">
                  <div className="text-xs font-semibold text-zinc-600">GitHub</div>
                  <a
                    href="https://github.com/Jayeeta22"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 block text-sm font-semibold text-zinc-900 underline-offset-4 hover:underline"
                  >
                    github.com/Jayeeta22
                  </a>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="mailto:jayeeta97.riya@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Jayeeta,%0A%0AI'm%20reaching%20out%20about%20..."
                  className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition-colors hover:bg-zinc-800"
                >
                  Send an email
                </a>
                <a
                  href="#projects"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-zinc-300 bg-white px-6 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100"
                >
                  Revisit Projects
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-white p-6">
              <h3 className="text-base font-semibold text-zinc-900">Education</h3>
              <div className="mt-4 space-y-4 text-sm text-zinc-700">
                <div>
                  <div className="font-semibold text-zinc-900">
                    M.Sc. in Applied Mathematics
                  </div>
                  <div className="mt-1 text-zinc-600">
                    University of Kalyani - 82.19% (June 2019 - July 2021)
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-zinc-900">
                    B.Sc. in Mathematics
                  </div>
                  <div className="mt-1 text-zinc-600">
                    University of Burdwan (March 2019)
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-zinc-900">
                    Certification
                  </div>
                  <div className="mt-1 text-zinc-600">
                    MERN Stack Bootcamp - 10X Academy (2022 - 2023)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-200 bg-white/60">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-sm font-semibold text-zinc-900">
            © {year} Jayeeta Sadhukhan
          </div>
          <div className="text-sm text-zinc-600">Built with Next.js and Tailwind CSS</div>
        </div>
      </footer>
    </div>
  );
}
