import "./globals.css";

export const metadata = {
  title: "Charan's Portfolio",
  description: "A passionate developer crafting beautiful web experiences",
  icons: {
    icon: '/favicon.ico?v=1',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico?v=1" />
        <link rel="shortcut icon" href="/favicon.ico?v=1" />
        <link rel="apple-touch-icon" href="/favicon.ico?v=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
