import Logo from "../../assets/images/logo.png";
import Input from "../Input/Input";

export default function SignupForm({ fromTitle, btnTitle }) {
  return (
    <div className="form-container">
      <div className="form-img-box">
        <img src={Logo} alt="" className="form-img" />
      </div>
      <p
        className={
          btnTitle === "Sign up"
            ? "form-title form-title-signupColor"
            : "form-title form-title-loginColor"
        }
      >
        {fromTitle}
      </p>
      <form action="#">
        <div className="input-box">
          <Input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required="required"
          />
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            required
          />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required="required"
          />
          <Input
            type="password"
            id="confrimPassword"
            name="confrimPassword"
            placeholder="Confirm Password"
            required="required"
          />
        </div>
      </form>
      <button
        className={
          btnTitle === "Sign up"
            ? "btn-login btn-signup-color"
            : "btn-login btn-login-color"
        }
      >
        {btnTitle}
      </button>
      <p className={btnTitle === 'Sign up' 
      ? 'form-subText form-subText-signupColor'
      : 'form-subText form-subText-loginColor'}>
        Already have an account?
        <span>
          <a href="#">Login</a>
        </span>
      </p>
    </div>
  );
}
