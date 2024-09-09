



const DiscountDine = () => {



    return (
        <div className="p-4 md:px-16 mr-16">
            <div
                className="hidden md:flex flex-col relative rounded-3xl bg-cover bg-center h-[45vh] z-49"
                style={{
                    backgroundImage: 'url("https://www.usatoday.com/gcdn/presto/2022/08/19/USAT/f2871962-4672-46f8-b5a2-b54a670307b4-GettyImages-1149135424.jpg?crop=2021,1137,x0,y170&width=660&height=371&format=pjpg&auto=webp")',
                }}
            >
                <div
                    className="absolute inset-0 rounded-3xl bg-black opacity-90 w-1/3"

                ></div>
                <div
                    className="absolute inset-0 rounded-3xl bg-black opacity-70 w-62"

                ></div>
                <div
                    className="absolute text-white text ml-16 mt-14 "
                >
                    <h1 className="text-2xl font-bold">Get Up to</h1>
                    <h1 className="text-6xl font-bold">50% <span className="text-2xl">OFF</span></h1>
                    <p className="text-sm text-gray-400 mt-2">on your dining bills with Zomato</p>
                    <button className="p-2 bg-rose-500 text-white rounded-lg mt-5">check out all the restaurants</button>
                </div>
            </div>
        </div>

    );
}
export default DiscountDine