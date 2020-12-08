class Model {
    constructor(options) {
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