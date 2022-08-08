// * Typhography System

// Colors
const theme = {
  typography: {
    colors: {
      primaryFirst: {
        primary: "#1c7ed6",
        shades: ["#1971c2"],
        tints: ["#339af0"],
      },
      background: {
        personCard: "#fff",
        container: "#fcfcfc",
        tintsTransparent: ["#e8f2fbbf", "#bbd8f3f2"],
      },
    },

    // Spacing

    sectionGap: {
      small: "1.2rem",
      mediumLow: "1.6rem",
      medium: "2.4rem",
      mediumHigh: "3.6rem",
      large: "4.8rem",
      veryLarge: "9.6rem",

      headerBottom: "0rem",
    },

    // Heights

    containerWidth: {
      overviewMin: "40rem",
    },
    
    containerHeight: {
      header: "9.6rem",
    },
  },

  components: {
    btn: {
      btnLink: `.btn:link,
        .btn:visited { {
          font-weight: 600;
          padding: 1.6rem 2.4rem;
          border-radius: 0.9rem;

          border: none !important;
          cursor: pointer;

          transition: all 0.3s;
        }`,

      btnFullLink: `.btn--full:link,
        .btn--full:visited {
          background-color: #1c7ed6;
          color: #fff;
        }`,
      btnFullActive: `.btn--outline:hover,
        .btn--outline:active {
          background-color: #1c7ed6;
        }`,
    },
  },

  methods: {
    capitalize: (s) => {
      return s
        .split(" ")
        .map((n) => {
          return [n.slice(0, 1).toUpperCase(), n.slice(1)].join("");
        })
        .join(" ");
    },
  },
};

export default theme;
