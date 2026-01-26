import getConnection from "../database.js";

export const SalaModel = {
    getAll: async ()=> {
        const db = await getConnection();
        const [rows] = await db.query('SELECT * FROM salas');
        await db.end();
        return rows;
    },
    findByCode: async (codigo)=>{
        const db = await getConnection();
        const [rows] = await db.query('SELECT * FROM salas WHERE codigo = ?', [codigo]);
        await db.end();
        return rows[0];
    },
    create: async (data)=>{
        const {nombre, codigo, capacidad, estado} = data;
        const db = await getConnection();
        const [result] = await db.query(
            'INSERT INTO salas(nombre, codigo, capacidad, estado) VALUES(?,?,?,?)',
            [nombre,codigo,capacidad,estado]
        );
        await db.end();
        return result;
    }
}