
export default function Portfolio() {
  return (
    <div style={{
      minHeight:'100vh',
      background:'#050816',
      color:'white',
      fontFamily:'Arial',
      padding:'40px'
    }}>
      <div style={{
        maxWidth:'1200px',
        margin:'0 auto',
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-between',
        gap:'60px'
      }}>
        <div style={{flex:1,minWidth:'320px'}}>
          <p style={{
            color:'#3b82f6',
            fontWeight:'bold',
            letterSpacing:'2px'
          }}>
            AI ENGINEER & DATA ENGINEER
          </p>

          <h1 style={{
            fontSize:'64px',
            lineHeight:'1.1'
          }}>
            Building Intelligent Systems
            <span style={{color:'#3b82f6'}}> That Solve Real-World Problems.</span>
          </h1>

          <p style={{
            color:'#cbd5e1',
            fontSize:'18px',
            lineHeight:'1.8'
          }}>
            Computer Science undergraduate specializing in AI,
            Machine Learning, RAG systems, and scalable backend engineering.
          </p>

          <div style={{
            display:'flex',
            gap:'20px',
            marginTop:'40px',
            flexWrap:'wrap'
          }}>
            <a
              href="https://github.com/jaswanthkamma"
              target="_blank"
              style={{
                background:'#2563eb',
                color:'white',
                padding:'14px 28px',
                borderRadius:'14px',
                textDecoration:'none',
                fontWeight:'bold'
              }}
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/jaswanth-kamma-41a0b7279/"
              target="_blank"
              style={{
                border:'1px solid #334155',
                color:'white',
                padding:'14px 28px',
                borderRadius:'14px',
                textDecoration:'none',
                fontWeight:'bold'
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>

        <img
          src="/profile.jpg"
          alt="profile"
          style={{
            width:'420px',
            height:'520px',
            objectFit:'cover',
            borderRadius:'30px',
            border:'1px solid rgba(255,255,255,0.1)'
          }}
        />
      </div>
    </div>
  )
}
