import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Naman Rai",
  description:
    "Founding Engineer at Roger (YC S24). I build AI agents, browser tools, and products from a blank page to production.",
};

const work = [
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

const also = [
  { name: "ICNA", tag: "Event website", href: "https://www.theiecna.com/" },
  { name: "PowerTab", tag: "Extension", href: "https://powertab.vercel.app/" },
  { name: "Bitnib", tag: "Website", href: "https://bitnibdesign.com/" },
  { name: "Yotta", tag: "Redesign", href: "https://yotta21.netlify.app/" },
];

export default function Page() {
  return (
    <main className={`${inter.className} corner-hue min-h-screen text-neutral-950`}>
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
        <header className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <p className="text-sm tracking-tight">Naman Rai</p>
          <a
            href="mailto:namanrai309@gmail.com"
            className="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-950 hover:underline"
          >
            namanrai309@gmail.com
          </a>
        </header>

        <section className="mt-24 sm:mt-32">
          <h1 className="max-w-xl text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
            I build products that make software more capable.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600">
            Founding Engineer at Roger (YC S24). I take products from a blank
            page to production. AI agents, browser tools, and outbound systems.
          </p>
        </section>

        <section className="mt-24">
          <h2 className="text-sm text-neutral-500">Selected work</h2>
          <ul className="mt-6">
            {work.map((item) => (
              <li
                key={item.name}
                className="border-t border-black/10 py-6 last:border-b"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                  <h3 className="text-lg font-medium tracking-tight">
                    {item.name}
                  </h3>
                  <p className="shrink-0 text-sm text-neutral-500">{item.meta}</p>
                </div>
                <p className="mt-2 max-w-xl leading-relaxed text-neutral-700">
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
          <p className="mt-8 flex flex-wrap items-center gap-y-2 text-sm text-neutral-500">
            {also.map((item, index) => (
              <span key={item.name} className="inline-flex items-center">
                {index > 0 ? (
                  <span className="mx-3 text-neutral-300">/</span>
                ) : null}
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-baseline gap-1.5 hover:text-neutral-950"
                >
                  <span className="underline-offset-4 hover:underline">
                    {item.name}
                  </span>
                  <span className="text-xs text-neutral-400">{item.tag}</span>
                </a>
              </span>
            ))}
          </p>
        </section>

        <p className="mt-24 text-sm leading-relaxed text-neutral-500">
          TypeScript · React · Next.js · Node.js · React Native · Chrome
          Extensions · AI Agents · MCP · AWS
        </p>

        <footer className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-sm">
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
