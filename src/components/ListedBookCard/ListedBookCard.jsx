import React from "react";

function ListedBookCard({ books }) {
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
    } = books || [];
    return (
        <div className="">
            <div className="card card-side flex gap-4 flex-col md:flex-row bg-base-100 shadow-xl p-4 border">
                <div className="flex justify-center">
                    <img className="rounded-lg" src={image} alt="Movie" />
                </div>
                <div className="card-body px-2">
                    <h2 className="text-3xl font-bold">{bookName}</h2>
                    <p className="font-semibold">By : {author} </p>
                    <div className="flex flex-wrap gap-4 items-center">
                        <h5 className="font-bold">Tag</h5>
                        {tags?.map((item, idx) => (
                            <button
                                key={idx}
                                className="text-[#23BE0A] bg-[#22be0a1e] py-2 px-4 rounded-full"
                            >
                                #{item}
                            </button>
                        ))}
                        <p>Year of Publishing: {yearOfPublishing}</p>
                    </div>
                    <p className="flex gap-4 text-gray-500">
                        <span>Publisher: {publisher}</span>{" "}
                        <span>Page: {totalPages}</span>
                    </p>
                    <hr />
                    <div className="flex flex-wrap gap-2 md:gap-5">
                        <button className="btn rounded-full">
                            Category: {category}
                        </button>
                        <button className="btn rounded-full">
                            Category: Classic
                        </button>
                        <button className="btn rounded-full">
                            Category: Classic
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListedBookCard;
