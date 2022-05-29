import express from 'express';
import bodyParser from 'body-parser';

import itemsRoutes from './routes/items.js'
import cors from 'cors'

const app = express();
const PORT = 5000;

app.use(cors({
    origin: 'http://localhost:3000', optionsSuccessStatus: 200
}));

app.use(bodyParser.json());

app.use('/items', itemsRoutes)

app.get('/', (req, res) => {
    res.send('Hello from homepage!');
})
app.get('/items/:id', (req, res) => {
    res.send('item'+req.params.id);
})


app.listen(PORT, ()=> console.log(`Server Running on port: http://localhost:${PORT}`));
