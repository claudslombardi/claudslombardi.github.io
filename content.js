// =====================================================================
// SITE CONTENT — edit this file to update the website.
// No build step: commit and push, and GitHub Pages republishes.
// =====================================================================

window.SITE = {
  email: ["claudio.lombardi", "abdn.ac.uk"], // assembled in the browser to deter scrapers

  projects: [
    {
      title: "Legal Promises vs. Empirical Realities: A Quantitative Study of Access to Justice in Competition Damages Actions",
      badge: "Empirical study",
      url: "https://uk-clad.asf.abdn.ac.uk/",
      linkLabel: "Explore UK-CLAD",
      image: "uk-clad-trends.png", // save the chart from the UK-CLAD homepage into the repo under this name
      imageFallback: "https://uk-clad.asf.abdn.ac.uk/assets/images/home-page-graph.png",
      imageAlt: "Chart of UK competition damages actions and collective proceedings over time",
      text: "Quantitative methods applied to legal enforcement trends and policy impacts in competition law litigation. Data and tools are published through the UK-CLAD database.",
      stats: [
        ["454", "proceedings"],
        ["385", "s.47A actions"],
        ["69", "s.47B collective"],
        ["2004–25", "coverage"]
      ],
      funding: "Funded by the British Academy/Leverhulme and the University of Aberdeen."
    },
    {
      title: "DMA Empirical Study",
      badge: "Ongoing",
      text: "Assessing Digital Markets Act effectiveness and platform compliance strategies."
    },
    {
      title: "Competition Law Lab",
      badge: "Interactive tool",
      url: "competitionlawlab.html",
      linkLabel: "Launch the Lab (password required)",
      text: "Interactive guides for applying Articles 101 and 102 TFEU. Access is by password; email me to request one."
    }
  ],

  profile: {
    positions: [
      "Senior Lecturer (Associate Professor) in Law, University of Aberdeen",
      "Associate Director, Centre for Commercial Law",
      "Impact Lead, School of Law",
      "Member, University Senate"
    ],
    engagement: [
      "Research partnerships with UNCTAD, the Competition and Markets Authority and the Law Society of Scotland",
      "Consultancy for governments and international organisations on competition policy",
      "Country Director (Eurasia and Central Asia), ASCOLA",
      "Steering Committee, Scottish Competition Forum",
      "UNCTAD Research Partnership Platform",
      "Member, European Society for Empirical Legal Studies"
    ],
    qualifications: [
      "Fellow of Advance HE (FHEA)",
      "Admitted to the Italian Bar (2015); of counsel, V-lex, Milan"
    ]
  }
};
