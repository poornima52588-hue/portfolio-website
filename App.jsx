import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  BarChart3,
  Brain,
  LineChart,
  Database,
  Code2,
  LayoutDashboard,
} from "lucide-react";

const projects = [
  {
    title: "Predictive Data Analysis Project",
    subtitle: "Machine Learning & Deep Learning",
    description:
      "A predictive analytics project using air quality, weather, traffic, and respiratory data to compare machine learning and deep learning models for respiratory trend prediction.",
    tools: ["Python", "R", "Random Forest", "MLP", "Transformer", "Time Series", "EDA", "PCA"],
    highlights: [
      "Integrated environmental, weather, traffic, and respiratory datasets",
      "Compared machine learning and deep learning model performance",
      "Used RMSE, MAE, and R² to evaluate prediction accuracy",
    ],
    icon: Brain,
    link: "https://github.com/poornima52588-hue/PDA",
  },
  {
    title: "GDP Dashboard Project",
    subtitle: "Tableau & Power BI Dashboard",
    description:
      "An interactive GDP dashboard project built with Tableau and Power BI to analyse GDP per capita trends, country comparisons, and economic development patterns.",
    tools: ["Tableau", "Power BI", "Python", "Pandas", "Dashboard Design", "Data Visualisation"],
    highlights: [
      "Created interactive dashboards for GDP per capita analysis",
      "Compared country-wise and economic development trends",
      "Uploaded Tableau, Power BI, dataset, and Python preparation files",
    ],
    icon: LayoutDashboard,
    link: "https://github.com/poornima52588-hue/Tableau-Power-BI-dashboard",
  },
];

const skills = [
  { label: "Machine Learning", icon: Brain },
  { label: "Deep Learning", icon: Code2 },
  { label: "Data Visualisation", icon: BarChart3 },
  { label: "Business Intelligence", icon: LayoutDashboard },
  { label: "Python & R", icon: Code2 },
  { label: "Tableau & Power BI", icon: LineChart },
  { label: "Data Cleaning", icon: Database },
  { label: "Predictive Analytics", icon: LineChart },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute top-72 -left-40 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="#home" className="text-lg font-semibold tracking-tight">
          Poornima Kulkarni
        </a>
        <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a
          href="https://github.com/poornima52588-hue"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-lg shadow-black/20 transition hover:bg-white/10"
        >
          <Github className="h-4 w-4" /> GitHub
        </a>
      </header>

      <main className="relative z-10">
        <section id="home" className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-12 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-24 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-200">
              AI Master's Student • Business Analytics • Data Visualisation
            </p>
            <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">
              Data analytics portfolio focused on predictive modelling and dashboards.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              I create data projects that combine machine learning, deep learning, business intelligence, and clear visual storytelling. This portfolio highlights my work in predictive data analysis, Tableau, Power BI, Python, and R.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-300"
              >
                View Projects
              </a>
              <a
                href="https://github.com/poornima52588-hue"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Visit GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur"
          >
            <div className="rounded-[1.5rem] bg-slate-900/80 p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Portfolio Focus</p>
                  <h2 className="text-2xl font-bold text-white">Analytics + BI</h2>
                </div>
                <BarChart3 className="h-10 w-10 text-cyan-300" />
              </div>
              <div className="space-y-4">
                {[
                  ["Predictive Modelling", "Machine learning and deep learning models"],
                  ["Dashboard Design", "Tableau and Power BI storytelling"],
                  ["Data Preparation", "Python, R, cleaning, EDA, and feature engineering"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Projects</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Featured Work</h2>
            <p className="mt-4 max-w-2xl text-slate-300">
              These projects show my ability to work with data from preparation to analysis, modelling, dashboard design, and final presentation.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="rounded-2xl bg-cyan-400/10 p-4 text-cyan-300">
                      <Icon className="h-7 w-7" />
                    </div>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                    >
                      View Repo <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="text-sm font-medium text-cyan-200">{project.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span key={tool} className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    {project.highlights.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Skills</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Technical Strengths</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div key={skill.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:bg-white/10">
                  <Icon className="mb-4 h-7 w-7 text-cyan-300" />
                  <p className="font-semibold text-white">{skill.label}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-16 pb-24">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 text-center shadow-2xl shadow-black/20 backdrop-blur md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">Let's connect</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300">
              I am interested in data analytics, business intelligence, machine learning, deep learning, and cloud-focused roles where data can support better business decisions.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:poornima52588@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href="https://github.com/poornima52588-hue"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/poornima52588"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
