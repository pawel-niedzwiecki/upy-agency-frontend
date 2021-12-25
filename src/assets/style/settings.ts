interface MainSettingsTemplate {
  colorWhite: string;
  colorBlack: string;
  colorAqua: string;
  colorRiverBed: string;
  colorBlueDark: string;
  colorBlue: string;
  colorGray: string;
  colorDanger: string;
  colorPurple: string;
  colorBorder: string;
  break: { small: string; main: string; big: string };
  breakPoint: {}[];
  gridCol: number;
  max_width: string;
}

const settings: MainSettingsTemplate = {
  // settings color
  colorWhite: "#ffff",
  colorBlack: "#000",
  colorAqua: "#00FFF0",
  colorRiverBed: "#44495B",
  colorBlueDark: "#040815",
  colorBlue: "#0A122A",
  colorGray: "#7E7E7E",
  colorDanger: "#E18787",
  colorPurple: "#D795FF",
  colorBorder: "#192037",

  // settings break
  break: { small: "0.5rem", main: "1rem", big: "2rem" },

  // settings breakpoint
  breakPoint: [
    { type: "xs", break: "0px" },
    { type: "sm", break: "540px" },
    { type: "md", break: "768px" },
    { type: "lg", break: "960px" },
    { type: "xl", break: "1140px" },
    { type: "xxl", break: "1320px" },
  ],

  gridCol: 12,

  // settings max width
  max_width: "144rem",
};

export default settings;
