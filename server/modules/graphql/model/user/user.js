
import DAO from 'server/lib/mysql/dao';
import mySQLWrapper from 'server/lib/mysql/mysqlWrapper';

class User extends DAO {


    /**
     * Overrides TABLE_NAME with this class' backing table at MySQL
     */
    static get TABLE_NAME() {
        return 'user'
    }

    /**
     * Returns a bacon by its ID
     */
    static async getByID(_,  query ) {
        return await this.find( query )
    }

    /**
     * Returns a bacon by its ID
     */
    static async getByUUID(_, query ) {
        
        // DAO.PRIMARY_KEY = "device_uuid";
        return await this.find(query)
    }

    /**
     * Returns a list of bacons matching the passed fields
     * @param {*} fields - Fields to be matched
     */
    static async findMatching(_, fields) {
        console.log('test1');
        // Returns early with all bacons if no criteria was passed
        if (Object.keys(fields).length === 0) return this.findAll()
        
        // Find matching bacons
        return this.findByFields({
            fields
        })
    }

    /**
     * Creates a new bacon
     */
    static async createEntry(_, { device_uuid, device_os, device_name, device_version, app_version }) {
        const connection = await mySQLWrapper.getConnectionFromPool();
        console.log('test1');
        try {
            let _result = await this.insert(connection, {
                data: {
                    device_uuid,
                    device_os,
                    device_name,
                    device_version,
                    app_version
                }
            })
            console.log( "test", _result.insertId );
            return this.getByID(_, {user_no: _result.insertId})
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
    
    /**
     * Updates a bacon 
     */
    static async updateEntry(_, { user_no, device_uuid, device_os, device_name, device_version, app_version } ) {
        const connection = await mySQLWrapper.getConnectionFromPool()
        try {

            await this.update(connection, {
                id : {
                    user_no : user_no
                },
                data: {
                    device_uuid,
                    device_os,
                    device_name,
                    device_version,
                    app_version
                }
            })

            return this.getByID(_, { user_no : user_no })
        } finally {
            // Releases the connection
            if (connection != null) connection.release()
        }
    }
}

module.exports = User