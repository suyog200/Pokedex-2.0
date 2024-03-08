import Logo from "../../assets/images/logo.png";
import Input from "../Input/Input";

export default function LoginForm({ fromTitle, btnTitle }) {
  return (
    <div className="form-container">
      <div className="form-img-box">
        <img src={Logo} alt="" className="form-img" />
      </div>
      <p
        className={
          btnTitle === "Login"
            ? "form-title form-title-loginColor"
            : "form-title form-title-signupColor"
        }
      >
        {fromTitle}
      </p>
      <form action="#">
        <div className="input-box">
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Username"
            required
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required="required"
          />
        </div>
      </form>
      <p className="fgt-pass-text">Forgot password?</p>
      <button
        className={
          btnTitle === "Login"
            ? "btn-login btn-login-color"
            : "btn-login btn-signup-color"
        }
      >
        {btnTitle}
      </button>
      <p className={btnTitle === 'Login' 
      ? 'form-subText form-subText-loginColor'
      : 'form-subText form-subText-signupColor'}>
        Don't have an account?
        <span>
          <a href="#">Sign up</a>
        </span>
      </p>
    </div>
  );
}
