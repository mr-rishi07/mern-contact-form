const express = require('express');
const contactModel = require('../schema/contact.schema');
const sendEmail = require('../send_mail/mail');
const router = express.Router();

router.post('/message', async (req, res) => {
    console.log(req.body)
    const {name, email, subject, message} = req.body;

    if(!name || !email || !subject || !message){
        return res.status(404).send({
            success:false,
            message:"All feilds are required",
        })
    }

    if(subject.length<5){
        return res.status(400).send({
            success:false,
            message:"subject must be atleast 5 character",
        })
    }

    if(message.length<10){
        return res.status(400).send({
            success:false,
            message:"message must be atleast 10 character",
        })
    }

    try {
        await contactModel.create(req.body);
        await sendEmail(name, email, message);
        res.status(201).send({
            success:true,
            message:"Send message successfully, I will try to talk to you as soon as possible."
        })
    } catch (error) {
        console.error(error)
        res.status(500).send({
            success:false,
            message:"Internal Server error"
        })
    }
})

module.exports = router;