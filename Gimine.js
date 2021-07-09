const Gimine = require('./Gimine.js');

const bajorai = new Gimine();

bajorai.gime({ name: 'Augustas', year: 2000 });
bajorai.gime({ name: 'Barbora', year: 1998 });

bajorai.giminesMedis();
class Gimine {
    constructor() {
        this.list = [];
    }
}

module.exports = Gimine;

