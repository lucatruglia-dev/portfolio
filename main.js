const projects = 'configs/projects.json';
const skills = 'configs/skills.json'

fetch(projects)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('conncection error.');
  })
  .then(data => {
      setCards(data);
  })
  .catch(error => {
    console.error('error:', error);
  });

fetch(skills)
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('conncection error.');
  })
  .then(data => {
      setSkills(data);
  })
  .catch(error => {
    console.error('error:', error);
  });


const sectionCards = document.querySelector(".section-cards");

function setCards(data) {
    for (const key in data) {

        sectionCards.innerHTML += `
            <div class="card">
        <div class="card-bar">
          <div class="card-bar-left">
            <div class="card-bar-dot"></div>
            <div class="card-bar-dot"></div>
            <div class="card-bar-dot"></div>
          </div>
          <div class="card-bar-right">
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-square-js"></i>
          </div>
        </div>
        <div class="card-avatar">
          <img src="img/projects/${data[key].logo}" alt="" style="${data[key].customStyle}">
        </div>
        <span class="card-title">${data[key].title}</span>
        <span class="card-desc">${data[key].desc}</span>
        <a href="${data[key].location}" class="card-btn">Explore the website</a>
      </div>
        `;
    }
}


const skillsCards = document.querySelector(".skills-cards");

function setSkills(data) {
  for (const key in data) { 
    var skill = data[key];
    skillsCards.innerHTML += `
       <div class="skill-card">
                      <div class="skill-container">
                          <div class="skill-avatar">
                              ${skill.icon}
                          </div>

                          <div class="skill-circle top">
                              ${skill.title}
                          </div>
                          <div class="skill-circle bottom">
                              ${skill.perc}
                          </div>
                      </div>
                  </div>
    `
  }
}


function sayInfo() {
    var informations = document.querySelector("trg");
    var version = informations.getAttribute("trg-version");
    var date = informations.getAttribute("trg-date");

    console.log("Website Version: " + version);
    console.log("Released on: " + date);
    console.log("-|-|-|-|-|-|-|-|-|-");
    console.log("Developed by: lucatruglia.it");
}


function goTo(where) {
    var section = document.getElementById(where);
    section.scrollIntoView({ behavior: 'smooth' });
}