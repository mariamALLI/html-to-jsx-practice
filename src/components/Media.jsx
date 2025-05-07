import { Link } from "react-router-dom";
import "../styles/media.css"; // Assuming you have a CSS file for styling
import lightImage from "../assets/images/light-480w.jpg";
import videoMp4 from "../assets/video/meet-mariam.mp4";
import videoOgg from "../assets/video/meet-mariam.ogg";
import audioMp3 from "../assets/audio/nasheed-islamic-background-133345.mp3";
import audioOgg from "../assets/audio/nasheed-islam.ogg";

const Media = () => {
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

        <h1>Hello! I'm Mariam Alli</h1>
        <p>Welcome to my inspirational page as an aspiring frontend engineer.</p>
      </header>

      <section>
        <h2>My Vision as a Frontend Engineer</h2>
        <p>I aim to create web experiences that are visually stunning, highly functional, and accessible to all.</p>

        {/* Responsive Picture Element */}
        <div className="media-container">
          <picture>
          <source srcSet="images/small.jpg" media="(max-width: 480px)"/>
                <source srcSet="images/medium.jpg" media="(max-width: 768px)"/>
                <source srcSet="images/large.jpg" media="(max-width: 1024px)"/>
            <img
              src={lightImage}
              alt="Showcasing my work on different devices"
              width="450px"
              height="480px"
            />
          </picture>
        </div>
      </section>

      <section>
        <h2>My Aspirations</h2>
        <p>Watch this video to learn more about my journey and aspirations.</p>

        {/* Video Media */}
        <div className="media-container">
          <video controls width="450px" height="480px">
            <source src={videoMp4} type="video/mp4" />
            <source src={videoOgg} type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Audio Media */}
        <div className="media-container">
          <p>Listen to this beautiful melodic sound.</p>

          <audio controls>
            <source src={audioMp3} type="audio/mp3" />
            <source src={audioOgg} type="audio/ogg" />
            Your browser does not support the audio tag.
          </audio>
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Mariam Alli - Aspiring Frontend Engineer</p>
      </footer>
    </div>
  );
};

export default Media;