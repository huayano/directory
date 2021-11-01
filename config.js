const config = {
    db: {
        user: 'huayano',
        password: 'itsapassword',
        host: '10.10.10.3',
        port: '5432',
        database: 'pg_base'
    },
    tables: {
        furniture: 'furniture',
        furnitureType: 'furniture_type',
        furnitureStorage: 'furniture_storage'
    }
};

module.exports = config;
