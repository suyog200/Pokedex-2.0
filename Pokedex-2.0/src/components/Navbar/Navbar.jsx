import './Navbar.css';
import HomeLogo from '../../assets/images/pokemon-logo.png';

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={HomeLogo} alt="logo" className='home-logo'/>
      </div>
      <div className="navbar-right">
        <div className="navbar-links">
          <a href="#" className='navbar-link'>Home</a>
          <a href="#" className='navbar-link'>Pokedex</a>
          <a href="#" className='navbar-link'>Community</a>
          <a href="#" className='navbar-link'>Contact</a>
        </div>
        <button className="btn-logout">Logout</button>
      </div>
    </div>
  );
}
