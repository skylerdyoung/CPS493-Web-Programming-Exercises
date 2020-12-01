const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';
const MediaTypes = { GIF: 'image/gif', JPG: 'image/jpeg', PNG: 'image/png' };
const Privacy_Levels = { HIDDEN: 0, ONLY_ME: 1, ONLY_FRIENDS: 2, PUBLIC: 4 };

async function getAll(){
    console.log("Called Get All")
    const sql = `SELECT P.* FROM ${PREFIX}Workouts P Join ${PREFIX}Users U ON P.Owner_id = U.id`
    return await mysql.query(sql);
}

async function get(id){
    const sql = `SELECT 
        *
    FROM ${PREFIX}Workouts WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such workout" };
    return rows[0];
}

async function getByOwner(id){
    const sql = `SELECT 
        *
    FROM ${PREFIX}Workouts WHERE Owner_id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such workout" };
    return rows;
}

async function getTypes(){
    return await mysql.query(`SELECT id, Name FROM ${PREFIX}Types WHERE Type_id = 3`);
}

async function add(Owner_id, Privacy_Setting, Exercise_Title, Exercise_Type, Exercise_Progress){
    const sql = `INSERT INTO ${PREFIX}Workouts (created_at, Owner_id, Privacy_Setting, Exercise_Title, Exercise_Type, Exercise_Progress) VALUES ? ;`;
    const params = [[new Date(), Owner_id, Privacy_Setting, Exercise_Title, Exercise_Type, Exercise_Progress]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, Distance, Note, Exercise_type, Privacy_Setting, Owner_id){
    const sql = `UPDATE ${PREFIX}Workouts SET ? WHERE id = ?;`;
    const params = { Distance, Note, Exercise_type, Privacy_Setting, Owner_id };
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Workouts WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, URL, Text, Media_Type FROM ${PREFIX}Workouts WHERE Text LIKE ? ; `, [`%${q}%`]);

module.exports = { getAll, getByOwner, get, add, update, remove, getTypes, search, MediaTypes, Privacy_Levels }