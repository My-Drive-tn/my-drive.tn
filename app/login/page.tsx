'use client';

import Link from 'next/link';
import '@/app/login/login.css';
import Image from 'next/image';
import './login.css';

export default function Login() {
  return (
    <div>
      <section className="container forms">
        <div className="form login">
          <div className="form-content">
            <header>Login</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>

              <div className="field input-field">
                <input type="password" placeholder="Password" className="password" />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="form-link">
                <Link href="#" className="forgot-pass">Forgot password?</Link>
              </div>

              <div className="field button-field">
                <button type="submit">Login</button>
              </div>
            </form>

            <div className="form-link">
              <span>Don't have an account? <Link href="/signup" className="link signup-link">Signup</Link></span>
            </div>
          </div>

          <div className="line"></div>

          <div className="media-options">
            <Link href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </Link>
          </div>

          <div className="media-options">      

            <Link href="#" className="field google">
             { /*<img src={google.png} alt="Google" className="google-img" />*/}
            {/* <img src={Image} alt="Google" className="google-img" />***********************************************************************/}


              <span>Login with Google</span>
            </Link>
          </div>
        </div>

        {/* Signup Form */}

        <div className="form signup">
          <div className="form-content">
            <header>Signup</header>
            <form action="#">
              <div className="field input-field">
                <input type="email" placeholder="Email" className="input" />
              </div>

              <div className="field input-field">
                <input type="password" placeholder="Create password" className="password" />
              </div>

              <div className="field input-field">
                <input type="password" placeholder="Confirm password" className="password" />
                <i className="bx bx-hide eye-icon"></i>
              </div>

              <div className="field button-field">
                <button type="submit">Signup</button>
              </div>
            </form>

            <div className="form-link">
              <span>Already have an account? <Link href="/signup" className="link login-link">Login</Link></span>
            </div>
          </div>

          <div className="line"></div>

          <div className="media-options">
            <Link href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Login with Facebook</span>
            </Link>
          </div>

          <div className="media-options">
            <Link href="#" className="field google">
              <img src="/images/google.png" alt="Google" className="google-img" />
              <span>Login with Google</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
