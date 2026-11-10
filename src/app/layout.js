import "./globals.css";

export const metadata = {
  title: "Charan's Portfolio",
  description: "A passionate developer crafting beautiful web experiences",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
