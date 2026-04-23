🛠️ Installation (Simplest for Exam → Docker method)
🔹 Step 1: Pull Jenkins Image
docker pull jenkins/jenkins:lts
🔹 Step 2: Run Jenkins Container
docker run -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts
🔹 Step 3: Open Jenkins
http://localhost:8080
🔑 Step 4: Get Admin Password

In terminal:

docker exec -it <container_id> cat /var/jenkins_home/secrets/initialAdminPassword

👉 Paste this password in browser

🔧 Step 5: Setup Jenkins
Install Suggested Plugins
Create admin user
🚀 Create First CI Job
🔹 Step 1: New Item
Click New Item
Select Freestyle Project
🔹 Step 2: Configure Job

In “Build” section → add:

echo "Hello, Jenkins CI/CD"
🔹 Step 3: Build
Click Build Now
Check Console Output

👉 You’ll see output

🔗 CI/CD Flow (Explain in exam)
Developer → GitHub → Jenkins → Build/Test → Deploy
💡 Optional (Impress examiner)

Connect Jenkins with:

GitHub
Trigger build on push



# Practical 4: CI/CD using Jenkins
Step 1: Upload code to GitHub
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/event-app.git
git push -u origin main

tep 2: Create Jenkins Job
👉 In Jenkins UI:
Click New Item
Name: flask-ci
Select Freestyle Project
🔹 Step 3: Connect GitHub repo

In Source Code Management → Git:

Paste your repo URL
🔹 Step 4: Add Build Step

Go to Build → Execute shell
echo "Code fetched by Jenkins"
ls

cd event-app

echo "Inside project folder"
ls

echo "Simulating build process"
echo "CI/CD pipeline executed successfully"