import Header from "./components/Header";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/main/Main";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
