import "./app2.css"
import $ from "jquery"
import Model from "./base/Model";
import View from "./base/View";
import EventBus from "./base/EventBus";

const eventBus = new EventBus()
const m = new Model({
    data: {
         index : parseInt(localStorage.getItem('app2.index')) ?? 0
    },
    update(data) {
        Object.assign(m.data, data)
        eventBus.trigger('m:updated')
        localStorage.setItem('app2.index',m.data.index)
    },

})


const init = (el)=>{
    const view = new View({
        el:el,
        data:m.data,
        eventBus:eventBus,
        html: (index)=>{
            return `
                    <div>
                        <ol class="tab-bar">
                            <li class="${index === 0?'selected':''}" data-index="0">1</liclass>
                            <li class="${index === 1?'selected':''}" data-index="1">2</li>
                        </ol>
                        <ol class="tab-content">
                            <li class="${index === 0?'active':''}">Content 1</li>
                            <li class="${index === 1?'active':''}">Content 2</li>
                        </ol>
                    </div>
                    `
        },
        render(data) {
            const index =data.index
            if (this.el.children.length !== 0) {
                this.el.empty();
            }
            $(this.html(index)).appendTo(this.el);
        },
        events: {
            'click .tab-bar li': 'x',

        },
        x(e) {
            const index = parseInt(e.currentTarget.dataset.index)
            m.update({index:index})
        },
    })
}
export default init