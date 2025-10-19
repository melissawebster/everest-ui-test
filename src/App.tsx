import Header from "./components/Header2";
import "./App.css";
import Footer from "./components/Footer2";
import MainContent from "./components/main/MainContent";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
