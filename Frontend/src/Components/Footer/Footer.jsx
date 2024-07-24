import React, { useContext } from 'react'
import './Footer.css'
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { MdWifiCalling2 } from "react-icons/md";
import { Link } from 'react-router-dom'
import Context from '../../Context/Context';



const Footer = () => {

  const {
    Footer
  } = useContext(Context)

  return (
  <>
  {Footer.map((footer) => (
    <footer className="footer" key={footer.id}>
      <div className="contact-info">
        <Link to={footer.Linkdin} className="link flex">
          <FaLinkedin className="contact-icon" />
          <span>Linkedin</span>
        </Link>

        <Link to={footer.Telegram} className="link flex">
          <FaGithub className="contact-icon" />
          <span>Github</span>
        </Link>

        <Link to={footer.Github} className="link flex">
          <FaTelegram className="contact-icon" />
          <span>Telegram</span>
        </Link>
      </div>

      <div className="contact-info">
        <div className="link flex">
          <TfiEmail className="contact-icon" />
          <span>{footer.Email}</span>
        </div>

        <div className="link flex">
          <MdWifiCalling2 className="contact-icon" />
          <span>{footer.Phone1}</span>
        </div>

        <div className="link flex">
          <MdWifiCalling2 className="contact-icon" />
          <span>{footer.Phone2}</span>
        </div>
      </div>
    </footer>
    ))}
  </>
  )
}

export default Footer