import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ListedBookCard from "../../components/ListedBookCard/ListedBookCard";
import { getDataToLocalStorage, getWishList } from "../../utils/localStorage";

const ListedBooks = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const getReadBooks = getDataToLocalStorage();

    const getWishListBook = getWishList();

    const [year, setYear] = useState([]);
    useEffect(() => {
        setYear(getReadBooks);
    }, []);
    const handleSortYear = () => {
        const year = getReadBooks.sort((a, b) => {
            return a.yearOfPublishing - b.yearOfPublishing;
        });
        setYear(year);
    };

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        console.log("Selected option:", selectedValue);
        // Add your onClick logic here based on selectedValue
        switch (selectedValue) {
            case "1":
                const rating = getReadBooks.sort((a, b) => {
                    return a.rating - b.rating;
                });
                setYear(rating);
                break;
            case "2":
                const pages = getReadBooks.sort((a, b) => {
                    return a.totalPages - b.totalPages;
                });
                setYear(pages);
                break;
            case "3":
                const year = getReadBooks.sort((a, b) => {
                    return a.yearOfPublishing - b.yearOfPublishing;
                });
                setYear(year);
                break;
            default:
                console.log("Invalid option");
        }
    };

    console.log(getReadBooks);
    return (
        <div className="container mx-auto">
            <div className="p-5 mt-5 bg-base-300 text-center rounded-lg">
                <h1 className="text-3xl font-bold">Book</h1>
            </div>
            <button onClick={handleSortYear}>handleSortYear</button>
            <div className="text-center my-7 flex justify-center border">
                <label className="form-control w-52 font-bold max-w-xs">
                    <select
                        defaultValue=""
                        className="select select-bordered"
                        onChange={handleChange}
                    >
                        <option disabled value="">
                            Sort By
                        </option>
                        <option value="1">Rating</option>
                        <option value="2">Number of pages</option>
                        <option value="3">Publisher year</option>
                    </select>
                </label>
            </div>

            <div>
                <Tabs
                    selectedIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <TabList>
                        <Tab>Reed Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="mt-8 flex flex-col gap-7">
                            {year.map((books) => (
                                <ListedBookCard
                                    key={books.bookId}
                                    books={books}
                                />
                            ))}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="mt-8 flex flex-col gap-7">
                            {getWishListBook.map((books) => (
                                <ListedBookCard
                                    key={books.bookId}
                                    books={books}
                                />
                            ))}
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ListedBooks;
