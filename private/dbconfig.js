require('dotenv/config');//Apontando para o servidor de testes, o user DASHBOARD do de produção está com problemas.
module.exports = {
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl: true
};