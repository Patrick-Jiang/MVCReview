import "./app1.css"
import $ from "jquery"

const eventBus = $({})
const m = {
    data: {
        n: parseInt(localStorage.getItem('n'))
    },
    create() {
    },
    delete() {
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem('n',m.data.n)
    },
    get() {
    },

}
const v = {
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
    init(el) {
        v.el = $(el)

    },
    render(n) {
        if (v.el.children.length !== 0) {
            v.el.empty();
        }
        $(v.html.replace('{{n}}', n)).appendTo(v.el);
    }
}


const c = {
    init(container) {
        v.init(container)
        v.render(m.data.n)
        c.autoBindEvents()
        eventBus.on('m:updated', () => {
            v.render(m.data.n)
        })
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
        for (let key in c.events) {
            const spaceIndex = key.indexOf(' ')
            const value = c[c.events[key]]
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            v.el.on(part1, part2, value)
        }
    }
}


export default c






