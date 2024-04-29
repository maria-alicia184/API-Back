const {getVerboG1} = require('../../controllers/verbos/verboG1.controller');

exports.verboG1Routes = (app) => {
    app.get('/verboG1', getVerboG1)
}