const {getGramaticaN4} = require('../../controllers/gramatica/gramaticaN4.controller');

exports.gramaticaN4Routes = (app) => {
    app.get('/gramaticaN4', getGramaticaN4)
}