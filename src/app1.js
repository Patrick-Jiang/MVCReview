import "./app1.css"
import Vue from 'vue'


const init = (el) => {
    new Vue({
        el: el,
        data: {n: parseInt(localStorage.getItem('n'))},
        methods: {
            add() {
                this.n += 1
            },
            minus() {
                this.n -= 1
            },
            times() {
                this.n *= 2
            },
            divide() {
                this.n /= 2
            }
        },
        watch:{
            n(){
                localStorage.setItem('n',this.n)
            },
        },
        template: `
    <section>
        <div class="output"><span id="number">{{n}}</span></div>
        <div class="actions">
            <button @click="add">+1</button>
            <button  @click="minus">-1</button>
            <button  @click="times">×2</button>
            <button  @click="divide">÷2</button>
        </div>
    </section>
`,
    })

}
export default init






