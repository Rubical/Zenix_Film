"use client";

import Providers from "../src/layouts/Providers";
import "../src/assets/reset.css";
import Footer from "../src/layouts/Footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
