const projects = [
  {
    slug: "SoMe-Manager",
    title: "SoMe Manager for Café Smagløs",
    year: "2026",
    summary:
      "Et projektkort, som du kan kopiere og ændre til dit eget projekt.",
    description:
      "Beskriv problemet, processen, din rolle, de vigtigste valg og hvad du lærte. Gør projektet konkret, så andre kan forstå dit arbejde.",
    tags: ["Videoredigering", "Branding", "Proces"],
    image: `${import.meta.env.BASE_URL}interview.JPG`,
    links: [
      {
        label: "Café Smagløs Instagram",
        href: "https://www.instagram.com/cafesmaglos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      },
    ],
  },
  {
    slug: "Surrealistisk-Collage",
    title: "Surrealistisk Collage",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Portfolioen viser udvalgte projekter og fungerer som et udgangspunkt for at arbejde med komponenter, routing, styling og deployment.",
    tags: ["Photoshop", "Fotografering", "Collage"],
    image: `${import.meta.env.BASE_URL}Youseewhatyouwannasee.png`,
    links: [
      {
        label: "Live site",
        href: "https://username.github.io",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/username/username.github.io",
      },
    ],
  },
  {
    slug: "Webapp-projekt",
    title: "Webapp projekt",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Portfolioen viser udvalgte projekter og fungerer som et udgangspunkt for at arbejde med komponenter, routing, styling og deployment.",
    tags: ["React", "UX/UI Design", "GitHub Pages"],
    image: `${import.meta.env.BASE_URL}Youseewhatyouwannasee.png`,
    links: [
      {
        label: "Live site",
        href: "https://username.github.io",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/username/username.github.io",
      },
    ],
  },
];

export default projects;
