import NavBar from "../../components/Navbars/navbarRestaurants"
import Gallery from "../../components/ResDetails/gallery";
import OrderTitleComponent from "../../components/ResDetails/OrderTitle";
import DetailOptions from "../../components/ResDetails/detailOptions"
import Footer from "./../../components/Footer/Footer"
import FixedFooter from "../../components/Footer/fixedFooter";
import ZomatoOffer from "../../utils/zomatoOffer";



const RestaurantDetails = () => {





    return (
        <>
            <NavBar />
            <Gallery />
            <OrderTitleComponent />

            <Footer />
            <FixedFooter />
            <ZomatoOffer />
        </>
    )
}



export default RestaurantDetails;