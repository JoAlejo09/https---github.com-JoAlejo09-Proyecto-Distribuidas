import { SalaModel } from "../models/sala_model.js";

export const getSalasPage = async (req,res)=>{
    try {
        const salas = await SalaModel.getAll();
        res.render('salas', {salas,error:null,success:null});

    }catch(error){
        res.status(500).send("Error al obtener las salas");
    }
};
export const postCrearSala = async (req,res) =>{
    const { nombre, codigo, capacidad, estado} = req.body;
    try{
        const existe = await SalaModel.findByCode(codigo);
        const salas = await SalaModel.getAll();
        if (existe){
            return res.render('salas',{
                salas,
                error: `Error: El código "${codigo}" ya esta registrado.`,
                success:null
            });
        }
        await SalaModel.create({ nombre,codigo,capacidad,estado});
        const salasActualizadas = await SalaModel.getAll();
        res.render('salas',{
            salas:salasActualizadas,
            error: null,
            success: "Sala registrada exitosamente"
        });
    }catch(error){
        res.status(500).send("Error en el servidor al registrar");
    }
}