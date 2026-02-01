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
