import {Router} from 'express';
import {getAsistenciaLaboral,createAsistenciaLaboral,getAsistenciaLaboralPorCodigo,deleteAsistenciaLaboralPorCodigo,GetTotalAsistenciaLaboral,updateAsistenciaLaboral} 
            from '../../controllers/moduloPersona/asistenciaLaboral.controller';

const router = Router();
router.get('/asistenciaLaboral/:codigo',getAsistenciaLaboralPorCodigo);
router.get('/asistenciaLaboral',getAsistenciaLaboral); 
router.get('/asistenciaLaboralCount',GetTotalAsistenciaLaboral); 
router.post('/asistenciaLaboral',createAsistenciaLaboral); 
router.delete('/asistenciaLaboral/:codigo',deleteAsistenciaLaboralPorCodigo);
router.put('/asistenciaLaboral/:codigo',updateAsistenciaLaboral);


export default router;  