export default function Portfolio() {
  const projects = [
    {
      title: 'Agentic AI & RAG Systems',
      description:
        'Built intelligent conversational AI systems using LangChain, OpenAI APIs, FAISS, vector databases, and semantic retrieval pipelines for accurate context-aware responses.',
      stack: ['Python', 'LangChain', 'FAISS', 'OpenAI'],
    },
    {
      title: 'Data Engineering Pipeline',
      description:
        'Developed scalable ETL workflows using MongoDB, ClickHouse, Dagster, and Great Expectations with automated validation and orchestration.',
      stack: ['MongoDB', 'ClickHouse', 'Dagster', 'Python'],
    },
    {
      title: 'Edu-bond Platform',
      description:
        'Designed and developed a collaborative educational platform with Flutter, REST APIs, modular backend architecture, and responsive UI design.',
      stack: ['Flutter', 'Node.js', 'REST APIs'],
    },
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #020617, #050816)',
        color: 'white',
        fontFamily: 'Inter, Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: '40px 80px',
        }}
      >
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '90px',
          }}
        >
          <h2
            style={{
              fontSize: '30px',
              fontWeight: '800',
              letterSpacing: '1px',
            }}
          >
            JASWANTH KAMMA
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '40px',
              color: '#cbd5e1',
              fontSize: '16px',
            }}
          >
            <span>About</span>
            <span>Projects</span>
            <span>Skills</span>
            <span>Contact</span>
          </div>
        </nav>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: '80px',
            alignItems: 'center',
          }}
        >
          <div>
            <p
              style={{
                color: '#3b82f6',
                fontWeight: '700',
                letterSpacing: '3px',
                fontSize: '18px',
              }}
            >
              AI ENGINEER & DATA ENGINEER
            </p>

            <h1
              style={{
                fontSize: '88px',
                lineHeight: '0.95',
                fontWeight: '800',
                marginTop: '30px',
                marginBottom: '35px',
                maxWidth: '900px',
              }}
            >
              Building Intelligent Systems
              <span style={{ color: '#3b82f6' }}>
                {' '}That Solve Real-World Problems.
              </span>
            </h1>

            <p
              style={{
                color: '#cbd5e1',
                fontSize: '22px',
                lineHeight: '1.9',
                maxWidth: '720px',
              }}
            >
              Computer Science undergraduate specializing in Artificial Intelligence,
              Machine Learning, scalable backend engineering, RAG systems,
              semantic search, and production-grade AI workflows.
            </p>

            <div
              style={{
                display: 'flex',
                gap: '22px',
                marginTop: '50px',
              }}
            >
              <a
                href="https://github.com/jaswanthkamma"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#2563eb',
                  color: 'white',
                  padding: '16px 34px',
                  borderRadius: '18px',
                  textDecoration: 'none',
                  fontWeight: '700',
                }}
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/jaswanth-kamma-41a0b7279/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  border: '1px solid rgba(255,255,255,0.18)',
                  color: 'white',
                  padding: '16px 34px',
                  borderRadius: '18px',
                  textDecoration: 'none',
                  fontWeight: '700',
                }}
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                inset: '-20px',
                background: 'rgba(37,99,235,0.2)',
                filter: 'blur(70px)',
                borderRadius: '40px',
              }}
            />

            <img
              src="/profile.jpg"
              alt="Jaswanth"
              style={{
                position: 'relative',
                width: '470px',
                height: '600px',
                objectFit: 'cover',
                borderRadius: '36px',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 30px 80px rgba(0,0,0,0.45)',
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            marginTop: '100px',
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '32px',
                padding: '36px',
              }}
            >
              <h3
                style={{
                  fontSize: '28px',
                  marginBottom: '20px',
                }}
              >
                {project.title}
              </h3>

              <p
                style={{
                  color: '#cbd5e1',
                  lineHeight: '1.8',
                  marginBottom: '24px',
                }}
              >
                {project.description}
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '12px',
                }}
              >
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '10px 16px',
                      borderRadius: '999px',
                      background: 'rgba(37,99,235,0.12)',
                      color: '#60a5fa',
                      fontSize: '14px',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
