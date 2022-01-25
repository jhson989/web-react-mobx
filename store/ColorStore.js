
class ColorStore {

    color = null
    toggle = 1

    constructor() {

        mobx.makeObservable(this, {
            color:mobx.observable,
            toggle:mobx.observable,
            setColor:mobx.action,
            getColor:mobx.computed,
            setToggle:mobx.action,
            getToggle:mobx.computed
        });
    }

    setColor(color) {
        this.color = color;
    }

    get getColor() {
        return this.color;
    }

    setToggle() {
        this.toggle = !this.toggle;
    }

    get getToggle() {
        if (this.toggle) 
            return 'On';
        else
            return 'Off';
    }

}

const colorStore = new ColorStore();