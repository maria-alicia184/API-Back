const {getVocabularioN3} = require('../../controllers/vocabulario/vocabularioN3.controller');

exports.vocabularioN3Routes = (app) => {
    app.get('/vocabularioN3', getVocabularioN3)
}