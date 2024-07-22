const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path'); // Asegúrate de importar path
const app = express();

const PORT = process.env.PORT || 5000;

// Servir archivos estáticos desde la carpeta build
app.use(express.static(path.join(__dirname, '..', '..', 'build')));

// Ruta para manejar todas las solicitudes y servir index.html
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'build', 'index.html'));
});

// Configurar CORS
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5000'); // Cambia esto en producción
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
const uri = "mongodb+srv://mancillanixon7:um8xTFnPbq9eMwnx@systemdsi.mouqdaf.mongodb.net/midata?retryWrites=true&w=majority";
mongoose.connect(uri)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error de conexión a MongoDB:', err));

// Modelo de Mongoose
const UserSchema = new mongoose.Schema({
    apellido: String,
    correo: String
});

const User = mongoose.model('User', UserSchema);

// Ruta para guardar usuario
app.post('/api/usuarios', async (req, res) => {
    const { nombre, apellido, correo } = req.body;
    const nuevoUsuario = new User({ nombre, apellido, correo });

    try {
        await nuevoUsuario.save();
        res.status(201).json({ message: 'Usuario guardado exitosamente' });
        console.log("registrado");
    } catch (error) {
        res.status(500).json({ message: 'Error al guardar el usuario', error });
        console.log("no registrado");
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});