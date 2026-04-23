# Step-by-Step Commands
1. Initialize Git Repository
git init

## Creates a local repository

2. Check Status
git status

## Shows untracked/modified files

3. Add Files
git add .

## Adds all files to staging area

### OR

git add app.py
4. Commit Changes
git commit -m "Initial commit"

## Saves snapshot of code

5. Connect to GitHub Repo

## First create repo on GitHub
## Then:

git remote add origin https://github.com/username/repo-name.git

6. Push Code to GitHub
git push -u origin main

## Uploads code to GitHub

7. Clone Repository
git clone https://github.com/username/repo-name.git

## Downloads repo

8. Pull Latest Changes
git pull

## Updates local repo

9. Create Branch
git branch feature1
git checkout feature1

### OR

git checkout -b feature1
10. Merge Branch
git checkout main
git merge feature1
11. View Commit History
git log