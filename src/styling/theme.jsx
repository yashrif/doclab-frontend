import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  /* -------------------------------------------------------------------------- */
  /*                             Chakra Custom Theme                            */
  /* -------------------------------------------------------------------------- */
  fonts: {
    body: "Lato, sans-serif",
    // heading: "Georgia, serif",
    // mono: "Menlo, monospace",
  },
  colors: {
    primary: {
      base: "#1c7ed6",

      50: "#def5ff",
      100: "#b6dbfb",
      200: "#8bc2f3",
      300: "#5fa9eb",
      400: "#3491e4",
      500: "#1b77cb",
      600: "#105d9f",
      650: "#0e548f",
      700: "#064273",
      800: "#002848",
      900: "#000e1e",
    },

    bgContainer: "#f2f5fe",
    bg: "#fff",
    bgDarker: "#fafafc",

    font: {
      // hero: "#204289",
      hero: "#064273",
      primary: "#1c7ed6",
      focused: "#18181B",
      muted: "#767676",
      general: "#555",
      light: "#fff",
    },
  },

  fontSizes: {
    xs: "0.8rem",
    sm: "1rem",
    md: "1.2rem",
    lg: "1.4rem",
    xl: "1.6rem",
    "2xl": "1.8rem",
    "3xl": "2rem",
    "4xl": "2.4rem",
    "5xl": "3rem",
    "6xl": "3.6rem",
    "7xl": "4.4rem",
    "8xl": "5.2rem",
    "9xl": "6.2rem",
    "10xl": "7.4rem",
    "11xl": "8.6rem",
  },

  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.2,
    short: 1.4,
    base: 1.5,
    tall: 1.6,
    taller: 2,
  },

  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },

  space: {
    px: "1px",
    0.5: "0.5rem",
    1: "0.1rem",
    2: "0.2rem",
    4: "0.4rem",
    8: "0.8rem",
    12: "1.2rem",
    16: "1.6rem",
    20: "2rem",
    24: "2.4rem",
    28: "2.8rem",
    32: "3.2rem",
    36: "3.6rem",
    40: "4rem",
    44: "4.4rem",
    48: "4.8rem",
    52: "5.2rem",
    56: "5.6rem",
    60: "6rem",
    64: "6.4rem",
    72: "7.2rem",
    80: "8rem",
    96: "9.6rem",
  },

  sizes: {
    max: "max-content",
    min: "min-content",
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    "8xl": "90rem",
    "12xl": "120rem",
    "13xl": "130rem",
  },

  container: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "130px",
  },

  borderRadius: {
    none: "0",
    sm: "0.2rem",
    base: "0.4rem",
    md: "0.5rem",
    lg: "0.9rem",
    xl: "1.1rem",
    "2xl": "1.6rem",
    "3xl": "2rem",
    full: "9999px",
  },

  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },

  /* -------------------------------------------------------------------------- */
  /*                                   Custom                                   */
  /* -------------------------------------------------------------------------- */

  typography: {
    // Colors
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
      overviewMin: "35rem",
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
        ?.split(" ")
        .map((n) => {
          return [n.slice(0, 1).toUpperCase(), n.slice(1)].join("");
        })
        .join(" ");
    },
  },
});

export default theme;
