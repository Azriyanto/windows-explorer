import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Gallery = db.define('pictures',{
    name: DataTypes.STRING,
    image: DataTypes.STRING, 
    url: DataTypes.STRING,
},{
    freezeTableName:true
});

export default Gallery;

(async()=>{
    await db.sync();
})();