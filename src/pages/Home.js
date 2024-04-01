import Header from "./../components/header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import "./components.css"
const Home = () => {
  // const textStyle = {
  //   border: '2px solid #008000', // You can adjust the width and color of the border
  //   padding: '10px', // Adjust the padding inside the border
  //   width: '500px',
  //   height: '300px'
  // };

  const textcontainer = {
    width: "300px",  /* Set the width of the text container */
    height: "200px",  /* Set the height of the text container */
    border: "1px solid #000",  /* Optional: Add a border for visualization */
    padding: "10px" /* Optional: Add padding for spacing */
    /* Other styles */
  };
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
              <Carousel fade>
                <Carousel.Item interval={1000}>
                  <p>
                    <div className={textcontainer}>
                      <h2>Mobzway Technologies</h2>
                      I have 1 year 8 months Experience.<br />
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
                    </div>
                  </p>
                </Carousel.Item>
                {/* <Carousel.Item interval={1000}>
                  <div>sec IMage</div>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <div>th IMage</div>
                </Carousel.Item> */}
              </Carousel>
            </li>

          </ul>
        </div>
      </main>

      <main className="section backend">
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