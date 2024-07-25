import { Link } from "react-router-dom";


const About = () => {
  return(
    <>
    <nav>
        <ul className="nav justify-content-end mt-3 ">
          <li className="nav-item">
            <Link to="/home" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="nav-link">
              Contacts
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Log Out
            </Link>
          </li>
        </ul>
      </nav>

      <div>
      <h1>About Us </h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique ullam hic nihil molestiae officiis obcaecati dolor repudiandae veritatis accusantium ipsam! Iste fugiat praesentium nobis quidem autem tempore, molestias reprehenderit id?</p>
      </div>
    </>
  )
}

export default About;