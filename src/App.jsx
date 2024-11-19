import AppBanner from "./components/AppBanner";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhereToBuy from "./components/WhereToBuy";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Hero />
      <Services />
      <WhereToBuy />
      <AppBanner />
      <Footer />
    </div>
  );
}

export default App;