import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/app/theme-provider";
import { PageShell } from "@/components/page-shell";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import StorePage from "@/pages/StorePage";
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/store/:id" element={<StorePage />} />
              <Route path="/fashion" element={<StorePage />} />
              <Route path="/food" element={<StorePage />} />
              <Route path="/collectibles" element={<StorePage />} />
              <Route path="/electronics" element={<StorePage />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
}
