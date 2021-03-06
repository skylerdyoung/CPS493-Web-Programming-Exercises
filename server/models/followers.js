const mysql = require('./mysql');

const PREFIX = process.env.MYSQL_TABLE_PREFIX || 'EX_Fall_2020_';

async function getAll(){
    console.log("Called Get All")
    const sql = `SELECT P.* FROM ${PREFIX}Followers P Join ${PREFIX}Users U ON P.Following_id = U.id`
    return await mysql.query(sql);
}

async function getForFollower(follower_id){
    const sql = `SELECT P.* FROM ${PREFIX}Followers P Join ${PREFIX}Users U ON P.Following_id = U.id WHERE P.Follower_id = ?`
    return await mysql.query(sql, [follower_id]);
}

async function get(id){
    const sql = `SELECT 
        *
    FROM ${PREFIX}Followers WHERE id=?`;
    const rows = await mysql.query(sql, [id]);
    if(!rows.length) throw { status: 404, message: "Sorry, there is no such follower" };
    return rows[0];
}

async function add( Text, Follower_id, Following_id){
    const sql = `INSERT INTO ${PREFIX}Followers (created_at, Follower_id, Following_id, isAccepted) VALUES ? ;`;
    const params = [[new Date(), Follower_id, Following_id, isAccepted]];
    const res = await mysql.query(sql, [params]);
    return get(res.insertId);
}

async function update(id, Follower_id, Following_id, isAccepted){
    const sql = `UPDATE ${PREFIX}Followers SET ? WHERE id = ?;`;
    const params = { Follower_id, Following_id, isAccepted };
    const res = await mysql.query(sql, [params, id]);
    return get(res.insertId);
}

async function remove(id){
    const sql = `DELETE FROM ${PREFIX}Followers WHERE id = ?`;
    return await mysql.query(sql, [id]);
}

const search = async q => await mysql.query(`SELECT id, Following_id, Follower_id FROM ${PREFIX}Followers WHERE Following_id LIKE ? ; `, [`%${q}%`]);

module.exports = { getAll, get, add, update, remove, search, getForFollower }