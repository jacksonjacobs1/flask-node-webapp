import express from 'express';
import ip from 'ip';

const app = express()
const port = 3000
const ipAddress = ip.address();


app.use('/static', express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Example app listening at ${ipAddress}:${port}`)
})