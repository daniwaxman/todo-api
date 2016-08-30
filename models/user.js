module.exports = function (sequelize, DataTypes) {
    return sequelize.define('user', {
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
                len: [1, 250]
                // isString: function (value) {
                //     if (typeof value !== 'string') {
                //         throw new Error('Please enter valid email');
                //     }
                // }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: false,
            validate: {
                len: [5, 100]
            }
        }
    });
};