const bcrypt = require("bcrypt");
const { User } = require('../db/models');
const { v4: uuidv4 } = require('uuid');
const mailServise = require('../service/mail-service');

class UserService {
    async signup(username, email, password) {
        const candidate = await User.findOne({ where: { email } });
        if (candidate) {
            res.status(400).json({ message: "User with this email already exists" });
            return;
        }
            const hashedPassword = await bcrypt.hash(password, 3);
            const activationLink = uuidv4()
            const newUser = await User.create({
                username,
                email,
                password: hashedPassword,
                activationLink
            });
            await mailServise.sendActivationMail(email, activationLink);

            req.session.userId = newUser.id;
            res.status(200).json({ message: "Success" });
    }
}

module.exports = new UserService();