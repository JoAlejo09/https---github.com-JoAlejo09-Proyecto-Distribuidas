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
// src/models/sala.model.js (Versión de prueba local)

// Simulamos una base de datos en memoria
/*let salasMock = [
    { id: 1, nombre: 'Sala A', codigo: 'S001', capacidad: 20, estado: 'Disponible' }
];

export const SalaModel = {
    getAll: async () => {
        return salasMock; // Devuelve el arreglo local
    },

    findByCode: async (codigo) => {
        return salasMock.find(s => s.codigo === codigo);
    },

    create: async (data) => {
        const nuevaSala = { id: salasMock.length + 1, ...data };
        salasMock.push(nuevaSala);
        return { insertId: nuevaSala.id };
    }
};
*/