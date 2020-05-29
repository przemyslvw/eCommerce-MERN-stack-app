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

module.exports = router;