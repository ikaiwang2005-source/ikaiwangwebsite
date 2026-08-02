const grid = document.querySelector("#project-grid");
const filterButtons = document.querySelectorAll(".filter-button");
const modal = document.querySelector("#project-modal");
const modalGallery = document.querySelector("#modal-gallery");
const modalTitle = document.querySelector("#modal-title");
const modalCategory = document.querySelector("#modal-category");
const modalDescription = document.querySelector("#modal-description");
const modalModel = document.querySelector("#modal-model");
const modalTags = document.querySelector("#modal-tags");
const modalLinks = document.querySelector("#modal-links");
const modalCode = document.querySelector("#modal-code");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("#nav-links");
const themeToggle = document.querySelector(".theme-toggle");

const categoryClass = (category) => category.toLowerCase().replace(/\s+/g, "-");

function imageBlock(src, label, className) {
  if (!src) {
    return `<div class="${className} placeholder"><span>${label}</span></div>`;
  }

  return `<div class="${className}"><img src="${src}" alt="${label}" loading="lazy"></div>`;
}

function modelBlock(project) {
  if (!project.modelUrl) return "";

  return `
    <div class="model-frame">
      <p class="model-label">Interactive 3D model</p>
      <model-viewer
        class="cad-model-viewer"
        src="${project.modelUrl}"
        alt="3D model of ${project.title}"
        camera-controls
        auto-rotate
        shadow-intensity="1"
        exposure="0.9"
        camera-orbit="35deg 65deg auto"
        field-of-view="35deg"
        poster="${project.thumbnail}">
      </model-viewer>
      <div class="model-loading-overlay" aria-hidden="true">Loading interactive 3D model</div>
    </div>
  `;
}

function bindModelViewerLoadingState() {
  const viewer = modalModel.querySelector("model-viewer");
  const loadingOverlay = modalModel.querySelector(".model-loading-overlay");
  if (!viewer || !loadingOverlay) return;

  loadingOverlay.hidden = false;

  viewer.addEventListener("load", () => {
    loadingOverlay.hidden = true;
  }, { once: true });

  viewer.addEventListener("error", () => {
    loadingOverlay.textContent = "Unable to load 3D model";
  }, { once: true });
}

function renderProjects(category = "All") {
  const visibleProjects = category === "All"
    ? projects
    : projects.filter((project) => project.category === category);

  grid.innerHTML = visibleProjects.map((project, index) => `
    <article class="project-card reveal" style="--index:${index}">
      ${imageBlock(project.thumbnail, "Add image here", "project-media")}
      <div class="project-body">
        <div class="project-topline">
          <span class="badge ${categoryClass(project.category)}">${project.category}</span>
        </div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <button class="detail-link" type="button" data-project-id="${project.id}">View details</button>
      </div>
    </article>
  `).join("");

  observeReveals();
}

function openProject(id) {
  const project = projects.find((item) => item.id === id);
  if (!project) return;

  modalGallery.innerHTML = project.gallery.map((src) => imageBlock(src, "Add image here", "gallery-image")).join("");
  modalModel.innerHTML = modelBlock(project);
  modalModel.hidden = !project.modelUrl;
  bindModelViewerLoadingState();
  modalTitle.textContent = project.title;
  modalCategory.textContent = project.category;
  modalDescription.textContent = project.description;
  modalTags.innerHTML = project.tags.map((tag) => `<span class="tag ${categoryClass(project.category)}">${tag}</span>`).join("");
  modalLinks.innerHTML = [
    project.repoUrl ? `<a class="button secondary" href="${project.repoUrl}" target="_blank" rel="noopener">Code repo</a>` : "",
    project.cadDownloadUrl ? `<a class="button secondary" href="${project.cadDownloadUrl}" target="_blank" rel="noopener">Download CAD file</a>` : "",
    project.cadUrl ? `<a class="button secondary" href="${project.cadUrl}" target="_blank" rel="noopener">CAD files</a>` : ""
  ].join("");
  modalCode.textContent = project.codeSnippet || "";
  modalCode.classList.toggle("has-code", Boolean(project.codeSnippet));

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function observeReveals() {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => {
    revealObserver.observe(element);
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => {
      item.classList.remove("active");
      item.setAttribute("aria-selected", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-selected", "true");
    renderProjects(button.dataset.filter);
  });
});

grid.addEventListener("click", (event) => {
  const detailButton = event.target.closest("[data-project-id]");
  if (detailButton) {
    openProject(detailButton.dataset.projectId);
  }
});

document.querySelectorAll("[data-close-modal]").forEach((element) => {
  element.addEventListener("click", closeModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("theme", nextTheme);
});

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  document.documentElement.dataset.theme = storedTheme;
}

document.querySelector("#current-year").textContent = new Date().getFullYear();
renderProjects();
observeReveals();
