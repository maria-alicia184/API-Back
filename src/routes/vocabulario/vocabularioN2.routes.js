const {getVocabularioN2} = require('../../controllers/vocabulario/vocabularioN2.controller');

exports.vocabularioN2Routes = (app) => {
    app.get('/vocabularioN2', getVocabularioN2)
}