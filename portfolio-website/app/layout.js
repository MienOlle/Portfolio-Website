import "./globals.css";
import Head from 'next/head'

export const metadata = {
  title: "Website Portfolio",
  description: "Potfolio Website Design",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/jpg" href="./images/favicon.jpg" />
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
