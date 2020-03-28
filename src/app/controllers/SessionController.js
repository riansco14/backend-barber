import jwt from 'jsonwebtoken';

import User from "../models/User";


class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        const user = await User.findOne({ where: {"email":email} });

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: "Password dos not match" });
        }

        const { id, name } = user;
        return res.json({
            user: {
                id,
                name,
                email
            },
            // {payload(informações extras)} | nome da aplicação ou versão | configurações do token, tipo validade
            //appbarber is : 61c97330d536c5f487685399820ee159
            token: jwt.sign({id},'61c97330d536c5f487685399820ee159',{
                expiresIn: '7d'
            })
        });
    }
}

export default new SessionController();