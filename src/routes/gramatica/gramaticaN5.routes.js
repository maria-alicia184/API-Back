const {getGramaticaN5} = require('../../controllers/gramatica/gramaticaN5.controller');

exports.gramaticaN5Routes = (app) => {
    app.get('/gramaticaN5', getGramaticaN5)
}