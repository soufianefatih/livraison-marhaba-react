import React from 'react';
import { login } from './../../../services/AuthService';
import "./login.css";


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  async handleSubmit(event) {
    event.preventDefault();

    console.log('A email was submitted: ' + this.state.email);
    console.log('A password was submitted: ' + this.state.password);

    try {
      let repLogin = await login(this.state.email, this.state.password)
      console.log(repLogin);

      if (repLogin.status == 200) {
        window.localStorage.setItem("token", repLogin.data.token);
        window.localStorage.setItem("id", repLogin.data.user.id);
        window.localStorage.setItem("name", repLogin.data.user.name);
        window.localStorage.setItem("email", repLogin.data.user.email);
        window.localStorage.setItem("role", repLogin.data.user.role);

        window.localStorage.setItem("login", 1);
        window.location = "/";
      }
    } catch (error) {
      window.localStorage.setItem("login", 0);
      window.location = "/register";
    }
  }

  render() {
    return (

  

<div className="login-fg">
  <div className="container-fluid">
  
    <div className="row d-flex justify-content-center ">

    <div class="col-xl-8 col-lg-7 col-md-12 bg">
               
            </div>
      <div className="col-xl-4 col-lg-5 col-md-12 login">
    
    <div className="login-section">
          <div className="logo clearfix">
            <a href="#">
              Livraison App
            </a>
          </div>
          <h3>Sign in into your account</h3>
          <ul className="social">
            <li><a href="#" className="facebook"><i className="fab fa-facebook-f facebook-i" /><span>Facebook</span></a></li>
            <li><a href="#" className="twitter"><i className="fab fa-twitter twitter-i" /><span>Twitter</span></a></li>
            <li><a href="#" className="google"><i className="fab fa-google google-i" /><span>Google</span></a></li>
          </ul>
          <div className="or-login clearfix">
            <span>Or</span>
          </div>
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group form-fg">
                <input type="email" name="email" className="input-text" placeholder="Email Address" value={this.state.email} onChange={this.handleEmail} />
                <i className="fa fa-envelope" />
              </div>
              <div className="form-group form-fg">
                <input type="password" name="email" className="input-text" placeholder="Password" value={this.state.password} onChange={this.handlePassword} />
                <i className="fa fa-unlock-alt" />
              </div>
              <div className="checkbox clearfix">
                <div className="form-check checkbox-fg">
                  <input className="form-check-input" type="checkbox" defaultValue id="remember" />
                  <label className="form-check-label" htmlFor="remember">
                    Remember me
                  </label>
                </div>
                <a href="#">Forgot Password</a>
              </div>
              <div className="form-group mt-2">
                <button type="submit" className="btn-md btn-fg btn-block">Login</button>
              </div>
            </form>
          </div>
          <p>Don't have an account? <a href="#" className="linkButton"> Register</a></p>
        </div>
    

    

       
      </div>
    </div>
  </div>
</div>
 



    );
  }
}

export default Login;