import StyledAbout from "./AboutUs";

const AboutUs = () => {
  return (
    <StyledAbout>
      <div className="about__container">
        <h1 className="about__title">About Us</h1>
        <p className="about__description">
          Welcome to our COVID-19 Data Tracker! Our website is dedicated to providing accurate and up-to-date information about the COVID-19 pandemic across various regions. We aim to help you stay informed with the latest statistics and trends.
        </p>
        <p className="about__description">
          Our platform offers detailed data on confirmed cases, recoveries, deaths, and ongoing treatments. We strive to present this information in an easy-to-understand format, making it accessible to everyone.
        </p>
        <p className="about__description">
          Our mission is to ensure that you have reliable data at your fingertips, enabling you to make informed decisions during these challenging times. We are committed to maintaining the highest standards of accuracy and transparency.
        </p>
        <p className="about__description">
          Thank you for visiting our site. Stay safe and stay informed!
        </p>
      </div>
    </StyledAbout>
  );
};

export default AboutUs;
