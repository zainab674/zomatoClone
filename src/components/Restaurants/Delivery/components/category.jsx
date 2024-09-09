import FoodCategories from '../../../../objects/foodCategories';
import TopBrands from '../../../../objects/topBrands';
import CategoryCrousel from '../../../../utils/categoryCrousel';




const Category = () => {



    return (

        <div className='mt-10'>

            <h1 className='text-3xl font-medium md:mx-20 mb-2'> Inspiration For your first Order</h1>
            <CategoryCrousel Menu={FoodCategories} />
            <h1 className='text-3xl font-medium md:mx-20 mt-10 mb-2'> Top Brands For You</h1>
            <CategoryCrousel Menu={TopBrands} />
        </div>

    )
}

export default Category;