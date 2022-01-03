import {getConnection,sql,queries} from '../../database';

export const getAsistenciaLaboral=async (req, res)=>{
    try{
        const pool=await getConnection();
        const result =await pool.request().query(queries.listarAsistenciaLaboral);
        console.log(result);
        res.json(result.recordset);
    }catch(err){
        res.status(500);//Error interno en el servidor que
        res.send(error.message);
    }
};

export const createAsistenciaLaboral= async (req,res)=>{
    const {descripcion}=req.body;
    if(descripcion != null){
        try{
            const pool =await getConnection();
            await pool.request()
            .input("name",sql.VarChar,descripcion )
            .input('estado', sql.Bit, 1)
            .query(queries.AnadirAsistenciaLaboral);
            res.json(descripcion+' fue creada');//mensaje enviado vía json
        }catch(err){
            res.status(500);
            res.send(err.message);
        }
        
    }else{
        return res.status(400).json({msg:'Bad Request Fill all'});
    }   
};

export const getAsistenciaLaboralPorCodigo = async(req, res)=>{
    try{
        const {codigo} =req.params;
        const pool=await getConnection();
        const result=await pool.request()
            .input("codigo",sql.Int,codigo)
            .query(queries.buscarAsistenciaLaboral);
        console.log(result);
        res.json(result.recordset[0]);
    }catch(err){
        res.status(500);//Error interno en el servidor que
        res.send(error.message);
    }   
};

export const deleteAsistenciaLaboralPorCodigo = async(req, res)=>{
    try{
        const {codigo} =req.params;
        const pool=await getConnection();
        const result=await pool.request()
            .input("codigo",codigo)
            .query(queries.deleteAsistenciaLaboral);
        console.log(result);
        res.json(result.recordset);
    }catch(err){
        res.status(500);//Error interno en el servidor que
        res.send(error.message);
    }   
};

export const GetTotalAsistenciaLaboral = async(req, res)=>{
    try{
        const pool=await getConnection();
        const result=await pool.request()
            .query(queries.countAsistenciaLabolal);
        console.log(result.recordset[0][""]);
        res.json(result.recordset[0][""]);
    }catch(err){
        res.status(500);//Error interno en el servidor que
        res.send(error.message);
    }   
};

export const updateAsistenciaLaboral= async(req, res)=>{
    const {descripcion, estado}=req.body;
    const {codigo}= req.params;
    try{
        if(codigo == null || descripcion==null|| estado==null){
            return res.status(400).json({msg:'Bad Request Fill all'});
        }else{
            const pool = await getConnection();
            await pool.request()
            .input("codigo", sql.Int, codigo)
            .input("descripcion", sql.VarChar, descripcion)
            .input("estado", sql.Bit, estado)
            .query(queries.updateAsistenciaLaboral)
            res.json({codigo, descripcion, estado});

        }
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
};