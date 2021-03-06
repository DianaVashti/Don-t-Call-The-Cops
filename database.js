const databaseName = 'helpinghand'
const connectionString = `postgres://${process.env.USER}@localhost:5432/${databaseName}`
const pgp = require('pg-promise')();
const db = pgp( connectionString );

const createResource = attributes => {
 const sql = `
   INSERT INTO resources
     (name, phone_number, address, website_url, zipcode, created_by, description, votes)
   VALUES
     ($1, $2, $3, $4, $5, $6, $7, $8)
   RETURNING
     *
  `
 const variables = [
    attributes.name, attributes.phone_number, attributes.address, attributes.website_url, attributes.zipcode, attributes.created_by, attributes.description, attributes.votes
    ];

 return db.one( sql, variables );
}

const getAllResources = () => {
 return db.any('SELECT * FROM resources')
}

// const voteForResource = () => {
//   const sql = `'UPDATE resources SET votes = $1 WHERE id = $2 RETURNING votes'`
//   return db.on( sql)
// }

module.exports = {
 createResource: createResource,
 getAllResources: getAllResources
}
