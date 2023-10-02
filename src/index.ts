import express from 'express';
import { scheduleHourlyEvent } from './schedule';

const app = express();
scheduleHourlyEvent();

app.set('json spaces', 2);

app.get('/', (_, res) => {
  res.json({ message: 'Hello World' });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, () => {
  console.log(`Started on: http://localhost:${PORT}`);
});
