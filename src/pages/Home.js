import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">

            {/* <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
            </li> */}

            <li className="content-list__item">
              <h2 className="title-2">Experience</h2>
              <div>
                <h8>Mobzway Technologies</h8>
                <p className="blue-text">
                  Developed and maintained high-performance backend systems using
                  Node.js and Express.js.
                  Designed and implemented RESTful APIs for frontend applications,
                  improving data efficiency.
                  Collaborated with cross-functional teams to deliver end-to-end
                  solutions.
                  Conducted code reviews, enhancing code quality and adherence to
                  standards.
                  Implemented authentication and authorization for enhanced security.
                  Optimized database queries, reducing response times by 20%.
                  Utilized Git/GitHub for version control and collaboration.
                  Created tec
                </p>
              </div>
            </li>

          </ul>
        </div>
      </main>

      <main className="section">
        <div className="container">
          <ul className="content-list">

            {/* <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</p>
            </li> */}

            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, ExpressJS, MongoDB, Redis, Socket.io, RESTful web services </p>
            </li>

          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;