import Navigation from "../../component/Navigation";
import "../globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <Navigation />

      {children}
    </>
  );
}
