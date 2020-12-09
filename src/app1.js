import "./app1.css"
import $ from "jquery"
import Model from "./base/Model";
import View from "./base/View";
import EventBus from "./base/EventBus";

const eventBus = new EventBus()

const m = new Model({
    data: {
        n: parseInt(localStorage.getItem('n'))
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem('n', m.data.n)
    }
})




const init = (el)=>{
    new View ({
        el: el,
        data:m.data,
        eventBus:eventBus,
        html: `
    <div>
        <div class="output"><span id="number">{{n}}</span></div>
        <div class="actions">
            <button id="add">+1</button>
            <button id="minus">-1</button>
            <button id="times">×2</button>
            <button id="divide">÷2</button>
        </div>
    </div>
`,

        render(data) {
            const n = data.n
            if (this.el.children.length !== 0) {
                this.el.empty();
            }
            $(this.html.replace('{{n}}', n)).appendTo(this.el);
        },
        events: {
            'click #add': 'add',
            'click #minus': 'minus',
            'click #times': 'times',
            'click #divide': 'divide',
        },
        add() {
            m.update(m.data.n += 1)
        },
        minus() {
            m.update(m.data.n -= 1)
        },
        times() {
            m.update(m.data.n *= 2)
        },
        divide() {
            m.update(m.data.n /= 2)
        },

    })
}
export default init






