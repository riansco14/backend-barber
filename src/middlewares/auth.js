import jwt from 'jsonwebtoken';
import {promisify} from 'util';

import authConfig from "../config/auth";

export default async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({error: "Token not provided"});
    }
    const token = authHeader.split(' ')[1];//Bearer eyJhbGciOi | 0 -> "Bearer" 1-> token jwt

    console.log(token);

    try {
        const decoded = await promisify(jwt.verify)(token, authConfig.secret); //promisify é utilizado pra quebrar promises em async/await
        //ele recebe a função e retorna outra função compativel com isso 
        // console.log(decoded);//{ id: 6, iat: 1585363007, exp: 1585967807 } id e data
        req.userId= decoded.id; //passar para os proximos metodos dps do midleware para utilizarem
        return next();
    } catch (error) {
        return res.status(401).json({error: "Token invalid"});
    }



    return next();

}