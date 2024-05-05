const {getVocabularioN5, getVocabulario} = require('../../controllers/vocabulario/vocabularioN5.controller');

exports.vocabularioN5Routes = (app) => {
    app.get('/vocabularioN5', getVocabularioN5)
}
