function customrender(reactElement, container){
   /* const domElement= document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
container.appendChild(domElement)*/
//2nd approch using loop:
const domElement= document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
     if(prop==='children') continue ;
     domElement.setAttribute(prop,reactElement.props[peop])
}
container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href: 'https://www.google.co.uk/',
        target:'_blank'
    },
    children: 'click me to vsist'
}
const ele =document.querySelector('#root')
customrender(reactElement,ele)