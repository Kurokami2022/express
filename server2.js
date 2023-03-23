const express = require('express');
const app = express();

const PORT = 2000;

app.get('/', (req, res) => {
    res.send('Hello Ebriwan!');
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});