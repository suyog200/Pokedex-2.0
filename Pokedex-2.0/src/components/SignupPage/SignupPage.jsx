import LeftLogoImg from '../../assets/images/logo-left.png';
import Bulbasaur from '../../assets/images/bulbasaur.png';
import SignupForm from '../SignupForm/SignupForm';


export default function Signup() {
  return (
    <div className="main-container">
      <div className="main-left-content">
        <img src={LeftLogoImg} alt="" 
        className="left-img"/>
      <SignupForm fromTitle='Create your account' btnTitle='Sign up'/>  
      </div>
      <div className="main-right-content signup-BgColor ">
        <p>“Bulbasaur, nature's serene guardian."</p>
        <img src={Bulbasaur} alt="" 
        className="right-img"/>
      </div>
    </div>
  );
}
