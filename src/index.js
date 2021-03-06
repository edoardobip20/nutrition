import 'dotenv/config';
import express from 'express';
import cors from 'cors';
 
console.log('Hello Node.js project.');
 
console.log(process.env.MY_SECRET);
console.log(process.env.PORT);

const app = express();
app.use(cors());
 
app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.get('/', (req, res) => {
return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
return res.send('Received a DELETE HTTP method');
});

app.listen(process.env.PORT, () =>
console.log(`Example app listening on port ${process.env.PORT}!`),
);


