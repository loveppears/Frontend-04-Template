import { createElement, Text, Wrapper } from './createElement'
import { Carousel } from './Carousel.js'
import { Panel } from './Panel.js'
import { TabPanel } from './TabPanel.js'
import { ListView } from './ListView'

/*
class MyComponent {
    constructor(config) {
        this.children = [];
        this.attributes = new Map()
        this.properties = new Map()
    }

    setAttribute(name, value) {
        this.attributes.set(name, value)
    }

    appendChild(child) {
        this.children.push(child)
    }

    set title(value) {
        this.properties.set('title', value)
    }

    render() {
        return (
            <article>
                <h2>{this.properties.get('title')}</h2>
                <header>I'm a header</header>
                {this.slot}
                <footer>I'm a footer</footer>
            </article>
        )
    }

    mountTo(parent) {
        this.slot = <div></div>
        for(let child of this.children) {
            this.slot.appendChild(child)
        }
        this.render().mountTo(parent)
    }
}
*/

/*
let component = <div id="a" cls="b" style="width:100px;height:100px;background-color:lightgreen">
    <div></div>
    <p></p>
    <div></div>
    <div></div>
</div>
*/

let component = <div id="a" cls="b" style="width:100px;height:100px;background-color:lightgreen">
    <div></div>
    <p></p>
    <div></div>
    <div></div>
</div>

/*
let panel = <TabPanel>
    <span title="title1">This is content1</span>
    <span title="title2">This is content2</span>
    <span title="title3">This is content3</span>
    <span title="title4">This is content4</span>
</TabPanel>

let panel = <CarouselView>
    <span>This is content1</span>
    <span>This is content2</span>
    <span>This is content3</span>
    <span>This is content4</span>
</CarouselView>

component.title = "I'm title 2"

let data = [
    {title: '蓝猫', url: 'https://static001.geekbang.org/resource/image/bb/21/'}
]

let list = <ListView data={data}>
    {record => <figure>
        <img src={record.url} />
        <figcaption>{record.title}</figcaption>
    </figure>}
</ListView>
*/

component.mountTo(document.body)

// var component = createElement(
//     Parent,
//     {
//         id: 'a',
//         class: 'b'
//     },
//     createElement(Child, null),
//     createElement(Child, null),
//     createElement(Child, null)
// )

// console.log(component)

// component.setAttribute('id', 'd')