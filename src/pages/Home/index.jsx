import { useContext } from "react";
import Card from "../../components/Card";
import ProductDetail from "../../components/ProductDetail";
import { ShoppingCartContext } from "../../Context";

const Home = () => {
    const context = useContext(ShoppingCartContext);

    const renderView = () => {
        if (context.filteredItems?.length > 0) {
            return context.filteredItems?.map((item) => (
                <Card data={item} key={item.id} />
            ));
        } else {
            return (
                <p className="absolute left-0 right-0 text-center">
                    {" We don't have anything :( "}
                </p>
            );
        }
    };

    return (
        <>
            <div className="flex justify-center items-center w-96 relative mb-4 ">
                <h1 className="font-medium text-xl">Exclusive products</h1>
            </div>
            <input
                className="rounded-lg border border-black w-80 p-4 mb-6 focus:outline-none"
                type="text"
                placeholder="Search a product"
                onChange={(e) => context.setSearchByTitle(e.target.value)}
            />
            <div className="grid justify-center gap-4 grid-cols-4 w-full max-w-screen-xl">
                {renderView()}
            </div>
            <ProductDetail />
        </>
    );
};

export default Home;
