import { Link } from "react-router-dom";
import "../styles/form.css"; // Assuming you have a CSS file for styling

const Form = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Assignment1</Link></li>
            <li><Link to="/form">Assignment2</Link></li>
            <li><Link to="/table">Assignment3</Link></li>
            <li><Link to="/media">Assignment4</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h1>Signup</h1>
          <p>Take the next steps to apply at AltSchool Africa</p>
        </section>

        <form>
          <p>
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
            />
          </p>

          <p>
            <label htmlFor="gender">Gender</label>
            <select name="gender" id="gender">
              <option value="female">Female</option>
              <option value="male">Male</option>
            </select>
          </p>

          <p>
            <label htmlFor="dob">Date of Birth</label>
            <input type="date" name="dob" id="dob" />
          </p>

          <p>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </p>

          <p>
            <label htmlFor="phonenumber">Phone Number</label>
            <input
              type="text"
              name="phonenumber"
              id="phonenumber"
              placeholder="08155547000"
            />
          </p>

          <p>
            <label htmlFor="country">Country</label>
            <select id="country" name="country" className="form-control">
              <option value="Nigeria">Nigeria</option>
              <option value="Ghana">Ghana</option>
              <option value="Kenya">Kenya</option>
              <option value="South Africa">South Africa</option>
              <option value="United States">United States</option>
              <option value="United Kingdom">United Kingdom</option>
            </select>
          </p>

          <p>
            <label htmlFor="state-of-residence">State/City of Residence</label>
            <input
              type="text"
              name="state-of-residence"
              id="state-of-residence"
              placeholder="Enter your state of residence"
            />
          </p>

          <p>
            <label htmlFor="about-us">How did you hear about us?</label>
            <select name="about-us" id="about-us">
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
              <option value="linkedin">LinkedIn</option>
              <option value="youtube">YouTube</option>
              <option value="friend">Friend</option>
              <option value="whatsapp">WhatsApp</option>
              <option value="instagram">Instagram</option>
              <option value="billboard">Billboard</option>
              <option value="sales-officer">Sales Officer</option>
              <option value="others">Others</option>
            </select>
          </p>

          <p>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
            />
          </p>

          <p>
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              placeholder="Enter password again"
            />
          </p>

          <footer>
            <p>
              By clicking continue, I agree to <a href="#">Terms of Use</a> and
              acknowledge that I have read the <a href="#">Privacy Policy</a>.
            </p>
          </footer>

          <button type="submit">Submit &#9473;&#62;</button>
        </form>
      </main>

      <footer>
        <address>Lagos, Nigeria.</address>
        <p>&lt;&lt;&lt; &copy;2024 Mariam Alli &gt;&gt;&gt;</p>
      </footer>
    </div>
  );
};

export default Form;