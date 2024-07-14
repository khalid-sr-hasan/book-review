import React from "react";

const Banner = () => {
    return (
        <div className="container mx-auto my-5">
            <div className="hero bg-base-200 rounded-lg py-20 md:px-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="md:w-2/5 flex justify-center">
                        <img
                            src="/images/banner.png"
                            className="max-w-sm rounded-lg"
                        />
                    </div>
                    <div className="md:w-3/5">
                        <h1 className="text-5xl font-bold">
                            Books to freshen up your bookshelf
                        </h1>
                        <p className="py-6">
                            Books to freshen up your bookshelf
                        </p>
                        <button className="btn bg-[#23BE0A] text-white font-bold">
                            View The List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
