import express from 'express';
import cors from 'cors';
import menuRoute from '../backend/routers/menuRouter.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(menuRoute);

app.listen(4000, (err) => {
  err && console.log(err);
  console.log('server is running at port 4000');
});
