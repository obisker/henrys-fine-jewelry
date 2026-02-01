import NotFound from "@/pages/NotFound";
import { Route, Router, Switch } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EngagementRings from "./pages/EngagementRings";
import CustomDesign from "./pages/CustomDesign";
import Services from "./pages/Services";
import About from "./pages/About";
import Locations from "./pages/Locations";
import ShopAll from "./pages/ShopAll";
import Rings from "./pages/shop/Rings";
import Earrings from "./pages/shop/Earrings";
import Necklaces from "./pages/shop/Necklaces";
import Bracelets from "./pages/shop/Bracelets";
import Estate from "./pages/shop/Estate";
import Sterling from "./pages/shop/Sterling";

// GitHub Pages base path configuration
const base = import.meta.env.BASE_URL;

function AppRouter() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/engagement-rings" component={EngagementRings} />
        <Route path="/custom-design" component={CustomDesign} />
        <Route path="/services" component={Services} />
        <Route path="/about" component={About} />
        <Route path="/locations" component={Locations} />
        <Route path="/shop" component={ShopAll} />
        <Route path="/shop/rings" component={Rings} />
        <Route path="/shop/earrings" component={Earrings} />
        <Route path="/shop/necklaces" component={Necklaces} />
        <Route path="/shop/bracelets" component={Bracelets} />
        <Route path="/shop/estate" component={Estate} />
        <Route path="/shop/sterling" component={Sterling} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router base={base}>
      <AppRouter />
    </Router>
  );
}

export default App;
