import express from 'express';
import userRoutes from './routes/userRoutes.ts';
import quizRoutes from './routes/quizRoutes.ts';
// import flashcardRoutes from './routes/flashcardRoutes.ts';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', userRoutes);
// app.use('/api', flashcardRoutes);
app.use('/api', quizRoutes);

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop via localhost 3000/.');
});
