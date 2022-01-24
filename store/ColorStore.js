
class ColorStore {
    color = null

    constructor() {

        mobx.makeObservable(this, {
            color:mobx.observable,
            setColor:mobx.action,
            getColor:mobx.computed
        });
    }

    setColor(color) {
        this.color = color;
    }

    get getColor() {
        return this.color;
    }

}

const colorStore = new ColorStore();