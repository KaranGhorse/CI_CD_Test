import express from 'express';

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get('/', (req, res) => {
  res.json({ message: 'Hello, From the server V2 \n' });
}
);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
