
var pool= require('./bd');


// lista novdades
async function getNovedades (){
    
        var query = 'select * from novedades';
        var rows =  await pool.query(query);
        return rows;
   
}
// borra novedades
async function deleteNovedadesById(id){
var query = 'delete from novedades where id=?';
var rows =await pool.query(query,[id]);
return rows;

}

// Insertar novedad
async function insertNovedad(obj){
try {
        var query = "insert into novedades set ?";
        var rows = await pool.query(query,[obj])
        return rows

        
} catch (error) {
        console.log(error);
        throw error;
}

}


module.exports={getNovedades,deleteNovedadesById, insertNovedad}
