import { Github, Linkedin, Mail, Download, Briefcase, GraduationCap, Award, Code2 } from 'lucide-react'

export default function Portfolio() {
  const skills = {
    languages: ['Python', 'Java', 'JavaScript', 'C/C++', 'SQL', 'HTML/CSS'],
    ai: ['Machine Learning', 'RAG Systems', 'NLP', 'Prompt Engineering', 'LLM Integration'],
    tools: ['LangChain', 'FAISS', 'MongoDB', 'Dagster', 'Git', 'AWS'],
  }

  const projects = [
    {
      title: 'Agentic AI Research Assistant',
      desc: 'Built autonomous AI systems using LangChain, OpenAI APIs, FAISS, semantic search, and Retrieval-Augmented Generation pipelines.',
      stack: ['Python', 'LangChain', 'OpenAI', 'FAISS'],
    },
    {
      title: 'AI-Powered Data Engineering Pipeline',
      desc: 'Developed scalable ETL workflows using MongoDB, ClickHouse, Dagster, and Great Expectations with production-grade validations.',
      stack: ['MongoDB', 'ClickHouse', 'Dagster'],
    },
    {
      title: 'Edu-Bond Learning Platform',
      desc: 'Designed and developed a collaborative educational platform using Flutter, REST APIs, and modern backend architecture.',
      stack: ['Flutter', 'REST APIs', 'Node.js'],
    },
  ]

  return (
    <div className="min-h-screen bg-[#030712] text-white overflow-x-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.2),transparent_35%)]" />

      <nav className="sticky top-0 z-50 backdrop-blur-xl border-b border-white/10 bg-[#030712]/70">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-4xl font-bold tracking-wide">
            <span className="text-blue-500">JASWANTH</span> KAMMA
          </h1>

          <div className="hidden md:flex gap-10 text-slate-300 font-medium">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experience</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>

          <a
            href="/resume.pdf"
            download
            className="hidden md:flex items-center gap-2 border border-blue-500 px-5 py-3 rounded-xl hover:bg-blue-500 transition"
          >
            Resume <Download size={18} />
          </a>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <p className="text-blue-500 tracking-[4px] font-semibold mb-6 text-lg">
            AI/ML ENGINEER & DATA ENGINEER
          </p>

          <h1 className="text-6xl md:text-8xl font-extrabold leading-[0.95] mb-8">
            Building Intelligent Systems
            <span className="text-blue-500"> That Solve Real-World Problems.</span>
          </h1>

          <p className="text-slate-300 text-xl leading-10 max-w-3xl mb-10">
            Computer Science undergraduate specializing in Artificial Intelligence,
            Machine Learning, scalable backend engineering, RAG systems,
            semantic search architectures, and production-grade AI workflows.
          </p>

          <div className="flex flex-wrap gap-5 mb-10">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl font-semibold shadow-2xl shadow-blue-900/40"
            >
              View Projects
            </a>

            <a
              href="mailto:jaswanthkamma25@gmail.com"
              className="border border-white/20 hover:border-blue-500 transition px-8 py-4 rounded-2xl font-semibold"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-wrap gap-8 text-slate-300">
            <a
              href="https://github.com/jaswanthkamma"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Github size={20} /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jaswanth-kamma-41a0b7279/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-blue-400 transition"
            >
              <Linkedin size={20} /> LinkedIn
            </a>

            <div className="flex items-center gap-2">
              <Mail size={20} /> jaswanthkamma25@gmail.com
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-blue-500/20 blur-3xl rounded-[40px]" />

            <img
              src="/profile.jpg"
              alt="Jaswanth"
              className="relative w-[460px] h-[600px] object-cover rounded-[36px] border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-6 mb-24">
        {[
          ['10+', 'Projects Completed'],
          ['1+', 'Industry Internship'],
          ['8.5+', 'CGPA'],
          ['AI', 'Focused Engineering'],
        ].map((item) => (
          <div
            key={item[0]}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:-translate-y-2 transition"
          >
            <h3 className="text-5xl font-bold text-blue-500 mb-3">{item[0]}</h3>
            <p className="text-slate-300 text-lg">{item[1]}</p>
          </div>
        ))}
      </section>

      <section id="about" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white/5 border border-white/10 rounded-[36px] p-10 backdrop-blur-xl">
          <div className="flex items-center gap-4 mb-8">
            <Code2 className="text-blue-500" size={34} />
            <h2 className="text-4xl font-bold">About Me</h2>
          </div>

          <p className="text-slate-300 text-xl leading-10 max-w-6xl">
            I am a Computer Science undergraduate at IIIT Kottayam with strong interests in Artificial Intelligence,
            Machine Learning, Data Engineering, Cloud Computing, and scalable backend systems.
            <br /><br />
            During my internship at Mondee Tech, I worked on Agentic AI systems, Retrieval-Augmented Generation pipelines,
            semantic search architectures, vector databases, and LLM integration workflows.
            <br /><br />
            I enjoy building modern AI-powered applications that combine strong engineering practices with practical real-world impact.
          </p>
        </div>
      </section>

      <section id="skills" className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-5xl font-bold mb-12">Skills & Technologies</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:border-blue-500/30 transition">
            <h3 className="text-3xl font-semibold text-blue-400 mb-8">Languages</h3>
            <div className="space-y-5 text-slate-300 text-lg">
              {skills.languages.map((skill) => (
                <p key={skill}>• {skill}</p>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:border-blue-500/30 transition">
            <h3 className="text-3xl font-semibold text-blue-400 mb-8">AI / ML</h3>
            <div className="space-y-5 text-slate-300 text-lg">
              {skills.ai.map((skill) => (
                <p key={skill}>• {skill}</p>
              ))}
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-10 hover:border-blue-500/30 transition">
            <h3 className="text-3xl font-semibold text-blue-400 mb-8">Tools & Platforms</h3>
            <div className="space-y-5 text-slate-300 text-lg">
              {skills.tools.map((skill) => (
                <p key={skill}>• {skill}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="max-w-7xl mx-auto px-6 mb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-5xl font-bold">Featured Projects</h2>

          <a
            href="https://github.com/jaswanthkamma"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-white/20 hover:border-blue-500 transition px-6 py-3 rounded-2xl"
          >
            View GitHub
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white/5 border border-white/10 rounded-[36px] overflow-hidden hover:-translate-y-3 transition duration-300 hover:border-blue-500/30"
            >
              <div className="h-52 bg-gradient-to-br from-blue-900/40 to-slate-900" />

              <div className="p-8">
                <h3 className="text-3xl font-semibold mb-5">{project.title}</h3>

                <p className="text-slate-300 leading-8 mb-7 text-lg">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="max-w-7xl mx-auto px-6 mb-24 grid lg:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 rounded-[36px] p-10">
          <div className="flex items-center gap-4 mb-8">
            <Briefcase className="text-blue-500" size={34} />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>

          <h3 className="text-2xl font-semibold mb-3">AI & Data Engineering Intern</h3>
          <p className="text-blue-400 text-lg mb-5">Mondee Tech • Hyderabad</p>

          <p className="text-slate-300 leading-9 text-lg">
            Worked on Agentic AI applications, RAG pipelines, semantic search systems,
            vector databases, and LLM integrations using AutoGen, CrewAI, LangChain,
            Pinecone, FAISS, and modern AI engineering tools.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-[36px] p-10">
          <div className="flex items-center gap-4 mb-8">
            <GraduationCap className="text-blue-500" size={34} />
            <h2 className="text-4xl font-bold">Education</h2>
          </div>

          <h3 className="text-2xl font-semibold mb-3">B.Tech Computer Science Engineering</h3>
          <p className="text-blue-400 text-lg mb-5">IIIT Kottayam • 2022 - 2026</p>

          <p className="text-slate-300 leading-9 text-lg">
            Specializing in Artificial Intelligence, Machine Learning, Data Structures,
            Algorithms, Operating Systems, Databases, Cloud Computing, and Backend Engineering.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-white/5 border border-white/10 rounded-[36px] p-10">
          <div className="flex items-center gap-4 mb-8">
            <Award className="text-blue-500" size={34} />
            <h2 className="text-4xl font-bold">Certifications & Achievements</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 text-slate-300 text-lg">
            <div>
              <p className="mb-4">• Mathematics for Machine Learning — Imperial College London</p>
              <p className="mb-4">• Introduction to Statistics — Stanford University</p>
            </div>

            <div>
              <p className="mb-4">• Built multiple AI & ML projects with production workflows</p>
              <p className="mb-4">• Strong Linux troubleshooting and operating systems expertise</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-gradient-to-r from-blue-950/50 to-slate-900 border border-white/10 rounded-[40px] p-16 text-center">
          <h2 className="text-6xl font-bold mb-6">Let's Build Something Great</h2>

          <p className="text-slate-300 text-xl max-w-4xl mx-auto leading-10 mb-12">
            Interested in Software Development Engineer, AI Engineer,
            Machine Learning Engineer, and Data Engineering opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="mailto:jaswanthkamma25@gmail.com"
              className="bg-blue-600 hover:bg-blue-500 transition px-10 py-5 rounded-2xl font-semibold text-lg"
            >
              Email Me
            </a>

            <a
              href="https://github.com/jaswanthkamma"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-blue-500 transition px-10 py-5 rounded-2xl font-semibold text-lg"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jaswanth-kamma-41a0b7279/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-blue-500 transition px-10 py-5 rounded-2xl font-semibold text-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
