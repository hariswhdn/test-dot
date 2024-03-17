import localFont from "next/font/local";
import "/public/css/globals.css";

const source_sans_pro = localFont({
  src: [
    {
      path: "../public/fonts/SourceSansPro-Regular.woff2",
      weight: "400",
      style: "normal",
      display: "swap",
    },
    {
      path: "../public/fonts/SourceSansPro-SemiBold.woff2",
      weight: "600",
      style: "normal",
      display: "swap",
    },
    {
      path: "../public/fonts/SourceSansPro-Bold.woff2",
      weight: "700",
      style: "normal",
      display: "swap",
    },
  ],
});

export const metadata = {
  title: "SobatBangun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={source_sans_pro.className}>{children}</body>
    </html>
  );
}
