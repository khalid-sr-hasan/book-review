import React, { useEffect, useState } from "react";

const useBookData = () => {
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        const allBooks = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            setBookData(data);
        };
        allBooks();
    }, []);

    return bookData;
};

export default useBookData;
