const {getConjugacaoG1} = require('../../controllers/conjugacao/conjugacaoG1.controller');

exports.conjugacaoG1Routes = (app) => {
    app.get('/conjugacaoG1', getConjugacaoG1)
}