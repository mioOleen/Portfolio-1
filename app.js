const navBar = document.querySelector('.navBar');
let closeMenu=document.querySelector(".closeMenu");
const openMenu = document.querySelector('.openMenu');
const pf = document.querySelector('#pf');
const abt= document.querySelector('#abt');
const cont = document.querySelector('#cont');


function show() {
  navBar.style.display = "flex";
  openMenu.style.display="none";
  closeMenu.style.display="block";
}

function closeMe() {
  navBar.style.display="none";
  openMenu.style.display="block";
  closeMenu.style.display="none";
}

openMenu.addEventListener('click', show);
// closeMenu.addEventListener('dblclick', closeMe);
pf.addEventListener('click', closeMe);
abt.addEventListener('click', closeMe);
cont.addEventListener('click', closeMe);

//detail popup

let detailTag=document.querySelector(".detail");
let crossTag=document.querySelector(".cross");
let nameTag=document.querySelector("#projectName");
let imgTag=document.querySelector("#pjImg");
let technoTag=document.querySelector(".techno");
let descriptionTag=document.querySelector("#paragraph");

let projects=[
  {
  title:"Tonic",
  image:'./img/portfolio1.png',
  description:"First project Lorem Ipsum is  paragraph simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  techo:["HTML","CSS","JavaScript"],
  demo:'https://miooleen.github.io/',
  source: 'https://github.com/mioOleen/Portfolio-1',
 },
 {
  title:"Multi-Post Stories",
  image:'./img/portfolio2.png',
  description:"Second project Lorem Ipsum is  paragraph simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  techo:["HTML","CSS","JavaScript"],
  demo:'https://miooleen.github.io/',
  source: 'https://github.com/mioOleen/Portfolio-1',
 },
 {
  title:"Tonic",
  image:'./img/portfolio3.png',
  description:"Third project Lorem Ipsum is  paragraph simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  techo:["HTML","CSS","JavaScript"],
  demo:'https://miooleen.github.io/',
  source: 'https://github.com/mioOleen/Portfolio-1',
 },
 {
  title:"Multi-Post Stories",
  image:'./img/portfolio4.png',
  description:"Fourth project Lorem Ipsum is  paragraph simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
  techo:["HTML","CSS","JavaScript"],
  demo:'https://miooleen.github.io/',
  source: 'https://github.com/mioOleen/Portfolio-1',
 }
]
let blur=document.getElementById("blur");
let liveBtn=document.querySelector("#liveBtn");
let sourceBtn=document.querySelector("#sourceBtn");
document.querySelectorAll('.cards .btn').forEach(card=>{ 
 
   card.onclick=()=>{
    blur.classList.add("active");
    
    let id=card.getAttribute("title");
    detailTag.style.display="block";
    nameTag.textContent=projects[id].title;
    imgTag.src=projects[id].image;
    
    descriptionTag.innerHTML="";
    let  description=projects[id].description;
    descriptionTag.append(description);

    technoTag.innerHTML="";
    for( i=0;i<projects[id].techo.length;i++)
     {
      let li=document.createElement("li");
      li.append(projects[id].techo[i]);
      technoTag.append(li);
     }
     
     liveBtn.setAttribute("href",projects[id].demo);
     sourceBtn.setAttribute("href",projects[id].source);

   }
})

function close(){
  detailTag.style.display="none";
  blur.classList.remove("active");
}

crossTag.addEventListener("click",close);

//validation

let form=document.querySelector("#formValidation");
let email=document.querySelector(".email");
let errorMsg=document.querySelector("#smallError");

form.addEventListener("submit",(e)=>{
  const message=[];

  const inputEmail=email.value;

  if( inputEmail!== inputEmail.toLowerCase()){
    e.preventDefault();
    errorMsg.classList.add("error");
    errorMsg.textContent="Email must be in lowercase";
  }else{
    errorMsg.textContent='';
  }

  if(message.length<0){
    e.preventDefault();
    errorMsg.innerHTML=message.join(',');
  }

  
})