import Footer from "./components/Footer";
import Header from "./components/header/Header";

export default function FormLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
