"use client";

import Providers from "./_layouts/Providers";
import "./_assets/reset.css";
import Footer from "./_layouts/Footer/Footer";

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
