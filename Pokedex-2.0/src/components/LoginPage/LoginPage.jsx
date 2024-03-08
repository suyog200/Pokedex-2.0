import CharmanderImg from '../../assets/images/charmander.png';
import LeftLogoImg from '../../assets/images/logo-left.png';
import LoginForm from '../LoginFrom/LoginForm';


export default function Login() {
    return (
        <div className='main-container'>
            <div className='main-left-content'>
                <img src={LeftLogoImg} alt="" className='left-img'/>
            <LoginForm fromTitle='Login' btnTitle='Login'/>      
            </div>
            <div className='main-right-content login-BgColor'>
                <p>“Charmander, a flame of courage in the dark.”</p>
                   <img src={CharmanderImg} alt="" className='right-img'/>
            </div>
        </div>
    )
}