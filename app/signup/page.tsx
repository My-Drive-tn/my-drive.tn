'use client';

import Link from 'next/link';
import '@/app/signup/signup.css';
import Image from 'next/image';
import './signup.css';

export default function Signup() {
  return (
    <div>
      <section className="container forms">
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
              <span>Already have an account? <Link href="/login" className="link login-link">Login</Link></span>
            </div>
          </div>

          <div className="line"></div>

          <div className="media-options">
            <Link href="#" className="field facebook">
              <i className="bx bxl-facebook facebook-icon"></i>
              <span>Signup with Facebook</span>
            </Link>
          </div>

          <div className="media-options">
            <Link href="#" className="field google">
              <Image src="/images/google.png" alt="Google" width={20} height={20} className="google-img" />
              <span>Signup with Google</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
