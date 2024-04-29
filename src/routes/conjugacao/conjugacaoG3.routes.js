const {getConjugacaoG3} = require('../../controllers/conjugacao/conjugacaoG3.controller');

exports.conjugacaoG3Routes = (app) => {
    app.get('/conjugacaoG3', getConjugacaoG3)
}