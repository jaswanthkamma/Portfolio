export default function Portfolio() {
  const sections = [
    { label: 'Experience', href: '#experience' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const stats = [
    { value: '10+', label: 'Projects Built' },
    { value: '1+', label: 'Industry Internship' },
    { value: '8.5+', label: 'CGPA' },
    { value: '2+', label: 'Certifications' },
  ];

  const projects = [
    {
      title: 'Agentic AI Research Assistant',
      description:
        'Built autonomous AI workflows using LangChain, OpenAI APIs, FAISS, and Retrieval-Augmented Generation for context-aware responses.',
      stack: ['Python', 'LangChain', 'OpenAI', 'FAISS'],
    },
    {
      title: 'RAG Chatbot with Transcript Search',
      description:
        'Developed a conversational AI app that extracts, chunks, embeds, and searches content with fast semantic retrieval and better factual grounding.',
      stack: ['RAG', 'Vector DB', 'NLP', 'Python'],
    },
    {
      title: 'Data Engineering Pipeline',
      description:
        'Designed scalable data workflows using MongoDB, ClickHouse, Dagster, and Great Expectations with validation and orchestration.',
      stack: ['MongoDB', 'ClickHouse', 'Dagster', 'GE'],
    },
  ];

  const skills = {
    languages: ['Python', 'Java', 'JavaScript', 'C / C++', 'SQL', 'HTML / CSS'],
    ai: ['Machine Learning', 'Deep Learning', 'NLP', 'RAG & LLM Integration', 'Prompt Engineering', 'Model Evaluation'],
    tools: ['LangChain', 'FAISS', 'Pinecone', 'AutoGen', 'CrewAI', 'Git & GitHub', 'MongoDB', 'Dagster'],
  };

  const edu = [
    {
      title: 'B.Tech in Computer Science and Engineering',
      place: 'IIIT Kottayam',
      time: '2022 – 2026',
      note: 'Relevant focus: AI, ML, Data Structures, Algorithms, OS, DBMS, Networks, and Web Development.',
    },
  ];

  const certs = [
    'Introduction to Statistics — Stanford University',
    'Mathematics for Machine Learning — Imperial College London',
  ];

  const itemStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(148,163,184,0.18)',
    borderRadius: '28px',
    backdropFilter: 'blur(14px)',
    boxShadow: '0 20px 60px rgba(0,0,0,0.22)',
  };

  const chipStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 14px',
    borderRadius: '999px',
    background: 'rgba(59,130,246,0.10)',
    border: '1px solid rgba(59,130,246,0.18)',
    color: '#bfdbfe',
    fontSize: '14px',
    marginRight: '10px',
    marginBottom: '10px',
  };

  return (
    <div style={{ minHeight: '100vh', background: '#050816', color: 'white', overflowX: 'hidden' }}>
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', background: 'radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 35%)' }} />

      <header style={{ position: 'sticky', top: 0, zIndex: 20, backdropFilter: 'blur(18px)', background: 'rgba(5,8,22,0.72)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '18px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
          <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: '0.03em' }}>
            <span style={{ color: '#3b82f6' }}>JASWANTH</span> KAMMA
          </div>

          <nav style={{ display: 'flex', gap: 26, flexWrap: 'wrap', justifyContent: 'center', color: '#cbd5e1', fontSize: 15 }}>
            {sections.map((s) => (
              <a key={s.href} href={s.href} style={{ textDecoration: 'none', color: 'inherit' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')} onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}>
                {s.label}
              </a>
            ))}
          </nav>

          <a
            href="/resume.pdf"
            download
            style={{
              textDecoration: 'none',
              color: 'white',
              border: '1px solid rgba(59,130,246,0.55)',
              background: 'rgba(37,99,235,0.12)',
              padding: '12px 18px',
              borderRadius: '14px',
              fontWeight: 700,
              whiteSpace: 'nowrap',
            }}
          >
            Resume ⤓
          </a>
        </div>
      </header>

      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '72px 40px 40px' }}>
        <section style={{ display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 54, alignItems: 'center' }}>
          <div>
            <div style={{ color: '#3b82f6', fontWeight: 700, letterSpacing: '0.34em', fontSize: 15, marginBottom: 18 }}>
              AI/ML ENGINEER & DATA ENTHUSIAST
            </div>

            <h1 style={{ fontSize: 'clamp(3.2rem, 6vw, 6.4rem)', lineHeight: 0.96, margin: 0, fontWeight: 900, maxWidth: 900 }}>
              Building Intelligent Systems
              <span style={{ color: '#3b82f6' }}> That Solve Real-World Problems.</span>
            </h1>

            <p style={{ marginTop: 26, maxWidth: 820, fontSize: 'clamp(1.05rem, 1.4vw, 1.35rem)', lineHeight: 1.9, color: '#d6dde8' }}>
              Computer Science undergraduate specializing in Artificial Intelligence, Machine Learning, and scalable backend engineering.
              I build production-minded applications, RAG systems, data pipelines, and clean interfaces that are practical and easy to maintain.
            </p>

            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginTop: 34 }}>
              <a href="#projects" style={{ textDecoration: 'none', color: 'white', background: 'linear-gradient(135deg, #2563eb, #3b82f6)', padding: '14px 22px', borderRadius: 16, fontWeight: 800, boxShadow: '0 18px 40px rgba(37,99,235,0.24)' }}>
                View Projects
              </a>
              <a href="#contact" style={{ textDecoration: 'none', color: 'white', border: '1px solid rgba(255,255,255,0.16)', padding: '14px 22px', borderRadius: 16, fontWeight: 700 }}>
                Contact Me
              </a>
            </div>

            <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', marginTop: 28, color: '#dbe4f2' }}>
              <a href="https://github.com/jaswanthkamma" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub</a>
              <a href="https://www.linkedin.com/in/jaswanth-kamma-41a0b7279/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
              <a href="mailto:jaswanthkamma25@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>jaswanthkamma25@gmail.com</a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ position: 'relative', width: 'min(100%, 500px)' }}>
              <div style={{ position: 'absolute', inset: '-18px', borderRadius: '34px', background: 'rgba(59,130,246,0.18)', filter: 'blur(60px)' }} />
              <img
                src="/profile.jpg"
                alt="Jaswanth Kamma"
                style={{
                  position: 'relative',
                  width: '100%',
                  maxHeight: 620,
                  objectFit: 'cover',
                  borderRadius: 34,
                  border: '1px solid rgba(255,255,255,0.10)',
                  boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
                }}
              />
            </div>
          </div>
        </section>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, marginTop: 46 }}>
          {stats.map((s) => (
            <div key={s.label} style={{ ...itemStyle, padding: '24px 22px', textAlign: 'center' }}>
              <div style={{ color: '#3b82f6', fontSize: 34, fontWeight: 900 }}>{s.value}</div>
              <div style={{ marginTop: 6, color: '#cbd5e1' }}>{s.label}</div>
            </div>
          ))}
        </section>

        <section id="about" style={{ ...itemStyle, marginTop: 26, padding: 34 }}>
          <h2 style={{ fontSize: 34, margin: 0, marginBottom: 16 }}>About Me</h2>
          <p style={{ color: '#d6dde8', lineHeight: 1.95, fontSize: 18, margin: 0 }}>
            I am a Computer Science undergraduate at IIIT Kottayam with a strong interest in AI, data engineering, and software systems.
            My work spans Agentic AI, Retrieval-Augmented Generation, semantic search, NLP, backend APIs, and scalable data pipelines.
            I like building polished products that are useful, understandable, and ready for real-world use.
          </p>
        </section>

        <section id="skills" style={{ marginTop: 34 }}>
          <h2 style={{ fontSize: 34, marginBottom: 18 }}>Skills & Technologies</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            <div style={{ ...itemStyle, padding: 30 }}>
              <h3 style={{ marginTop: 0, fontSize: 24, color: '#60a5fa' }}>Languages</h3>
              <div>{skills.languages.map((skill) => <span key={skill} style={chipStyle}>{skill}</span>)}</div>
            </div>
            <div style={{ ...itemStyle, padding: 30 }}>
              <h3 style={{ marginTop: 0, fontSize: 24, color: '#60a5fa' }}>AI / ML</h3>
              <div>{skills.ai.map((skill) => <span key={skill} style={chipStyle}>{skill}</span>)}</div>
            </div>
            <div style={{ ...itemStyle, padding: 30 }}>
              <h3 style={{ marginTop: 0, fontSize: 24, color: '#60a5fa' }}>Tools & Platforms</h3>
              <div>{skills.tools.map((skill) => <span key={skill} style={chipStyle}>{skill}</span>)}</div>
            </div>
          </div>
        </section>

        <section id="projects" style={{ marginTop: 38 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 18, marginBottom: 18 }}>
            <h2 style={{ fontSize: 34, margin: 0 }}>Featured Projects</h2>
            <a href="https://github.com/jaswanthkamma" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', border: '1px solid rgba(255,255,255,0.16)', padding: '11px 16px', borderRadius: 14 }}>
              View GitHub
            </a>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {projects.map((project) => (
              <article key={project.title} style={{ ...itemStyle, overflow: 'hidden' }}>
                <div style={{ height: 180, background: 'linear-gradient(135deg, rgba(37,99,235,0.32), rgba(15,23,42,0.92))' }} />
                <div style={{ padding: 24 }}>
                  <h3 style={{ margin: 0, fontSize: 24, marginBottom: 12 }}>{project.title}</h3>
                  <p style={{ margin: 0, color: '#d6dde8', lineHeight: 1.85, fontSize: 16 }}>{project.description}</p>
                  <div style={{ marginTop: 18 }}>{project.stack.map((tech) => <span key={tech} style={chipStyle}>{tech}</span>)}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" style={{ marginTop: 38, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <div style={{ ...itemStyle, padding: 30 }}>
            <h2 style={{ marginTop: 0, fontSize: 30 }}>Experience</h2>
            <h3 style={{ marginBottom: 6, fontSize: 22 }}>AI & Data Engineering Intern</h3>
            <div style={{ color: '#60a5fa', marginBottom: 12 }}>Mondee Tech • Hyderabad</div>
            <p style={{ color: '#d6dde8', lineHeight: 1.9, fontSize: 17, margin: 0 }}>
              Worked on Agentic AI applications, RAG pipelines, vector databases, and LLM integration workflows using AutoGen, CrewAI, LangChain, Pinecone, and FAISS.
            </p>
          </div>

          <div id="education" style={{ ...itemStyle, padding: 30 }}>
            <h2 style={{ marginTop: 0, fontSize: 30 }}>Education</h2>
            {edu.map((e) => (
              <div key={e.title}>
                <h3 style={{ marginBottom: 6, fontSize: 22 }}>{e.title}</h3>
                <div style={{ color: '#60a5fa', marginBottom: 10 }}>{e.place} • {e.time}</div>
                <p style={{ color: '#d6dde8', lineHeight: 1.9, fontSize: 17, margin: 0 }}>{e.note}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
          <div style={{ ...itemStyle, padding: 30 }}>
            <h2 style={{ marginTop: 0, fontSize: 30 }}>Certifications</h2>
            <ul style={{ paddingLeft: 20, margin: 0, color: '#d6dde8', lineHeight: 2 }}>
              {certs.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>

          <div style={{ ...itemStyle, padding: 30 }}>
            <h2 style={{ marginTop: 0, fontSize: 30 }}>What I Like Building</h2>
            <p style={{ color: '#d6dde8', lineHeight: 1.9, fontSize: 17, margin: 0 }}>
              AI assistants, retrieval systems, data pipelines, automation tools, and clean user interfaces that feel smooth, fast, and useful.
            </p>
          </div>
        </section>

        <section id="contact" style={{ marginTop: 38, ...itemStyle, padding: 40, textAlign: 'center', marginBottom: 30 }}>
          <h2 style={{ fontSize: 42, margin: 0, marginBottom: 16 }}>Let’s Build Something Great</h2>
          <p style={{ color: '#d6dde8', lineHeight: 1.9, fontSize: 18, maxWidth: 900, margin: '0 auto 22px' }}>
            Open to Software Development Engineer, AI Engineer, Machine Learning Engineer, and Data Engineering opportunities.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
            <a href="mailto:jaswanthkamma25@gmail.com" style={{ textDecoration: 'none', color: 'white', background: 'linear-gradient(135deg, #2563eb, #3b82f6)', padding: '14px 22px', borderRadius: 16, fontWeight: 800 }}>
              Email Me
            </a>
            <a href="https://github.com/jaswanthkamma" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', border: '1px solid rgba(255,255,255,0.16)', padding: '14px 22px', borderRadius: 16, fontWeight: 700 }}>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/jaswanth-kamma-41a0b7279/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', border: '1px solid rgba(255,255,255,0.16)', padding: '14px 22px', borderRadius: 16, fontWeight: 700 }}>
              LinkedIn
            </a>
            <a href="/resume.pdf" download style={{ textDecoration: 'none', color: 'white', border: '1px solid rgba(59,130,246,0.55)', background: 'rgba(37,99,235,0.12)', padding: '14px 22px', borderRadius: 16, fontWeight: 800 }}>
              Download Resume
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
