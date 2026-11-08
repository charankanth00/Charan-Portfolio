import "./globals.css";

export const metadata = {
  title: "Charan's Portfolio",
  description: "A passionate developer crafting beautiful web experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
