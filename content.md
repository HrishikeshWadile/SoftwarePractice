Use your Flask App (already built)

You already have:

Flask app ✅
Dockerfile ✅

So now just demonstrate commands.

🔹 Step 1: Build Image
docker build -t event-app .
🔹 Step 2: Run Container
docker run -d -p 5000:5000 --name mycontainer event-app
🔹 Step 3: List Containers
docker ps
🔹 Step 4: View Logs
docker logs mycontainer

👉 Shows Flask output

🔹 Step 5: Access Container Shell
docker exec -it mycontainer /bin/bash

👉 Now inside container:

ls
cd templates
ls
🔹 Step 6: Copy File (CONTENT MANAGEMENT)
docker cp templates/register.html mycontainer:/app/templates/

👉 This is the main content management part

🔹 Step 7: Stop Container
docker stop mycontainer
🔹 Step 8: Remove Container
docker rm mycontainer
🔹 Step 9: Remove Image (optional)
docker rmi event-app