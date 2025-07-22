let projects = JSON.parse(localStorage.getItem("projects")) || [];

function renderProjects() {
  const list = document.getElementById("project-list");
  list.innerHTML = "";

  projects.forEach(project => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${project.title}</strong><br/>
      <small>${project.description}</small><br/>
      <button onclick="deleteProject(${project.id})">Hapus</button>
    `;
    list.appendChild(li);
  });
}

function addProject() {
  const title = document.getElementById("project-title").value;
  const desc = document.getElementById("project-description").value;
  if (!title) return;

  const newProject = new Project(title, desc);
  projects.push(newProject);
  localStorage.setItem("projects", JSON.stringify(projects));

  document.getElementById("project-title").value = "";
  document.getElementById("project-description").value = "";
  renderProjects();
}

function deleteProject(id) {
  projects = projects.filter(p => p.id !== id);
  localStorage.setItem("projects", JSON.stringify(projects));
  renderProjects();
}

window.onload = renderProjects;
