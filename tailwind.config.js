/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"], // Add Montserrat
      },
      fontWeight: {
        normal: "var(--ts-fw-normal)",
        elight: "var(--ts-fw-elight)",
        light: "var(--ts-fw-light)",
        regular: "var(--ts-fw-regular)",
        medium: "var(--ts-fw-medium)",
        sbold: "var(--ts-fw-sbold)",
        bold: "var(--ts-fw-bold)",
        ebold: "var(--ts-fw-ebold)",
        black: "var(--ts-fw-black)",
      },
      fontSize: {
        body: "var(--ts-fz-body)",
        btn: "var(--ts-fz-btn)",
        p: "var(--ts-fz-p)",
        h1: "var(--ts-fz-h1)",
        h2: "var(--ts-fz-h2)",
        h3: "var(--ts-fz-h3)",
        h4: "var(--ts-fz-h4)",
        h5: "var(--ts-fz-h5)",
        h6: "var(--ts-fz-h6)",
        subtitle: "var(--ts-fz-sub-title)",
      },
    },
  },
  plugins: [],
};
