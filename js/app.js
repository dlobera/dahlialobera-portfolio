
const projectContainer = document.getElementById('projectContainer')

import {projects} from '../data/work.js'

let projectMarkup = projects.map(project =>
 `
  <div class='card text-center' style="width: 420px;">
    <img src="${project.image}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${project.title}</h5>
        <p class="card-text">${project.description}</p>
        <div>
          <a href="${project.github}" class="btn btn-primary">GitHub</a>
          <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
        </div>
      </div>
    </div>
  `  
).join('')

projectContainer.innerHTML = projectMarkup 



const slideshowContainer = document.getElementById('slideshow-container')

import {skills} from '../data/skills.js'

let skillsContainer = skills.map((skill, index) =>
  `
  <div class="slideshow-container">

  <div class="mySlides fade">
    <div class="numbertext">${index + 1}/${skills.length}</div>
    <img class='skillsImage'src="${skill.image}" style="width:100%">
    <div class="text">${skill.title}</div>
  </div>
`
).join('')

slideshowContainer.innerHTML = skillsContainer

let slideIndex = 0
showSlides()
function showSlides() {
  let slides = document.querySelectorAll(".mySlides");
 
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  
  slides[slideIndex-1].style.display = "contents";  
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}






const scrollUp = document.getElementById('top')

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
})


const clickInto = document.getElementById('res')

clickInto.addEventListener('click', () => {
  let resume = html2pdf('res');
});
