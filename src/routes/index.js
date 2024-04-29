const {vocabularioN5Routes} = require('./vocabulario/vocabularioN5.routes');
const {vocabularioN4Routes} = require('./vocabulario/vocabularioN4.routes');
const {vocabularioN3Routes} = require('./vocabulario/vocabularioN3.routes');
const {vocabularioN2Routes} = require('./vocabulario/vocabularioN2.routes');
const {vocabularioN1Routes} = require('./vocabulario/vocabularioN1.routes');
const {kanjiN5Routes} = require('./kanjis/kanjiN5.routes');
const {kanjiN4Routes} = require('./kanjis/kanjiN4.routes');
const {kanjiN3Routes} = require('./kanjis/kanjiN3.routes');
const {kanjiN2Routes} = require('./kanjis/kanjiN2.routes');
const {kanjiN1Routes} = require('./kanjis/kanjiN1.routes');
const {verboG1Routes} = require('./verbos/verboG1.routes');
const {verboG2Routes} = require('./verbos/verboG2.routes');
const {verboG3Routes} = require('./verbos/verboG3.routes');
const {gramaticaN5Routes} = require('./gramatica/gramaticaN5.routes');
const {gramaticaN4Routes} = require('./gramatica/gramaticaN4.routes');
const {gramaticaN3Routes} = require('./gramatica/gramaticaN3.routes');
const {gramaticaN2Routes} = require('./gramatica/gramaticaN2.routes');
const {gramaticaN1Routes} = require('./gramatica/gramaticaN1.routes');
const {conjugacaoG1Routes} = require('./conjugacao/conjugacaoG1.routes');
const {conjugacaoG2Routes} = require('./conjugacao/conjugacaoG2.routes');
const {conjugacaoG3Routes} = require('./conjugacao/conjugacaoG3.routes');
const {vocabularioRoutes} = require('./vocabulario/vocabularioN5.routes');

module.exports = (app) => {
    vocabularioN5Routes(app);
    vocabularioN4Routes(app);
    vocabularioN3Routes(app);
    vocabularioN2Routes(app);
    vocabularioN1Routes(app);
    kanjiN5Routes(app);
    kanjiN4Routes(app);
    kanjiN3Routes(app);
    kanjiN2Routes(app);
    kanjiN1Routes(app);
    verboG1Routes(app);
    verboG2Routes(app);
    verboG3Routes(app);
    gramaticaN5Routes(app);
    gramaticaN4Routes(app);
    gramaticaN3Routes(app);
    gramaticaN2Routes(app);
    gramaticaN1Routes(app);
    conjugacaoG1Routes(app);
    conjugacaoG2Routes(app);
    conjugacaoG3Routes(app);
    vocabularioRoutes(app);
}