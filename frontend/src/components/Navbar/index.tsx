import { ReactComponent as GithubIcon } from "../../assets/img/github.svg";
import "./index.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DSMovie</h1>
          <a
            href="https://github.com/savio-2-lopes/DSMovie-Semana-Spring-React"
            target="_blank"
            rel="noreferrer"
          >
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/savio-2-lopes</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
