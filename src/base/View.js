import $ from 'jquery'
class View {
    constructor(options) {
        Object.assign(this,options)
        this.el = $(this.el)
        this.render(this.data)
        this.autoBindEvents()

        this.eventBus.on('m:updated', () => {
            this.render(this.data)
        })
    }
    autoBindEvents() {
        for (let key in this.events) {
            const spaceIndex = key.indexOf(' ')
            const value = this[this.events[key]]
            const part1 = key.slice(0, spaceIndex)
            const part2 = key.slice(spaceIndex + 1)
            this.el.on(part1, part2, value)
        }
    }
}

export default View