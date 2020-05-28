const express = require('express');
const BookTable = require('../modules/BookTable');
const { check,validationResult } = require('express-validator');
const router = express.Router();

//Pobranie wszystkich booktables
router.get(
    '/',
    async(req,res) => {
        //Pobranie wszystkich booktables z BookTable Schema
        const booktables = await BookTable.find();
        //Wyświetlenie
        res.json(booktables);
    }
);

//Szukanie booktable po id
router.get(
    '/booktable/:booktable_id',
    async(req,res) => {
        const booktable = await BookTable.findOne({ _id: req.params.booktable_id });
        res.json(booktable);
    }
)

//Tworzenie booktable
router.post(
    '/',
    [
        check('name','Name is required').not().isEmpty(),
        check('email','E-mail is required').isEmail(),
        check('phoneNum','Phone Number is required').isLength({ min: 9 }),
        check('people','Number of people is required').not().isEmpty(),
        check('date','Date is required').not().isEmpty(),
    ],
    async(req,res) => {
        try {
            //Pobranie danych z body
            const { name,
                email,
                phoneNum,
                people,
                date } = req.body;
            //Szukanie booktable po e-mailu
            const booktable = await BookTable.findOne({ email });
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({ errors: errors.array() });
            }
            //Sprawdzanie, czy już istnieje taki booktable
            if(booktable){
                return res.status(401).json({ msg: "There is already book table with this e-mail" });
            }
            //Stworzenie nowego booktable
            bookTable = new BookTable({
                name,
                email,
                phoneNum,
                people,
                date
            });
            //Zapisanie w bazie danych
            await bookTable.save();
            //res.send('Reservation form completed');
        } catch (error) {
            console.log(error.message);
            return res.status(500).json({ msg: "Server Error..." });
        }
    }
)

//Wyeskportowanie naszych żądań poprzez router
module.exports = router;