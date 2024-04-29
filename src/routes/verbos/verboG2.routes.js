const {getVerboG2} = require('../../controllers/verbos/verboG2.controller');

exports.verboG2Routes = (app) => {
    app.get('/verboG2', getVerboG2)
}