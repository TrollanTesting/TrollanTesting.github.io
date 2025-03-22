class ContactController {
    async handleContactForm(req, res) {
        const { name, email, message } = req.body;

        // Validate input
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Set up email options
        const mailOptions = {
            from: email,
            to: process.env.RECEIVER_EMAIL, // Use an environment variable for the receiver's email
            subject: `New contact message from ${name}`,
            text: message,
            replyTo: email,
        };

        try {
            // Send email using nodemailer
            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
                auth: {
                    user: process.env.SMTP_USER,
                    pass: process.env.SMTP_PASS,
                },
            });

            await transporter.sendMail(mailOptions);
            return res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
        }
    }
}

export default ContactController;