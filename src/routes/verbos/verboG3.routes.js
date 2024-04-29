const {getVerboG3} = require('../../controllers/verbos/verboG3.controller');

exports.verboG3Routes = (app) => {
    app.get('/verboG3', getVerboG3)
}