import { useEffect, useState } from "react";
import Card from "../../components/Card";

const Home = () => {

    const [item, setItem] = useState ([])

    useEffect( () => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(res => res.json() )
        .then(data => setItem(data))
    },[] )

    return <div className="grid gap-4 grid-cols-4 w-full max-w-screen-xl grid bg-green-400">
        {item?.map( (item) => (
            <Card data={item} key={item.id} />
        ))

        }
    </div>;
};

export default Home;
