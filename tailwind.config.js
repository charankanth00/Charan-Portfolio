module.exports = {
  theme: {
    extend: {
      colors: {
        "background-light": "#f9fafb", // Change this for background
        "text-light": "#111827",       // Change this for main text
        accent: "#6366f1",             // Change this for accent (buttons, highlights)
        success: "#10b981",            // Change this for success/CTA
      },
    },
  },
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
};