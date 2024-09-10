import NavBar from "./../../components/Navbars/navbarRestaurants";
import Options from "./../../components/Restaurants/options";
import Questions from "../../components/FAQ/Questions"
import Footer from "./../../components/Footer/Footer"
import ZomatoBanner from "../../utils/zomatoBanner";





const Restaurants = () => {
    return (<>

        <NavBar />
        <Options />
        <Questions />
        <Footer />
        <ZomatoBanner />

    </>)
}

export default Restaurants;