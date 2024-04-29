const {getVocabularioN1} = require('../../controllers/vocabulario/vocabularioN1.controller');

exports.vocabularioN1Routes = (app) => {
    app.get('/vocabularioN1', getVocabularioN1)
}