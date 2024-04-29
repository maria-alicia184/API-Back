const {getGramaticaN3} = require('../../controllers/gramatica/gramaticaN3.controller');

exports.gramaticaN3Routes = (app) => {
    app.get('/gramaticaN3', getGramaticaN3)
}