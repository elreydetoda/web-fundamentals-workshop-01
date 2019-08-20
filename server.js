const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello ITIS 6177!'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
