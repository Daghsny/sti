# Deployment Guide

This project is built with standard HTML, CSS, and JavaScript. It is ready to be hosted on any static site hosting service, including GitHub Pages.

## Deploying to GitHub Pages

1. **Create a GitHub Repository**:
   - Go to GitHub.com and create a new public repository.

2. **Push Code**:
   - Initialize git in this folder: `git init`
   - Add files: `git add .`
   - Commit: `git commit -m "Initial commit"`
   - Link remote: `git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git`
   - Push: `git push -u origin master`

3. **Enable GitHub Pages**:
   - Go to your repository **Settings**.
   - Navigate to the **Pages** section (on the left sidebar).
   - Under **Source**, select `master` (or `main`) branch.
   - Click **Save**.

4. **Access your site**:
   - After a few minutes, your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`
