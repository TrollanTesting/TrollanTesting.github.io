const express = require('express');
const router = express.Router();
const ContactController = require('../controllers/contactController');

const contactController = new ContactController();

router.post('/submit', contactController.handleContactForm.bind(contactController));

module.exports = router;