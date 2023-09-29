
//importa a porta do server
const app = require('./app')

// definir a porta do servidor 
const PORT = app.get('port')
// testar servidor 
app.listen(PORT, () => {
    console.log(`Running at port ${PORT}`);
})