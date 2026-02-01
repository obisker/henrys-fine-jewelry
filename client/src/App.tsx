import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";

import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import EngagementRings from "./pages/EngagementRings";
import CustomDesign from "./pages/CustomDesign";
import Services from "./pages/Services";
import About from "./pages/About";
import Locations from "./pages/Locations";

function Router() {
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
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
