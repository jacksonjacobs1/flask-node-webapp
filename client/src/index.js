import express from 'express';
import ip from 'ip';

const app = express()
const port = 3000
const ipAddress = ip.address();


app.use('/public', express.static('public'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist'))
app.set('view engine', 'ejs');


// Begin routes
app.get('/', (req, res) => {
    const navbarItems = [
        { label: 'Projects', link: '/' },
        { label: 'About', link: '/' }
    ]

    res.render('index', {
        navbarItems: navbarItems
    });
})


app.listen(port, () => {
    console.log(`Example app listening at ${ipAddress}:${port}`)
})