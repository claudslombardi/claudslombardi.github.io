// =====================================================================
// SITE CONTENT — edit this file to update the website.
// No build step: commit and push, and GitHub Pages republishes.
// In `cite` fields, *asterisks* render as italics.
// =====================================================================

window.SITE = {
  email: ["claudio.lombardi", "abdn.ac.uk"], // assembled in the browser to deter scrapers

  // Newest first. Keep 3–5 items; delete old ones.
  news: [
    {
      date: "2026",
      text: "Presented findings from the UK-CLAD dataset on competition damages and collective actions at ASCOLA 2026."
    },
    {
      date: "2026",
      text: "UK-CLAD methodology published in the European Journal of Empirical Legal Studies."
    },
    {
      date: "2026",
      text: "UK-CLAD public database launched: 454 proceedings before the Competition Appeal Tribunal, 2004–2025.",
      link: "https://uk-clad.asf.abdn.ac.uk/"
    }
  ],

  research: [
    {
      title: "UK-CLAD: Competition Litigation & Access to Justice Database",
      badge: "Live database",
      url: "https://uk-clad.asf.abdn.ac.uk/",
      linkLabel: "Explore UK-CLAD",
      image: "uk-clad-trends.png", // save the chart from the UK-CLAD homepage into the repo under this name
      imageFallback: "https://uk-clad.asf.abdn.ac.uk/assets/images/home-page-graph.png",
      imageAlt: "Chart of UK competition damages actions and collective proceedings over time",
      text: "Full-population coding of damages actions before the Competition Appeal Tribunal, examining whether the promise of private enforcement and collective redress translates into access to justice. Includes a public dataset, codebook and litigation cost estimator.",
      stats: [
        ["454", "proceedings"],
        ["385", "s.47A actions"],
        ["69", "s.47B collective"],
        ["2004–25", "coverage"]
      ],
      funding: "Funded by the British Academy/Leverhulme and the University of Aberdeen."
    },
    {
      title: "Digital Markets Act: Enforcement in Practice",
      badge: "Ongoing",
      text: "A systematic, machine-assisted extraction and coding of European Commission DMA decisions, assessing how gatekeepers comply and how the Commission enforces."
    },
    {
      title: "Competition Law Lab",
      badge: "Interactive tool",
      url: "competitionlawlab.html",
      linkLabel: "Launch the Lab (password required)",
      text: "Step-by-step interactive guides for applying Articles 101 and 102 TFEU, built for students and practitioners. Access is by password; email me to request one."
    }
  ],

  // type: "book" | "article" | "chapter" | "policy"
  // selected: true → also shown on the About page
  publications: [
    {
      type: "book", year: 2026, selected: true,
      cite: "Claudio Lombardi and others (eds), *Future Frontiers of Law and Technology* (2 vols, Edinburgh University Press, forthcoming 2026)"
    },
    {
      type: "book", year: 2019, selected: true,
      cite: "Claudio Lombardi, *Causation in Competition Law Damages Actions* (Cambridge University Press 2019)"
    },
    {
      type: "article", year: 2026, selected: true,
      cite: "Claudio Lombardi, ‘Analysing Judicial Case Data for Access to Justice: A Methodological Framework’ (2026) *European Journal of Empirical Legal Studies*"
    },
    {
      type: "article", year: 2023, selected: true,
      cite: "Claudio Lombardi, ‘Rethinking Journalism Protection: Looking beyond Copyright’ (2023) 15 *Journal of Media Law* 90",
      link: "https://doi.org/10.1080/17577632.2023.2234691"
    },
    {
      type: "chapter", year: 2024, selected: true,
      cite: "Claudio Lombardi, ‘Gatekeepers and Their Special Responsibility under the Digital Markets Act’ in Lorenzo Calzolari and others (eds), *Public and Private Enforcement of EU Competition Law in the Age of Big Data* (Giappichelli 2024)",
      link: "https://www.giappichelli.it/public-and-private-enforcement-of-eu-competition-law-in-the-age-of-big-data-9791221101645",
      oa: true
    },
    {
      type: "chapter", year: 2023, selected: true,
      cite: "Ioannis Lianos and Claudio Lombardi, ‘Causation’ in Barry Rodger, Miguel Sousa Ferro and Francisco Marcos (eds), *Research Handbook on Private Enforcement of Competition Law in the EU* (Edward Elgar 2023)",
      link: "https://doi.org/10.4337/9781800377523.00016"
    },
    {
      type: "chapter", year: 2023,
      cite: "Claudio Lombardi, ‘News online e sue criticità’ in Giuseppe Cassano, Claudio Elia Cazzato and Francesco Di Ciommo (eds), *Trattato delle Garanzie nelle Comunicazioni* (Giuffrè 2023)"
    },
    {
      type: "chapter", year: 2022,
      cite: "Ioannis Lianos and others, ‘Power in the Food Value Chain: Theory and Metrics’ in Ioannis Lianos, Alexey Ivanov and Dennis Davis (eds), *Global Food Value Chains and Competition Law* (Cambridge University Press 2022)",
      link: "https://doi.org/10.1017/9781108554947.012"
    },
    {
      type: "policy", year: 2025,
      cite: "Petar Zivkovic and others, *Response to UKIPO Consultation on Copyright and Artificial Intelligence* (University of Aberdeen School of Law 2025)",
      link: "https://aura.abdn.ac.uk/bitstreams/2141b799-e2be-42ce-a9b3-3a3649e78b6f/download",
      oa: true
    },
    {
      type: "policy", year: 2023,
      cite: "Claudio Lombardi, *Response to the CMA Consultation on Draft Guidance on Environmental Sustainability Agreements* (2023)",
      link: "https://assets.publishing.service.gov.uk/media/6525695faea2d0000d219b08/Dr_Claudio_Lombardi.pdf"
    },
    {
      type: "policy", year: 2023,
      cite: "Petar Zivkovic and others, *Consultation Response to the UK Government’s Policy Proposals on AI Regulation: A Pro-Innovation Approach* (University of Aberdeen School of Law 2023)",
      link: "https://www.abdn.ac.uk/law/documents/University%20of%20Aberdeen_CCL%20UK%20AI%20Regulation%20Response_06-23.pdf"
    }
  ],

  teaching: [
    { title: "EU Institutions and Law", meta: "LLB, 2nd year · Course coordinator" },
    { title: "EU and UK Competition Law", meta: "LLB / LLM" },
    { title: "Global Competition Law", meta: "LLM · comparative" },
    { title: "Law and Data Science", meta: "Cross-school undergraduate course · new" }
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
