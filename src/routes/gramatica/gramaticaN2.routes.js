const {getGramaticaN2} = require('../../controllers/gramatica/gramaticaN2.controller');

exports.gramaticaN2Routes = (app) => {
    app.get('/gramaticaN2', getGramaticaN2)
}