import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <img className="logo-app" src={logo} alt="logo" />
      <h2>my travel journal.</h2>
    </header>
  );
}

export default Header;
