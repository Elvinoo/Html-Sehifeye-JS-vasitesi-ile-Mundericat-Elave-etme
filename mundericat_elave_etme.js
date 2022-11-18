const body=document.querySelector('body');
const h2=body.querySelectorAll('h2');
const h3=document.querySelectorAll('h3');
let i=1;
h2.forEach((element)=>{
    element.setAttribute('id',i++)
})

h3.forEach((element)=>{
    element.setAttribute('id',i++);
})

const newDiv= document.createElement('div');
newDiv.className='Content';
body.prepend(newDiv)


const newOl=document.createElement('ol')
newOl.className='Content1'
newDiv.append(newOl)

const h2link1=document.createElement('li');
h2link1.innerHTML='<a href="#1">About</a>';
newOl.append(h2link1);

const h2link2=document.createElement('li');
h2link2.innerHTML='<a href="#2">Influences</a>';
newOl.append(h2link2);

const newUl2=document.createElement('ul');
newUl2.className='Content2'
h2link2.append(newUl2);

const h3link1=document.createElement('li');
h3link1.innerHTML='<a href="#4">Film and television</a>';
newUl2.append(h3link1);

const h3link2=document.createElement('li');
h3link2.innerHTML='<a href="#5">Literary works</a>';
newUl2.append(h3link2);

const h3link3=document.createElement('li');
h3link3.innerHTML='<a href="#6">Philosophy</a>';
newUl2.append(h3link3)

const h3link4=document.createElement('li');
h3link4.innerHTML='<a href="#7">Religion and mythology</a>';
newUl2.append(h3link4);

const h3link5=document.createElement('li');
h3link5.innerHTML='<a href="#8">Transgender themes</a>';
newUl2.append(h3link5);

const h2link3=document.createElement('li');
h2link3.innerHTML='<a href="#3">Legacy</a>';
newOl.append(h2link3);

const li=newDiv.querySelectorAll('a');
li.forEach((element)=>{
    element.style.textDecoration='none';
    element.style.color='blue'
    
})
