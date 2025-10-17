import Header from "./components/header";
import "./App.css";
import Footer from "./components/footer";
import Main from "./components/main";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
