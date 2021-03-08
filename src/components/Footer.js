import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare, faPhoneSquare } from '@fortawesome/free-solid-svg-icons';
import resumeIcon from "../assets/resume-icon.jpg";
// import {
//   // FacebookShareButton,
//   // FacebookIcon,
//   // EmailShareButton,
//   // EmailIcon,
//   // RedditShareButton,
//   // RedditIcon,
//   // GitHubShareButton,
//   // GitHubIcon
//   // LinkedinShareButton,
//   // LinkedinIcon
// } from "react-share";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <a href="Tel:+1(416) 845-3395" >
              <FontAwesomeIcon icon={faPhoneSquare}/> (416) 845-3395
              </a>
            </div>
            <div className="d-flex">
              <a href="mailto:nagck@hotmail.com" > 
              <FontAwesomeIcon icon={faEnvelopeSquare} /> nagck@hotmail.com</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a href="home" className="footer-nav">Home</a>
                <br />
                <a href="about" className="footer-nav">About Me</a>
                <br />
              </div>
              <div className="col">
                <a href="portfolio" className="footer-nav">Portfolio</a>
                <br />
                <a href="contacts" className="footer-nav">Contact</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              {/* <EmailShareButton
                url="shareUrl"
                subject="title"
                body="body"
              >
                <EmailIcon className="mx-3" size={40} />
              </EmailShareButton> */}
              {/* <LinkedinShareButton
                url={"https://www.linkedin.com/in/nagesh-kalegowda-764061a"}
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton> */}

              <div className="icon mx-3">
                <a href="mailto:nagck@hotmail.com" target="_blank"  rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faEnvelopeSquare}/></a>
              </div>
              
              <div className="icon mx-3">
                <a href="https://github.com/nagck/" target="_blank"  rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faGithubSquare}/></a>
              </div>

              <div className="icon mx-3">
                <a href="https://www.linkedin.com/in/nagesh-kalegowda-764061a" target="_blank"  rel="noopener noreferrer" >
                <FontAwesomeIcon icon={faLinkedin}/></a>
              </div>

              <div className="icon mx-3">
                <a href="https://drive.google.com/file/d/1E7uutoZZp37zz5KFTC2THi4Poa02vvKH/view?usp=sharing" target="_blank"  rel="noopener noreferrer" >
                <img src={resumeIcon} alt="Resume" className="resumeImg"/> 
                </a>
              </div>


            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Nagesh Kalegowda | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
