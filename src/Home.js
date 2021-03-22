import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useOnClickOutside } from "./hooks";
import Aos from "aos";
import GlobalStyle from "./theme/GlobalStyle";
import LandingPage from "./views/LandingPage";
import { theme } from "./theme/MainTheme";
import AboutMeView from "./views/AboutMeView";
import PicturesView from "./views/PicturesView";
import ContactView from "./views/ContactView";
import ViewParent from "./views/ViewParent";
import Burger from "./components/atoms/Burger";
import Menu from "./components/organisms/Menu";
import Footer from "./components/organisms/Footer";


function Home() {
  const [open, setOpen] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));
  useEffect(() => {
    Aos.init({ duration: 1500, once: true });
  }, []);

  return (
      <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>

        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
        <ViewParent>
          <LandingPage id="landingPage" />
        </ViewParent>
        <ViewParent>
          <AboutMeView id="aboutMe" name="aboutMe" />
        </ViewParent>

        <ViewParent>
          <PicturesView id="portfolio" />
        </ViewParent>
        <ViewParent>
          <ContactView id="contact" />
        </ViewParent>

        <Footer />
      </ThemeProvider>
        </>
  );
}

export default Home;
