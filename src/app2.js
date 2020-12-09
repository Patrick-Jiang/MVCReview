import "./app2.css"
import Vue from "vue";


const init = (el)=>{
    new Vue({
        el: el,
        data: {index : parseInt(localStorage.getItem('app2.index')) ?? 0},
        template: `
          <section id="app2">
              <ol class="tab-bar">
                <li :class="index === 0?'selected':''" 
                @click="index=0">1</li>
                <li :class="index === 1?'selected':''"
                    @click="index=1">2</li>
              </ol>
              <ol class="tab-content">
                <li :class="index === 0?'active':''">Content 1</li>
                <li :class="index === 1?'active':'' ">Content 2</li>
              </ol>
          </section>
`,
    })
}
export default init