import {user, host, cluster, password} from "./db-metadata.js"
import { Client } from 'pg'

export default class Database {
    constructor() {
        this.client = new Client({
            user: user,
            host: host,
            database: cluster,
            password: password,
            port: 26257
        })

        this.client.connect()
    }

    //Create a new table containing friends, friendship points, a list of likes, and a list of dislikes
    async setupDB() {
        await this.client.query(`
            CREATE TABLE IF NOT EXISTS friends (
                id INT PRIMARY KEY,
                name STRING,
                points INT,
                likes STRING[],
                dislikes STRING[]
            )
        `)
    }

    //Add a new friend to the database
    async addFriend(id, name, points, likes, dislikes) {
        await this.client.query(`
            INSERT INTO friends (id, name, points, likes, dislikes)
            VALUES (${id}, '${name}', ${points}, '${likes}', '${dislikes}')
        `)
    }

    //Get a friend from the database
    async getFriend(id) {
        const result = await this.client.query(`
            SELECT * FROM friends WHERE id = ${id}
        `)
        return result.rows[0]
    }

    //Update a friend's points
    async updatePoints(id, points) {
        await this.client.query(`
            UPDATE friends SET points = ${points} WHERE id = ${id}
        `)
    }

    //Add a topic to a friend's list of likes/dislikes
    async addToPrefs(id, topic, likeBool) {
        const likeOrNot = likeBool ? "likes" : "dislikes"
        await this.client.query(`
            UPDATE friends SET ${likeOrNot} = ${likeOrNot} || '{${topic}}' WHERE id = ${id}
        `)
    }

    //General SEQL query
    async query(query) {
        return await this.client.query(query)
    }

    //Close the connection to the database
    async close() {
        return await this.client.end()
    }
}