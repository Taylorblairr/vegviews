module.exports = (sequelize, DataTypes) => {

    const Review = sequelize.define("review", {
        rating: {
            type: DataTypes.INTEGER
        },
        decription:{
        type: DataTypes.TEXT
        },
        published: {
            type: DataTypes.BOOLEAN
        }
    })
    
    return Review
    
    }