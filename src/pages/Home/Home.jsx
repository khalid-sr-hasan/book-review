import React from "react";
import Banner from "../../components/Banner/Banner";
import useBookData from "../../hooks/useBookData";
import AllBookCard from "../../components/ALLBookCard/AllBookCard";

const Home = () => {
    const bookData = useBookData();
    return (
        <div>
            <Banner />
            <AllBookCard />
        </div>
    );
};

export default Home;
