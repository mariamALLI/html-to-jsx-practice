import { Link } from "react-router-dom";
import "../styles/table.css"; // Assuming you have a CSS file for styling

const Table = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/index">Assignment1</Link></li>
            <li><Link to="/form">Assignment2</Link></li>
            <li><Link to="/">Assignment3</Link></li>
            <li><Link to="/media">Assignment4</Link></li>
          </ul>
        </nav>
      </header>

      <main>
      <table>
        <caption>AltSchool Africa Schools</caption>
        <tbody>
            
                <tr>
                    <th>Schools</th>
                    <th>Courses</th>
                </tr>

                <tr>
                    <td>School of Engineering</td>
                    <td>Frontend Engineering</td>
                    <td>Backend Engineering</td>
                    <td>Cloud Engineering</td>
                    <td>Cybersecurity</td>
                </tr>

                <tr>
                    <td>School of Product</td>
                    <td>Product Management</td>
                    <td>Product Design</td>
                    <td>Product Marketing</td>
                </tr>

                <tr>
                    <td>School of Data</td>
                    <td>Data Analysis</td>
                    <td>Data Science</td>
                    <td>Data Engineering</td>
                </tr>
            
        </tbody>
    </table>
      </main>
    </div>
  );
};

export default Table;