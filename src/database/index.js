import Sequelize from 'sequelize';
import databaseConfig from '../config/database'

import User from '../app/models/User';

const models= [User];

class Database{
    constructor() {
        this.init();
    }
    
    init(){
        console.log("passou aqui");
        this.connection = new Sequelize(databaseConfig);
        models.map(model=>model.init(this.connection));
        
    }
}

export default new Database();