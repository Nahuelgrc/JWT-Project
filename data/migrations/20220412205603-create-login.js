"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Logins",
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        username: {
          type: Sequelize.STRING,
        },
        password: {
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      },
      {
        hooks: {
          beforeCreate: async (login) => {
            if (login.password) {
              const salt = await bcrypt.genSaltSync(10, "a");
              login.password = bcrypt.hashSync(login.password, salt);
            }
          },
          beforeUpdate: async (login) => {
            if (login.password) {
              const salt = await bcrypt.genSaltSync(10, "a");
              login.password = bcrypt.hashSync(login.password, salt);
            }
          },
        },
        instanceMethods: {
          validPassword: (password) => {
            return bcrypt.compareSync(password, this.password);
          },
        },
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Logins");
  },
};
