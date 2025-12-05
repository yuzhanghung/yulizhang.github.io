"use strict";

const projectUrl = "data/project.json";

const courseUrl = "data/course.json";

const skillUrl = "data/skill.json";

let projectsDiv = document.getElementById("js-project");
let courseDiv = document.getElementById("js-course");
let vltimelineDiv = document.getElementById("js-vl-timeline");
let langSkill = document.getElementById("js-lang-skill");
let framSkill = document.getElementById("js-fram-skill");
let toolSkill = document.getElementById("js-tool-skill");




// function for our list view
async function getAllProjectRecords() {
  await fetch(projectUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(record => {


        let name = record.Name;
        let description = record.Description;
        let image = record.Image || "img/coming-soon.jpg";
        let projectLink = record.ProjectLink || "#";

        const project = `
          <div class="col">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <img src="${image}" class="picture img-fluid">
                <p class="card-text text-center">
                  ${description}
                </p>
              </div>
              <div class="card-footer text-center">
                <!-- Live Demo button -->
                <a href="${projectLink}" target="_blank" class="btn btn-outline-success card-btn">
                  <i class="fas fa-external-link-alt"></i> View Project
                </a>
              </div>
            </div>
          </div>
        `

        projectsDiv.innerHTML += project;
      })
    });
  }


async function getAllCourseRecords() {
  await fetch(courseUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(record => {

        let year = record.Year;
        let course1 = record.Course1;
        let course2 = record.Course2;
        let course3 = record.Course3 || "";
        let semester = record.Semester;

        let courseHTML = "";
        let vltimelineHTML = "";

        if (semester === "Fall") {
          courseHTML = `
            <div class="box box-top">
                <div class="dot">
                </div>
                <div class="vl-top"></div>
                <div class="fall-course-section">
                  <h1>${year}</h1>
                  <ul>
                    <li>${course1}</li>
                    <li>${course2}</li>
                  </ul>
                </div>
            </div>
          `;

          vltimelineHTML = `
            <div class="container">
              <div class="dots"></div>
              <div class="fall-course-sections">
                <h1>${year}</h1>
                <ul>
                  <li>${course1}</li>
                  <li>${course2}</li>
                </ul>
              </div>
            </div>
          `;

          if (year === "Fall 2023") {
            courseHTML += `
              <div class="box box-bottom">
                  <div class="dot"></div>
                  <div class="vl-bottom"></div>
                  <div class="fall-course-section">
                    <h1>Spring 2024</h1>
                    <ul>
                      <li>CS 61A: The Structure and Interpretation of Computer Programs</li>
                      <li>MATH 1A: Calculus</li>
                    </ul>

                    <h1>Summer 2024</h1>
                    <ul>
                      <li>CS 61BL: Data Structures and Programming Methodology</li>
                    </ul>
                  </div>
              </div>
            `;

            vltimelineHTML += `
              <div class="container">
                <div class="dots">
                </div>
                <div class="fall-course-sections">
                  <h1>Spring 2024</h1>
                  <ul>
                    <li>CS 61A: The Structure and Interpretation of Computer Programs</li>
                    <li>MATH 1A: Calculus</li>
                  </ul>
                  <h1>Summer 2024</h1>
                  <ul>
                    <li>CS 61BL: Data Structures and Programming Methodology</li>
                  </ul>
                </div>
              </div>
            `;

          }
          
        } else {
          courseHTML = `
            <div class="box box-bottom">
                <div class="dot">
                </div>
                <div class="vl-bottom"></div>
                <div class="fall-course-section">
                  <h1>${year}</h1>
                  <ul>
                    <li>${course1}</li>
                    <li>${course2}</li>
                    <li>${course3}</li>
                  </ul>
                </div>
            </div>
          `;

          vltimelineHTML = `
            <div class="container">
              <div class="dots"></div>
              <div class="fall-course-sections">
                <h1>${year}</h1>
                <ul>
                  <li>${course1}</li>
                  <li>${course2}</li>
                  <li>${course3}</li>
                </ul>
              </div>
            </div>
          `;
        }

        courseDiv.innerHTML += courseHTML;
        vltimelineDiv.innerHTML += vltimelineHTML;
      })
    });
  }

async function getAllSkillRecords() {
  await fetch(skillUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach(record => {
        let progskillHTML = "";
        let frameskillsHTML = "";
        let toolHTML = "";

        if (record.Category === "Programming Languages") {
          progskillHTML = skillPageHTML(record.IconClass, record.ColorClass, record.Name);
        } else if (record.Category === "Frameworks") {
          frameskillsHTML = skillPageHTML(record.IconClass, record.ColorClass, record.Name);
        } else {
          toolHTML = skillPageHTML(record.IconClass, record.ColorClass, record.Name);
        }

        langSkill.innerHTML += progskillHTML;
        framSkill.innerHTML += frameskillsHTML;
        toolSkill.innerHTML += toolHTML;
      })
    });
}

function skillPageHTML(iconClass, colorClass, name) {
  const html = `
    <div class="skill-card">
      <i class="${iconClass} ${colorClass} fs-1"></i>
      <p class="fw-bold mt-2 mb-0">${name}</p>
    </div>
  `;

  return html
}



function showSidebar() {
  const sidebar = document.querySelector('.sidebar');

  sidebar.style.display = 'flex';
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');

  sidebar.style.display = 'none';
}



function projectSection() {
  const project = document.querySelector('.js-project');

}