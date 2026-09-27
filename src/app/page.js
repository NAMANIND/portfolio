import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naman Rai",
  description:
    "Founding Engineer at Roger (YC S24). I build AI agents, browser tools, and products from a blank page to production.",
};

const jobs = [
  {
    name: "Roger",
    meta: "Founding Engineer · YC S24 · 2025 – Present",
    detail:
      "I owned LinkedIn outbound end to end. LinkedIn and email, from architecture through production. Campaigns, scheduling, deliverability. That channel drives 80% of positive responses. The extension is live for 2,000+ users.",
  },
  {
    name: "TravelArrow",
    meta: "Software Engineer · 2024 – 2025",
    detail:
      "Launched car rental for 10,000+ daily users. Migrated 25,000+ users and raised conversion to 33%.",
  },
];

const projects = [
  {
    name: "Beacon",
    meta: "Building now",
    detail:
      "MCP tools that let agents observe, click, and run in the Chrome you're already logged into.",
    href: "https://www.trybeacon.space/",
    label: "Site",
  },
  {
    name: "Forcom",
    meta: "Full stack",
    detail:
      "Workforce platform for communication, training, safety, and payroll. Built end to end, from architecture through production.",
    href: "http://forcom.app/",
    label: "Site",
  },
  {
    name: "ASSENT Connect Plus",
    meta: "iOS and Android",
    detail:
      "Internal communication for a steel workforce. 1,500+ people a day.",
    links: [
      {
        href: "https://apps.apple.com/app/assent-connect-plus/id6478013818",
        label: "App Store",
      },
      {
        href: "https://play.google.com/store/apps/details?id=com.assent.connectplus",
        label: "Play Store",
      },
    ],
  },
];

function EntryList({ items }) {
  return (
    <ul className="mt-5 space-y-10 sm:mt-6 sm:space-y-12">
      {items.map((item) => (
        <li key={item.name}>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <h3 className="text-base font-medium tracking-tight sm:text-lg">
              {item.name}
            </h3>
            <p className="text-xs leading-snug text-neutral-500 sm:shrink-0 sm:text-sm sm:leading-normal">
              {item.meta}
            </p>
          </div>
          <p className="mt-2 max-w-xl text-[0.9375rem] leading-relaxed text-neutral-700 sm:text-base">
            {item.detail}
          </p>
          {item.href ? (
            <a
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-sm underline underline-offset-4"
            >
              {item.label}
            </a>
          ) : null}
          {item.links ? (
            <p className="mt-3 flex gap-4 text-sm">
              {item.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4"
                >
                  {link.label}
                </a>
              ))}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  );
}

const also = [
  { name: "ICNA", tag: "Event website", href: "https://www.theiecna.com/" },
  { name: "PowerTab", tag: "Extension", href: "https://powertab.vercel.app/" },
  { name: "Bitnib", tag: "Website", href: "https://bitnibdesign.com/" },
  { name: "Yotta", tag: "Redesign", href: "https://yotta21.netlify.app/" },
];

export default function Page() {
  return (
    <main
      className={`${inter.className} corner-hue min-h-screen overflow-x-hidden text-neutral-950`}
    >
      <div className="mx-auto w-full max-w-3xl px-5 py-12 sm:px-6 sm:py-24">
        <header className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
          <p className="text-sm tracking-tight">Naman Rai</p>
          <a
            href="mailto:namanrai309@gmail.com"
            className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-950 hover:underline sm:text-right"
          >
            namanrai309@gmail.com
          </a>
        </header>

        <section className="mt-14 sm:mt-32">
          <h1 className="max-w-xl text-balance text-[1.75rem] font-medium leading-[1.15] tracking-tight sm:text-4xl sm:leading-tight lg:text-5xl">
            I build products that make software more capable.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 sm:mt-6 sm:text-lg">
            Founding Engineer at Roger (YC S24). I take products from a blank
            page to production. AI agents, browser tools, and outbound systems.
          </p>
        </section>

        <section className="mt-14 sm:mt-24">
          <h2 className="text-sm text-neutral-500">Work</h2>
          <EntryList items={jobs} />
        </section>

        <section className="mt-16 sm:mt-20">
          <h2 className="text-sm text-neutral-500">Projects</h2>
          <EntryList items={projects} />
          <p className="mt-6 text-sm text-neutral-500 sm:mt-8">More</p>
          <ul className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-y-2">
            {also.map((item, index) => (
              <li key={item.name} className="flex items-baseline sm:inline-flex">
                {index > 0 ? (
                  <span className="mx-3 hidden text-neutral-300 sm:inline">/</span>
                ) : null}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 text-sm text-neutral-500 hover:text-neutral-950"
                >
                  <span className="underline-offset-4 hover:underline">
                    {item.name}
                  </span>
                  <span className="text-xs text-neutral-400">{item.tag}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-14 text-xs leading-relaxed text-neutral-500 sm:mt-24 sm:text-sm">
          TypeScript · React · Next.js · Node.js · React Native · Chrome
          Extensions · AI Agents · MCP · AWS
        </p>

        <footer className="mt-10 flex flex-wrap gap-x-5 gap-y-3 pb-8 text-sm sm:mt-12 sm:pb-0">
          <a
            href="mailto:namanrai309@gmail.com"
            className="underline underline-offset-4"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/namannrai"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/NAMANIND"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://x.com/Naman_rai_"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4"
          >
            X
          </a>
          <a
            href="/archive"
            className="text-neutral-500 underline underline-offset-4"
          >
            Earlier site
          </a>
        </footer>
      </div>
    </main>
  );
}
