import express from 'express';
import userRoutes from './routes/userRoutes.ts';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.');
});
