import Header from "./components/layout/Header";
import "./App.css";
import Footer from "./components/layout/Footer";
import Container from "./components/layout/Container";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}
