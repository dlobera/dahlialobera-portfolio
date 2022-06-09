
// const projectContainer = document.getElementById('projectContainer')


// let projectMarkup = projescts.map(project =>
//  `
//   div class='card text-center' style="width: 18rem:">
//     <img src="${project.image}" class="card-img-top" alt="...">
//     <div class="card-body">
//         <h5 class="card-title">${project.title}</h5>
//         <p class="card-text">${project.description}</p>
//         <div>
//           <a href="${project.github}" class="btn btn-primary">GitHub</a>
//           <a href="${project.deployment}" class="btn btn-secondary">Deployment</a>
//         </div>
//       </div>
//     </div>
//   `  
// ).join('')

// projectContainer.innerHTML = projectMarkup 

const scrollUp = document.getElementById('top')

scrollUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
})
