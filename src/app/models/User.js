import Sequelize, { Model } from 'sequelize';

class User extends Model {
  //ele só inicia uma vez esse model e manda a sequelize(a conexão do db), que n pode ser renomeada
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
  }
}

export default User;