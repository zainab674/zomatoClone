
import HeroSection from "./../../components/Navbars/heroSection"
import SectionCards from "./../../components/HomeComponents/Section2Cards";
import DownloadApp from "../../components/HomeComponents/downloadApp";
import Questions from "../../components/FAQ/Questions";
import Footer from "./../../components/Footer/Footer";





const HomePage = () => {
    return (<>


        <HeroSection />
        <SectionCards />
        <DownloadApp />
        <Questions />
        <Footer />

    </>)
}

export default HomePage;