export const saveToLocalStorage = (data) => {
    const saveData = JSON.parse(localStorage.getItem("books")) || [];

    const exist = saveData.find((item) => item.bookId === data.bookId);

    if (!exist) {
        saveData.push(data);
        localStorage.setItem("books", JSON.stringify(saveData));
        alert("successfully add the book");
    } else {
        alert("already read book");
    }
    console.log(saveData);
};

export const getDataToLocalStorage = () => {
    const getData = JSON.parse(localStorage.getItem("books")) || [];
    return getData;
};

export const checkWishList = (data) => {
    const readData = getDataToLocalStorage();

    const saveWishListToLocal =
        JSON.parse(localStorage.getItem("wishList")) || [];

    const existWishList = saveWishListToLocal.find(
        (item) => item.bookId == data.bookId
    );
    const existReadBook = readData.find((item) => item.bookId == data.bookId);

    if (!existWishList && !existReadBook) {
        saveWishListToLocal.push(data);
        localStorage.setItem("wishList", JSON.stringify(saveWishListToLocal));
        alert("wishList book add");
    } else if (existReadBook) {
        alert("book already read");
    } else {
        alert("wishlist already added");
    }
};

export const getWishList = () => {
    const getWishData = JSON.parse(localStorage.getItem("wishList")) || [];
    return getWishData;
};
