import Layout from "./components/Layout/Layout";
import { useTheme } from "./context/ThemeContext";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Project from "./pages/Projects/Project";
import TechStack from "./pages/TechStack/TechStack";
import About from "./pages/about/About";
import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";
import MobileNav from "./components/Layout/MobileNav/MobileNav";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Experience />
          <TechStack />
          <Project />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
          <Tada>
            <h4 className="text-center">
              Made With ❤️ Anand Pathak &copy; 2023
            </h4>
          </Tada>
        </div>
      </div>
      <ScrollToTop
        smooth
        style={{ backgroundColor: "#138781", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
