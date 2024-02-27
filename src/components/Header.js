const Header = ({ scrollToSection }) => {
    return (
      <div className="Header">
        <div className="headMenu">
          <p onClick={() => scrollToSection('aboutme')}><span>01 </span>About Me</p>
          <p onClick={() => scrollToSection('charts')}><span>02 </span>Study Coding</p>
          <p onClick={() => scrollToSection('personal')}><span>03 </span>Personal Project</p>
          <p onClick={() => scrollToSection('team')}><span>04 </span>Team Project</p>
          <p onClick={() => scrollToSection('contact')}><span>05 </span>Contact</p>
        </div>
      </div>
    );
  };
  
  export default Header;
  