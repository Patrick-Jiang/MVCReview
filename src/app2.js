import "./app2.css"
import $ from "jquery"

const html = `
    <section id="app2">
        <ol class="tab-bar">
            <li>1</li>
            <li>2</li>
        </ol>
        <ol class="tab-content">
            <li>Content 1</li>
            <li>Content 2</li>
        </ol>
    </section>
`
$(html).appendTo($('body > .page'));
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')
const index= localStorage.getItem('app2.index') ?? 0
$tabBar.on('click', 'li' ,e=>{
    const $li = $(e.currentTarget)
    $li.addClass('selected').siblings().removeClass('selected')
    const index = $li.index()
    localStorage.setItem('app2.index',index)
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq(index).trigger('click')