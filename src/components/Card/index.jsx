const Card = () => {
    return( 
        <div className="bg-slate-500 cursor-pointer w-56 h-60 rounded-lg ">
            <figure className=" relative mb-2 w-full h-4/5 "> 
                <span className="absolute left-2 bottom-0 bg-lime-500/60 text-black text-xs m-2 rounded-lg px-3 py-0.5">Electronics</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://noblex.com.ar/media/catalog/product/cache/c8f6a96bef9e9f64cd4973587df2520f/h/p/hp600gm_iafbsm0000_1200x922.jpg" alt="Headphones"/>
                <div className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1">+</div>
            </figure>
            <p className="flex justify-between">
                <span className="text-sm font-light" >Headphones</span>
                <span className="text-lg font-medium">$300</span>
            </p>
        </div>

    );
}

export default Card