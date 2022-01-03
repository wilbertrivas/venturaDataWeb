export const queries= {
    listarAsistenciaLaboral : "SELECT * FROM [dbo].[asistencia_laboral]",
    AnadirAsistenciaLaboral: "INSERT INTO [dbo].[asistencia_laboral] ([al_cdgo],[al_desc] ,[al_estad] ) VALUES ("+
    "(SELECT (CASE WHEN (MAX([al_cdgo]) IS NULL) THEN 1 ELSE (MAX([al_cdgo])+1) END)AS [al_cdgo] FROM [dbo].[asistencia_laboral]),"+
    "@name, @estado)",
    buscarAsistenciaLaboral: "SELECT [al_cdgo]"+
    ",[al_desc]"+
    ",[al_estad]"+
    "FROM [dbo].[asistencia_laboral] WHERE [al_cdgo]= @codigo",deleteAsistenciaLaboral: "DELETE FROM [dbo].[asistencia_laboral] WHERE [al_cdgo]=@codigo",
    countAsistenciaLabolal: "SELECT COUNT([al_cdgo]) FROM [dbo].[asistencia_laboral]",
    updateAsistenciaLaboral:"UPDATE  [dbo].[asistencia_laboral] SET [al_desc] =@descripcion, [al_estad]=@estado WHERE  [al_cdgo]=@codigo"
}