const container = document.getElementById("projects");

projects.forEach(project => {
    const card = document.createElement("div");
    card.className = "project";

    card.innerHTML = `
        <img src="${project.image}" alt="${project.title}">

        <h2>${project.title}</h2>

        <p>${project.description}</p>

        <div class="tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
        </div>

        <div class="links">
            ${
                project.github
                ? `<a href="${project.github}" target="_blank">GitHub</a>`
                : ""
            }
            ${
                project.itch
                ? `<a href="${project.itch}" target="_blank">itch.io</a>`
                : ""
            }
        </div>
    `;

    container.appendChild(card);
});
