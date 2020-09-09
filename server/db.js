const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getDefects,
  addDefect,
  getComments,
  addComment
}

function getDefects (db = connection) {
  return db('defects').select
}

function addDefect (defect, db = connection) {
  return db('defects')
    .insert({
      home_id: defect.homeId,
      trade: defect.trade,
      defect_name: defect.defectName,
      defect_description: defect.defectDescription,
      status: defect.status,
      image_path: defect.imagePath
    })
}

function getComments (db = connection) {

}

function addComment (db = connection) {

}