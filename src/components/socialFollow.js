import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
  faGithub,
  faDev,
} from "@fortawesome/free-brands-svg-icons"

const SocialFollow = () => {
  return (
    <div className="socialContainer">
      <a
        href="https://www.linkedin.com/in/siminmaleki/"
        className="fa-linkedin-in social"
      >
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
      </a>

      <a href="https://github.com/siminmaleki" className="fa-twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>

      <a href="https://twitter.com/siminmaleki" className="fa-github social">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <a
        href="https://www.facebook.com/maleki.simin"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>

      {/* <a href="#" className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a> */}

      {/* <a href="https://dev.to/siminmaleki" className="fa-dev social">
        <FontAwesomeIcon icon={faDev} size="2x" />
      </a> */}
    </div>
  )
}

export default SocialFollow
