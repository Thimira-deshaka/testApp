module.exports = (sequelize, DataTypes) => {
    const Posts = sequelize.define("Posts", {
        title: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            alloNull: false,
        },
        userNAme: {
            type: DataTypes.STRING,
            alloNull: false,
        },
    });
    return Posts
}