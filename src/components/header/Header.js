import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">

        <h1 className="header__title">
          <strong>Hi, my name is <em>Shubham</em></strong><br />
          a Backend Node.js developer
        </h1>

        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>

        <a download href="./shubham saini.pdf" className="btn">Download Resume</a>

      </div>
    </header>
  );
}

export default Header;