import "./app1.css"
import $ from "jquery"
import Model from "./base/Model";

const eventBus = $({})

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

const v = {



}


const view = {
    el: null,
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
    init(container) {

        view.el = $(container)
        view.render(m.data.n)
        view.autoBindEvents()
        eventBus.on('m:updated', () => {
            view.render(m.data.n)
        })
    },
    render(n) {
        if (view.el.children.length !== 0) {
            view.el.empty();
        }
        $(view.html.replace('{{n}}', n)).appendTo(view.el);
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
    autoBindEvents() {
        for (let key in view.events) {
            const spaceIndex = key.indexOf(' ')
            const value = view[view.events[key]]
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            view.el.on(part1, part2, value)
        }
    }
}


export default view






