import "./app2.css"
import $ from "jquery"
import Model from "./base/Model";
import View from "./base/View";

const eventBus = $({})
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

//
// const c = {
//     v:null,
//     initV(container){
//         c.v = new View({
//             el: container,
//             html: (index)=>{
//                 return `
//                     <div>
//                         <ol class="tab-bar">
//                             <li class="${index === 0?'selected':''}" data-index="0">1</liclass>
//                             <li class="${index === 1?'selected':''}" data-index="1">2</li>
//                         </ol>
//                         <ol class="tab-content">
//                             <li class="${index === 0?'active':''}">Content 1</li>
//                             <li class="${index === 1?'active':''}">Content 2</li>
//                         </ol>
//                     </div>
//                     `
//             },
//             render(index) {
//                 console.log('here');
//                 if (c.v.el.children.length !== 0) {
//                     c.v.el.empty();
//                 }
//                 $(c.v.html(index)).appendTo(c.v.el);
//             }});
//     },
//     init(container) {
//         c.container = container
//         c.initV(container)
//         c.v.render(m.data.index)
//         c.autoBindEvents()
//         eventBus.on('m:updated', () => {
//             c.v.render(m.data.index)
//         })
//     },
//
//
//
//     autoBindEvents() {
//         for (let key in c.events) {
//             const spaceIndex = key.indexOf(' ')
//             const value = c[c.events[key]]
//             const part1 = key.slice(0, spaceIndex)
//             const part2 = key.slice(spaceIndex + 1)
//             c.v.el.on(part1, part2, value)
//         }
//     }
// }

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