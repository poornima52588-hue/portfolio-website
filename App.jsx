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
  LayoutDashboard,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    title: "Predictive Data Analysis for Respiratory Trend Prediction",
    subtitle: "Machine Learning • Deep Learning • Time Series",
    description:
      "Built a predictive analytics workflow using air quality, weather, traffic, and respiratory data to compare traditional machine learning and deep learning models for weekly respiratory trend prediction.",
    tools: ["Python", "R", "Random Forest", "MLP", "Transformer", "PCA", "EDA"],
    impact:
      "Compared model performance using RMSE, MAE, and R² to support evidence-based model selection.",
    highlights: [
      "Prepared and integrated multi-source environmental and mobility datasets",
      "Applied exploratory analysis, feature engineering, PCA, and model evaluation",
      "Compared machine learning and deep learning approaches for predictive accuracy",
    ],
    icon: Brain,
    link: "https://github.com/poornima52588-hue/PDA",
  },
  {
    title: "GDP Analytics Dashboard",
    subtitle: "Tableau • Power BI • Business Intelligence",
    description:
      "Designed an interactive GDP dashboard using Tableau and Power BI to analyse GDP per capita trends, compare countries, and communicate economic development patterns clearly.",
    tools: ["Tableau", "Power BI", "Python", "Pandas", "Dashboard Design", "BI Reporting"],
    impact:
      "Turned economic data into clear visual insights for country comparison and trend interpretation.",
    highlights: [
      "Created Tableau and Power BI dashboard versions for portfolio presentation",
      "Included dataset and Python preparation file for reproducibility",
      "Used visual storytelling to make GDP trends easier to understand",
    ],
    icon: LayoutDashboard,
    link: "https://github.com/poornima52588-hue/Tableau-Power-BI-dashboard",
  },
];

const skills = [
  "Python",
  "R",
  "Pandas",
  "Scikit-learn",
  "Machine Learning",
  "Deep Learning",
  "Tableau",
  "Power BI",
  "Data Cleaning",
  "EDA",
  "PCA",
  "Dashboard Design",
  "Business Analytics",
  "Model Evaluation",
  "Data Storytelling",
];

const strengths = [
  {
    title: "Analytics Mindset",
    text: "I turn raw data into clear insights by combining cleaning, modelling, visualisation, and interpretation.",
    icon: TrendingUp,
  },
  {
    title: "Business Communication",
    text: "I focus on presenting results in a way that is easy for non-technical stakeholders to understand.",
    icon: BarChart3,
  },
  {
    title: "Technical Learning",
    text: "I am actively developing skills across ML, deep learning, business intelligence, and cloud-focused analytics.",
    icon: Sparkles,
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-48 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-[28rem] w-[28rem] rounded-full bg-blue-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[26rem] w-[26rem] rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight text-white">
            Poornima Kulkarni
          </a>
          <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#projects" className="hover:text-cyan-300">Projects</a>
            <a href="#skills" className="hover:text-cyan-300">Skills</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
          </nav>
          <a
            href="mailto:poornima52588@gmail.com"
            className="rounded-full bg-cyan-300 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-400/20 transition hover:bg-cyan-200"
          >
            Hire / Contact
          </a>
        </div>
      </header>

      <main>
        <section id="home" className="mx-auto grid min-h-[86vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
              <Sparkles className="h-4 w-4" /> Data Analytics • BI Dashboards • ML Projects
            </div>
            <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight text-white md:text-7xl">
              Turning data into decisions through analytics, dashboards and predictive models.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              I am an AI Master’s student with a Business Analytics background. My portfolio demonstrates practical work in predictive data analysis, Tableau, Power BI, Python, R, machine learning, and data storytelling.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                View My Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="https://github.com/poornima52588-hue"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub Portfolio
              </a>
              <a
                href="https://www.linkedin.com/in/poornima52588"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Portfolio Snapshot</p>
                    <h2 className="text-3xl font-bold text-white">Data + Business Impact</h2>
                  </div>
                  <LineChart className="h-11 w-11 text-cyan-300" />
                </div>
                <div className="grid gap-4">
                  {[
                    ["2", "Featured Projects", "PDA modelling and GDP dashboard portfolio"],
                    ["15+", "Technical Skills", "Python, R, Tableau, Power BI, ML, DL"],
                    ["End-to-end", "Project Workflow", "Data preparation to final visual presentation"],
                  ].map(([num, title, text]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                      <p className="text-3xl font-extrabold text-cyan-300">{num}</p>
                      <h3 className="mt-1 font-semibold text-white">{title}</h3>
                      <p className="mt-1 text-sm text-slate-400">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">About Me</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
                A data-focused profile with business understanding.
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-300">
              <p>
                I enjoy working on projects where data is used to solve practical problems. My strengths are in cleaning data, exploring patterns, building models, and presenting insights through dashboards and clear explanations.
              </p>
              <p>
                I am building my career toward roles in data analytics, business intelligence, machine learning, and cloud-focused analytics. My goal is to help organisations make better decisions using reliable, understandable, and visually clear data solutions.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                {strengths.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.05] p-5">
                      <Icon className="mb-4 h-7 w-7 text-cyan-300" />
                      <h3 className="font-bold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">Selected Projects</p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
              Work that shows technical skills and business presentation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Each project includes a clear problem, tools used, technical process, and final output that can be reviewed by employers.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/20 backdrop-blur-xl"
                >
                  <div className="h-2 bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400" />
                  <div className="p-7">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div className="rounded-2xl bg-cyan-300/10 p-4 text-cyan-300 ring-1 ring-cyan-300/20">
                        <Icon className="h-8 w-8" />
                      </div>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:bg-white/10"
                      >
                        View Repository <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>

                    <p className="text-sm font-semibold text-cyan-200">{project.subtitle}</p>
                    <h3 className="mt-2 text-2xl font-extrabold leading-tight text-white">{project.title}</h3>
                    <p className="mt-4 leading-7 text-slate-300">{project.description}</p>

                    <div className="mt-5 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                      <p className="text-sm font-semibold text-cyan-100">Project Value</p>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{project.impact}</p>
                    </div>

                    <ul className="mt-6 space-y-3 text-sm text-slate-300">
                      {project.highlights.map((item) => (
                        <li key={item} className="flex gap-3">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-cyan-300" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-200">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-300">Skills</p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">Tools and capabilities</h2>
            </div>
            <p className="max-w-xl text-slate-300">
              A combination of technical analytics, dashboard design, and business communication skills.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span key={skill} className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-slate-100">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 pb-28">
          <div className="overflow-hidden rounded-[2.25rem] border border-white/10 bg-gradient-to-br from-cyan-300/15 via-white/[0.06] to-purple-500/15 p-8 text-center shadow-2xl shadow-black/30 md:p-14">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-cyan-200">Open to opportunities</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-5xl">
              Looking for data, BI, analytics, or cloud-focused opportunities.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              I would be happy to connect about roles where I can apply data analysis, dashboarding, machine learning, and business insight skills.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:poornima52588@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-300 px-6 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-cyan-400/20 transition hover:bg-cyan-200"
              >
                <Mail className="h-4 w-4" /> Email Me
              </a>
              <a
                href="https://github.com/poornima52588-hue"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/poornima52588"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
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
