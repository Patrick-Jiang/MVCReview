import EventBus from "./EventBus";

class Model extends EventBus{

    constructor(options) {
        super();
        ['data','create','delete','update','get'].forEach(key=>{
            if(key in options){
                this[key] = options[key]
            }
        })
    }
    create() {
        console.log('error');
    }

    delete() {
        console.log('error');
    }

    update() {
        console.log('error');
    }

    get() {
        console.log('error');
    }
}

export default Model