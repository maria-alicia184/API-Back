const {getGramaticaN1} = require('../../controllers/gramatica/gramaticaN1.controller');

exports.gramaticaN1Routes = (app) => {
    app.get('/gramaticaN1', getGramaticaN1)
}