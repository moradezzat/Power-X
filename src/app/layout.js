import LocalFont from "next/font/local";
import "./globals.css";

const Rubik = LocalFont({
  src: [
    { path: "../../public/Fonts/Rubik/Rubik-Light.ttf", weight: "300", style: "normal" },
    { path: "../../public/Fonts/Rubik/Rubik-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/Fonts/Rubik/Rubik-Medium.ttf", weight: "500", style: "normal" },
    { path: "../../public/Fonts/Rubik/Rubik-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../../public/Fonts/Rubik/Rubik-Bold.ttf", weight: "700", style: "normal" },
    { path: "../../public/Fonts/Rubik/Rubik-ExtraBold.ttf", weight: "800", style: "normal" },
    { path: "../../public/Fonts/Rubik/Rubik-Black.ttf", weight: "900", style: "normal" }
  ],
  variable: "--font-rubik"
});

export const metadata = {
  title: "تيم باور اكس",
  description: "تيم باور اكس للتبريد والتكييف",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Rubik.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
