const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
const BasketItem = require('../modules/BasketItem');
const { check,validationResult } = require('express-validator');

//Dodawanie przedmiotu do koszyka
router.post(
    '/',
    [
        check('name', "Name is required").not().isEmpty(),
        check('price', 'Price is required').not().isEmpty(),
        check('count', "Count is required").not().isEmpty()
    ],
    //Sprawdzanie czy użytkownik jest zalogowany, dodanie tokenu
    auth,
    async(req,res) => {
        try {
            //Pobieranie tokenu z auth
            const user_id = req.user._id;
            //Pobieranie danych z body
            const { name,price,count,sku } = req.body;
            //Sprawdzanie błędów podanych od użytkownika
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(401).json({ errors: errors.array() });
            }
            //Dodanie obiektu naszego produktu
            const basketItem = new BasketItem({
                user_id,
                name,
                price,
                count,
                sku
            });
            //Zapisywanie w bazie danych
            await basketItem.save();
            res.json('Sukcess');
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error" });
        }
    }
)

//Pobranie produktów użytkownika
router.get (
    '/',
    //Sprawdzanie czy użytkownik jest zalogowany, dodanie tokenu
    auth,
    async(req,res) => {
        try {
            //Pobranie wszystkich danych z BasketItem
            const basketItems = await BasketItem.find();
            //Szukanie produktów naszego użytkownika
            const output = basketItems.filter(item => item.user_id === req.user._id);
            //Wyświetlenie ich
            res.json(output);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error" });
        }
    }
)

//Usunięcie produktu
router.delete(
    // Podanie id naszego produktu
    '/:item_remove',
    //Sprawdzanie czy użytkownik jest zalogowany, dodanie tokenu
    auth,
    async(req,res) => {
        try {
            //Pobranie wszystkich danych z BasketItem
            const basketItems = await BasketItem.find();
            //Usunięcie produktu poprzez podane id
            await BasketItem.findByIdAndDelete(req.params.item_remove);
            //Wyświetlenie
            res.json(basketItems);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error" });
        }
    }
);

//Sumowanie przedmiotów
router.put(
    '/sum_prices',
    //Sprawdzanie czy użytkownik jest zalogowany, dodanie tokenu
    auth,
    async(req,res) => {
        try {
            //Ustalenie początkowej sumy
            let sum = 0;
            //Pobranie wszystkich danych z BasketItem
            const basketItems = await BasketItem.find();
            //Szukanie produktów naszego użytkownika
            const userBasketItems = basketItems.filter(item => item.user_id === req.user._id);
            //Sumowanie produktów
            userBasketItems.map(item => sum += item.price);
            //Wyświetlenie
            res.json(sum);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error" });
        }
    }
)

//Zmiana ilości produktu
router.put(
    //Pobranie id oraz ilości
    '/changeCount/:id/:new_count',
    //Sprawdzanie czy użytkownik jest zalogowany, dodanie tokenu
    auth,
    async(req,res) => {
        try {
            //Szukanie itemu z koszyka po podanym id
            let basketItem = await BasketItem.findById(req.params.id);
            //Zmiana ilości
            basketItem.count = req.params.new_count;
            //Zapisanie
            await basketItem.save();
            //Wyświetlenie
            res.json(basketItem);
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
)

module.exports = router;