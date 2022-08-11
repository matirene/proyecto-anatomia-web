const express = require('express');
const path = require('path');

const app = express();

//Aca le decimos a express cual sera nuestra carpeta de archivos publicos y estaticos.
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
