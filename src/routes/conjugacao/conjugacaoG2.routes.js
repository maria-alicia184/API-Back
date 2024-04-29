const {getConjugacaoG2} = require('../../controllers/conjugacao/conjugacaoG2.controller');

exports.conjugacaoG2Routes = (app) => {
    app.get('/conjugacaoG2', getConjugacaoG2)
}