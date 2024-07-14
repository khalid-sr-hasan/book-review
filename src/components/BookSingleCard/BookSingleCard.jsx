import React from "react";
import { Link } from "react-router-dom";

function BookSingleCard({ bookItems }) {
    const {
        author,
        bookId,
        bookName,
        category,
        image,
        publisher,
        rating,
        review,
        tags,
        totalPages,
        yearOfPublishing,
    } = bookItems || {};

    return (
        <Link to={`/book-details/${bookId}`}>
            <div className="card p-7 bg-base-100 border shadow-xl">
                <div className="p-7 rounded-lg flex justify-center bg-gray-300">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl md:h-48"
                    />
                </div>
                <div className="mt-7">
                    <div className="flex flex-wrap gap-4 items-center">
                        {tags.map((item, idx) => (
                            <button
                                key={idx}
                                className="text-[#23BE0A] bg-[#22be0a1e] py-1 px-4 rounded-full"
                            >
                                #{item}
                            </button>
                        ))}
                    </div>
                    <div className="space-y-3 my-3">
                        <h2 className="card-title md:text-2xl lg:text-3xl">
                            {bookName}
                        </h2>
                        <p className="font-semibold">By: {author}</p>
                    </div>
                    <div className="card-actions border-t-2 border-dashed py-3 flex justify-between">
                        <h5>{category}</h5>
                        <h5>{rating}</h5>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default BookSingleCard;
