import localFont from "next/font/local";

const giselle = localFont({
  src: [
    {
      path: "./giselle/FHGiselleTest-Light-BF65125161c6c7a.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./giselle/FHGiselleTest-LightItalic-BF6512516172cf5.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./giselle/FHGiselleTest-Regular-BF651251618a450.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./giselle/FHGiselleTest-RegularItalic-BF651251619195b.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./giselle/FHGiselleTest-Medium-BF65125161a3299.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./giselle/FHGiselleTest-MediumItalic-BF651251619118c.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./giselle/FHGiselleTest-SemiBold-BF6512516196777.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./giselle/FHGiselleTest-SemiBoldItalic-BF65125161a4c70.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "./giselle/FHGiselleTest-Bold-BF651251616cfe1.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./giselle/FHGiselleTest-BoldItalic-BF65125161ac6d9.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "./giselle/FHGiselleTest-Black-BF6512516189740.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./giselle/FHGiselleTest-BlackItalic-BF651251608f557.otf",
      weight: "900",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-giselle",
});

export { giselle };
