class Gimine {
    constructor() {
        this.list = [];
    }

    //bajorai gime + prie gimines. Naudojam push

    gime(item) {
        item.married = false;
        this.list.push(item);
    }

    giminesMedis() {
        for (let i = 0; i < this.list.length; i++) {
            const zmogus = this.list[i];
            let vedybos = '';

            if (zmogus.married === true) {
                vedybos = 'yra'
            }
            else {
                vedybos = 'nera'
            }
            console.log(`${i + 1}. ${zmogus.name} gime ${zmogus.year} ir ${vedybos} vedes`);
        }

    }

    zmogausInformacija(index) {
        console.log(this.list[index]);
    }

    vestuves(index) {
        this.list[index].married = true;

    }

    mire(index) {
        const updatedList = [];
        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                updatedList.push(this.list[i]);
            }
        }

        this.list = updatedList;
    }
    skyrybos(index) {
        this.list[index].married = false;

    }
}

module.exports = Gimine;

// 1) constructor()
// 2) gime()
// 3) giminesMedis()
// 4) zmogausInformacija()
// 5) vestuves()
// 6) mire()
// 7) skyrybos()