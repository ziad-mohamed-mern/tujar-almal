import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/app/theme-provider";
import { PageShell } from "@/components/page-shell";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import StoreDesign from "@/pages/StoreDesign";
import AppDevelopment from "@/pages/AppDevelopment";
import DigitalMarketing from "@/pages/DigitalMarketing";
import Portfolio from "@/pages/Portfolio";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import Faq from "@/pages/Faq";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<PageShell />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/store-design" element={<StoreDesign />} />
              <Route path="/app-development" element={<AppDevelopment />} />
              <Route path="/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
