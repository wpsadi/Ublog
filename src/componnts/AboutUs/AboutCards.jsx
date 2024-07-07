import "./AboutCards.css";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
function AboutCards() {
  const FoundersDetail = [
    {
      name: "Aditya",
      position: "CEO & Founder",
      img: "https://via.placeholder.com/400x300",
      link: "#",
      social: {
        github: "",
        linkedin: "",
        twitter: "https://github.com",
      },
    },
    {
      name: "Jane Smith",
      position: "CTO & Co-Founder",
      img: "https://via.placeholder.com/400x300",
      link: "#",
      social: {
        github: "",
        linkedin: "",
        twitter: "",
      },
    },
    {
      name: "Mike Johnson",
      position: "COO & Co-Founder",
      img: "https://via.placeholder.com/400x300",
      link: "#",
      social: {
        github: "",
        linkedin: "",
        twitter: "",
      },
    },
  ];
  return (
    <>
      <section className="text-center py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text">
            About Us
          </h2>
          <p className="text-lg mb-12">
            We are a team of passionate individuals dedicated to bringing you
            the best thing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Card 1 --> */}
            {FoundersDetail.map((card, index) => (
              <div className="card mainBgC" key={index + 1}>
                <img src={card.img} alt="Founder Image 1" />
                <div className="card-content">
                  <h3>{card.name}</h3>
                  <p>{card.position}</p>
                  <Link to={card.link}>Read More</Link>
                </div>
                <div className="flex space-x-4 justify-center pb-3">
                  <Link to={card.social.github} className="gradient-border">
                    <FaGithub
                      alt="GitHub"
                      className="h-6 hover:invert-100 w-6 m-2"
                    />
                  </Link>
                  <Link
                    to={card.social.linkedin}
                    className="gradient-border"
                  >
                    <FaLinkedin
                      alt="Linkedin"
                      className="h-6 hover:invert-100 w-6 m-2"
                    />
                  </Link>
                  <Link
                   to={card.social.twitter}
                    className="gradient-border"
                  >
                    <FaSquareXTwitter
                      alt="X"
                      className="h-6 hover:invert-100 w-6 m-2"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutCards;
