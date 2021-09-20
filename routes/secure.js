const express = require('express');
const asyncMiddleware = require('../middleware/asyncMiddleware');
const UserModel = require('../models/userModel');

const router = express.Router();

router.post('/submit-money', asyncMiddleware(async (req, res, next) => {
    const { email, money } = req.body;
    await UserModel.updateOne({ email }, { money: money });
    res.status(200).json({ status: 'ok' });
}));

router.get('/totalMoney', asyncMiddleware(async (req, res, next) => {
    const users = await UserModel.find({}, 'name money country -_id').sort({ money: -1 }).limit(100);
    res.status(200).json(users);
}));

router.get('/getMoney', asyncMiddleware(async (req, res, next) => {
    const users = await UserModel.find({}, 'money -_id').sort({ money: -1 }).limit(100);
    res.status(200).json(users);
}));
module.exports = router;