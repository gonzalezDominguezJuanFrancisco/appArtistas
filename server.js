  const express = require('express')
const app = express()
app.use(express.static('./dist/'));
app.get('/*', function(req, res) {
 res.sendFile('index.html', {root: 'dist/procanciones3/'}
 );
});
const port = 3500;
app.listen(process.env.PORT || 3500), () => {
 console.log(`Example app listening at http://localhost:${port}`)
}