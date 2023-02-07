import logo from "../assets/logo.svg";

function Header() {
  return (
    <header>
      <img className="logo-app" src={logo} alt="logo" />
      <h1>my travel journal.</h1>
    </header>
  );
}

export default Header;
