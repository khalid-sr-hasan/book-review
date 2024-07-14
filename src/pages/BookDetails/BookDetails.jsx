import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBookData from "../../hooks/useBookData";
import { checkWishList, saveToLocalStorage } from "../../utils/localStorage";

function BookDetails() {
    const { id } = useParams();
    const bookData = useBookData();
    const [BookDetails, setBookDetails] = useState([]);

    useEffect(() => {
        if (bookData) {
            const matchBook = bookData.find((item) => item.bookId == id);
            setBookDetails(matchBook);
        }
    }, [bookData]);

    const {
        author,
        bookName,
        category,
        image,
        publisher,
        rating,
        review,
        tags,
        totalPages,
        yearOfPublishing,
    } = BookDetails || [];

    const handleRead = () => {
        saveToLocalStorage(BookDetails);
        console.log("click");
    };

    const handleWishlist = () => {
        checkWishList(BookDetails);
        console.log("click");
    };

    return (
        <div className="container mx-auto py-10">
            <div className="flex gap-5 flex-col md:flex-row">
                <div className="bg-gray-300 py-10 flex justify-center items-center rounded-lg  md:w-1/2">
                    <img src={image} alt="" className="md:w-96 rounded-lg" />
                </div>

                <div className="rounded-md px-5  md:w-1/2">
                    <h2 className="text-3xl mb-5 font-bold">{bookName}</h2>
                    <p className="text-xl mb-3">By : {author}</p>
                    <hr />
                    <p className="text-xl my-3">{category}</p>
                    <hr />
                    <p className="mt-3">
                        <span className="font-bold">Review : </span>
                        {review}
                    </p>
                    <div className="flex my-7 flex-wrap gap-4 items-center">
                        <h5 className="font-bold">Tag</h5>

                        {tags?.map((item, idx) => (
                            <button
                                key={idx}
                                className="text-[#23BE0A] bg-[#22be0a1e] py-1 px-4 rounded-full"
                            >
                                #{item}
                            </button>
                        ))}
                    </div>
                    <hr />
                    <div className="mt-5 flex gap-7">
                        <div className="space-y-3">
                            <p>Number of Pages :</p>
                            <p>Publisher :</p>
                            <p>Year of Publishing :</p>
                            <p>Rating :</p>
                        </div>
                        <div className="space-y-3 font-bold">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>
                    <div className="space-x-6 mt-8">
                        <button
                            onClick={handleRead}
                            className="btn btn-outline"
                        >
                            Read
                        </button>
                        <button
                            onClick={handleWishlist}
                            className="btn bg-[#59C6D2] text-white hover:bg-black"
                        >
                            WishList
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookDetails;
