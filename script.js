function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

/**
 * Dynamically loads projects from the projectsData array (from projects-data.js)
 * and injects them into the #projects-container element in index.html.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Check if the data array and container exist
    if (typeof projectsData !== 'undefined' && document.getElementById('projects-container')) {
        const container = document.getElementById('projects-container');

        projectsData.forEach(project => {
            // Build the HTML structure as a template string
            const projectHTML = `
                <div class="details-container color-container">
                    <div class="article-container">
                        <img src="${project.image}" alt="${project.title}" class="project-img" />
                    </div>
                    <h2 class="experience-sub-title project-title">${project.title}</h2>
                    <p class="project-description">
                        ${project.description}
                    </p><br />
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn"
                            onclick="window.open('${project.github}', '_blank')">
                            Github
                        </button>
                        <button class="btn btn-color-2 project-btn" 
                            onclick="window.open('${project.demo}', '_blank')">
                            Live Demo
                        </button>
                    </div>
                </div>
            `;
            // Insert the generated HTML into the container
            container.insertAdjacentHTML('beforeend', projectHTML);
        });
    }
});