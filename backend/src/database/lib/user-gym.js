import pool from '../database'

module.exports = function (){

    async function createUser(name_user,dni,id_gym,date_in){

        await pool.query('INSERT INTO user_gym (name_user,dni,id_gym,date_in) VALUES ($1,$2,$3,$4)',[name_user,dni,id_gym,date_in])
        return await getUserByDni(dni)
        }

    async function getUsers(){
        const usersGym = await pool.query('SELECT * FROM user_gym ')
        return usersGym.rows
    }

    async function getUserByDni(dni){
        const userGym = await pool.query('SELECT * FROM user_gym WHERE dni = $1',[dni])
        return userGym.rows[0]
    }

    async function deleteUser(dni){
       
        let query = await pool.query('DELETE FROM  user_gym WHERE dni = $1',[dni])
        return query.rowCount ? true : false
    }

    async function updateUser(name_user,dni){
        let query =  await pool.query('UPDATE user_gym SET name_user = $1 , dni = $2 WHERE dni = $3',[name_user,dni,dni])
        if (!query.rowCount) return null
        return await getUserByDni(dni)
        



    }
    return {
        createUser,
        getUsers,
        deleteUser,
        updateUser,
        getUserByDni
    }
}