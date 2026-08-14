import { useState } from "react";
import "./AboutPage.css";

function AboutPage() {
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    {
      title: "Skills",
      text: "Jeg arbejder blandt andet med React, HTML, CSS, Figma, Jitter, Adobe Photoshop, Illustrater & Fresco",
      programs: [
        `${import.meta.env.BASE_URL}react.svg`,
        `${import.meta.env.BASE_URL}html.svg`,
        `${import.meta.env.BASE_URL}css.svg`,
        `${import.meta.env.BASE_URL}figma.svg`,
        `${import.meta.env.BASE_URL}jitter.svg`,
        `${import.meta.env.BASE_URL}ps.svg`,
        `${import.meta.env.BASE_URL}ai.svg`,
        `${import.meta.env.BASE_URL}fr.svg`,
      ],
    },
    {
      title: "Fritid",
      text: "Når jeg ikke studerer eller arbejder, bruger jeg min tid på små kreative projekter, som at tegne og male. Jeg holder også meget af at være i naturen, om jeg leder efter en sjælden fugl eller bygger en bivuak i skoven.",
    },
    {
      title: "Erfaring",
      text: "Til dagligt læser jeg til Multimediedesigner 3. semester på Erhvervsakademi Aarhus. Ved siden af studiet arbejder jeg som Social Media Manager for Café Smagløs, hvor jeg laver content til Instagram, Facebook og TikTok.",
    },
    {
      title: "Fun fact",
      text: "Inderst inde er jeg en sand Nordjyde, men har de sidste 4 år været bosat i Aarhus, som jeg holder meget af.",
    },
  ];

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="page-narrow about-page">
      {/* Intro */}
      <p className="eyebrow-heading">Om mig</p>

      <div className="about-hero">
        <div className="about-hero-text">
          <h1>Hvem er jeg?</h1>

          <p>
            Jeg brænder for at skabe digitale løsninger som gør en forskel for brugeren. Jeg holder meget af at lære og udvikle mig, og jeg har et stort drive for at finde kreative løsninger.
          </p>
        </div>

        <img
          src={`${import.meta.env.BASE_URL}portrait2.png`}
          alt="Et billede af Julie"
          className="drawing-image"
        />
      </div>

      {/* Klikbare kategorier */}
      <section className="about-categories" aria-label="Om mig detaljer">
        {categories.map((category, index) => (
          <div className="about-category" key={category.title}>
            <button
              className="about-category-button"
              onClick={() => toggleCategory(index)}
              aria-expanded={openCategory === index}
            >
              <span>{category.title}</span>

              <span className="about-category-icon">
                {openCategory === index ? "−" : "+"}
              </span>
            </button>

            <div
              className={`about-category-content ${
                openCategory === index ? "open" : ""
              }`}
            >
              <div className="about-category-inner">
                <p>{category.text}</p>

                {category.programs && (
                  <div className="program-list">
                    {category.programs.map((program, i) => (
                      <img key={i} src={program} alt="" />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AboutPage;
