# I-Kai Wang Portfolio

Static personal portfolio site for software, IoT, panel building, embedded systems, and CAD-informed design work. It uses plain HTML, CSS, and JavaScript with no build step, so GitHub Pages can serve it directly.

## Edit Project Content

All project data lives in `js/projects.js`.

To add a project:

1. Add a new object to the `projects` array.
2. Set `category` to one of `Software`, `IoT`, `Panel Building`, or `CAD`.
3. Drop project images into `assets/images`.
4. Use relative image paths such as `assets/images/my-project-thumb.jpg`.
5. Add repository links in `repoUrl` and CAD/download links in `cadUrl` when available.

Empty image fields render as dashed placeholder blocks labeled `Add image here`.

## Run Locally

Open `index.html` in a browser. No local server or build command is required.

## GitHub Pages

1. Push this folder to a GitHub repository.
2. Open the repository settings.
3. Go to `Pages`.
4. Set the source to deploy from the `main` branch and the root folder.
5. Save. GitHub Pages will serve the static files directly.

All paths are relative, so the site works at both `username.github.io` and `username.github.io/repo-name`.
