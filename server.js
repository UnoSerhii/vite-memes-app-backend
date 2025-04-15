import express from 'express';
import cors from 'cors';
import {Sequelize, Model, DataTypes} from 'sequelize';
import {seed} from "./dbSeed.js";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});

class Mem extends Model {
}

Mem.init({
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    likes: DataTypes.NUMBER,
}, {sequelize, modelName: 'mem'});

sequelize.sync();

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/memes', async (req, res) => {
    const memes = await Mem.findAll();
    res.json(memes);
});

app.patch('/api/memes/:id', async (req, res) => {
    const mem = await Mem.findOne({where: {id: req.params.id}});
    if (!mem) return null;

    const updatedMem = await mem.update(req.body, {returning: true});
    res.json(updatedMem);
})

// seed(Mem)

app.listen(port, () => {
    console.log(`Сервер запущено на порту ${port}`);
});