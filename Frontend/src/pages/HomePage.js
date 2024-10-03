import { Container, Flex, VStack } from "@chakra-ui/react";
import Navbar from "../components/navbar/Navbar";
import NavbarLoginButtons from "../components/navbar/login-buttons";
import HomePageVideo from "../components/home/home-page-video";
import HomePageImage from "../components/home/home-page-image"; // Corrected import
import Footer from "../components/footer";
import ClientSpeak from "../components/home/client-speak";
import AvatarMenu from "../components/navbar/avatar-menu";
import useAuthentication from "../useAuthentication";
import WhyChooseUs from "../components/home/why-choose-us";
import FeaturedVehicles from "../components/home/featured-vehicles";
import HomeSidebarContent from "../components/home/home-sidebar-content";
import NavbarLinks from "../components/navbar/NavbarLinks";
import { useEffect, useState } from "react";

function Home() {
  const { isLoggedIn, isLoading } = useAuthentication();
  const [showNavbarContent, setShowNavbarContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbarContent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar
        sidebarContent={<HomeSidebarContent />}
        links={<NavbarLinks />}
        buttons={
          showNavbarContent &&
          (isLoggedIn ? <AvatarMenu /> : <NavbarLoginButtons />)
        }
      />
      <HomePageImage />
      <HomePageVideo /> {/* Render the correct component */}
      
      <FeaturedVehicles />
      <WhyChooseUs />
      <ClientSpeak />
      <Footer />
    </div>
  );
}

export default Home;
