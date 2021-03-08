import React from "react";
import author from "../assets/nagck.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">About me</h1>
          <p>Hello Everyone,</p>
          <p>My name is Nagesh Kalegowda. I live in Toronto, Ontario, Canada. I have been working in the field of Information Technology for over 10 years now. I work as Technology Architect helping organizations in architecture, design and implementation of IT infrastructure. I have a strong track record of success in technology architecture, cloud services architecture, secure IT infrastructure design, implementation and full life cycle project management. I have strong experience in cloud services deployments, in adoption of public and private cloud services, in virtualization, in managed services, in the delivery of professional and consulting services to top-tier Financial, Public Sector, Telecom, Energy, and IT Services firms.
          </p>
          <p>
          I am very much interested in enhancing my skill sets to include full stack web development. To accomplish this goal, I am currently enrolled in the University of Toronto SCS Coding Boot Camp. I am hoping to develop these skills by April 2021.
          </p>
          <p>Have Fun!</p>
          <p>Nagesh</p>
          <p>Please feel free to connect with me on LinkedIn or GitHub or via Contact page.</p>
          
        </div>
      </div>
    </div>
  )
}

export default AboutMe
