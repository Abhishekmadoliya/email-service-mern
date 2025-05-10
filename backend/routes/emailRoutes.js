const express = require('express');
const nodemailer = require('nodemailer');
const EmailLog = require('../models/EmailLog');
const router = express.Router();

// Send Email
router.post('/send', async (req, res) => {
    const { emails, userId } = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
});

    emails.forEach(async (email) => {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your Subject',
            text: 'Your Email Body',
        });

        const emailLog = new EmailLog({ userId, companyEmail: email });
        await emailLog.save();
    });

    res.status(200).json({ message: ''})
