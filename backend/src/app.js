import express from 'express'
import config from './config'


//Modulo Persona
import asistenciaLaboralRoutes from './routes/moduloPersona/asistenciaLaboral.routes.js'

const app=express()

   
//settings

app.set('port', config.PORT || 3000)

//Middlewares
app.use(express.json());  // Para que utilice antes que lleguen las rutas express.json()
app.use(express.urlencoded({extended: false}));


app.use(asistenciaLaboralRoutes);

export default app;
