import express from "express";

const router = express.Router();

const items = [
    {
        id: 1,
        itemId: "burger01",
        name: "Burger",
        price: "3.59",
        type: "burger",
        vegan: false,
        cheese: true,
        imgSrc:
            "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96777.png",
    },
    {
        id: 2,
        itemId: "pizza01",
        name: "Pizza",
        price: "9.50",
        type: "pizza",
        vegan: false,
        cheese: true,
        imgSrc:
            "https://pngimg.com/uploads/pizza/pizza_PNG43990.png",
    },
    {
        id: 3,
        itemId: "croissant01",
        name: "Croissant",
        price: "7.35",
        type: "sandwich",
        vegan: false,
        cheese: true,
        imgSrc:
            "https://pngimg.com/uploads/croissant/croissant_PNG46721.png",
    },
    {
        id: 4,
        itemId: "Potatochips01",
        name: "Potato chips",
        price: "3.50",
        type: "fried",
        vegan: true,
        cheese: false,
        imgSrc:
            "https://pngimg.com/uploads/potato_chips/potato_chips_PNG64.png",
    },
    {
        id: 5,
        itemId: "Hotdog01",
        name: "Hot dog",
        price: "2.99",
        type: "burger",
        vegan: false,
        cheese: false,
        imgSrc:
            "https://pngimg.com/uploads/hot_dog/hot_dog_PNG10207.png",
    },
    {
        id: 6,
        itemId: "Doubleburger01",
        name: "Double burger",
        price: "8.50",
        type: "burger",
        vegan: false,
        cheese: true,
        imgSrc:
            "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96783.png",
    },
    {
        id: 7,
        itemId: "Cheeseburger01",
        name: "Cheese burger",
        price: "3.99",
        type: "burger",
        vegan: true,
        cheese: true,
        imgSrc:
            "https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG96781.png",
    },
    {
        id: 8,
        itemId: "Friedchicken01",
        name: "Fried chicken",
        price: "4.50",
        type: "fried",
        vegan: true,
        cheese: false,
        imgSrc:
            "https://pngimg.com/uploads/fried_chicken/fried_chicken_PNG14101.png",
    },
    {
        id: 9,
        itemId: "Sandwich01",
        name: "Sandwich",
        price: "3.99",
        type: "sandwich",
        vegan: true,
        cheese: false,
        imgSrc:
            "https://pngimg.com/uploads/sandwich/sandwich_PNG19.png",
    },
    {
        id: 10,
        itemId: "Kebab01",
        name: "Kebab",
        price: "7.99",
        type: "fried",
        vegan: false,
        cheese: false,
        imgSrc:
            "https://pngimg.com/uploads/kebab/kebab_PNG53.png",
    },
    {
        id: 11,
        itemId: "Fries01",
        name: "Fries",
        price: "4.50",
        type: "fried",
        vegan: true,
        cheese: false,
        imgSrc:
            "https://pngimg.com/uploads/fries/fries_PNG43.png",
    },
    {
        id: 12,
        itemId: "Sauce01",
        name: "Sauce",
        price: "1.39",
        type: "sauce",
        vegan: true,
        cheese: false,
        imgSrc:
            "https://pngimg.com/uploads/sauce/sauce_PNG170.png",
    }
]

router.get('/', (req, res) => {
    console.log(items)
    res.send(items)
})

export default router;