
import HeroSection from "./../../components/Navbars/heroSection"
import SectionCards from "./../../components/HomeComponents/Section2Cards";
import DownloadApp from "../../components/HomeComponents/downloadApp";
import Questions from "../../components/FAQ/Questions";
import Footer from "./../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import ZomatoBanner from "../../utils/zomatoBanner";




const HomePage = () => {
    const { page } = useParams();
    return (<>


        <HeroSection page={page} />
        <SectionCards />
        <DownloadApp />
        <Questions />
        <Footer />
        <ZomatoBanner />

    </>)
}

export default HomePage;