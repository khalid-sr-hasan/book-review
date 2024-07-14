import React from "react";
import BookSingleCard from "../BookSingleCard/BookSingleCard";
import useBookData from "../../hooks/useBookData";

function AllBookCard() {
    const bookData = useBookData();
    console.log(bookData);

    return (
        <div className="container mx-auto my-10">
            <div className="grid gap-7 grid-cols md:grid-cols-2 lg:grid-cols-3">
                {bookData.map((bookItems) => (
                    <BookSingleCard
                        key={bookItems.bookId}
                        bookItems={bookItems}
                    />
                ))}
            </div>
        </div>
    );
}

export default AllBookCard;
