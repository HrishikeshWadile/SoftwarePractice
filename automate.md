What “automation” means here

👉 No manual docker run
👉 No repeated commands
👉 Just one command:

kubectl apply -f .

👉 Everything runs automatically

🛠️ What you already have
Flask app ✅
Docker image ✅
Kubernetes basics (deployment + service) ✅

Now we organize + automate

📁 Final Project Structure
event-app/
│
├── app.py
├── Dockerfile
├── requirements.txt
│
├── templates/
├── static/
│
├── k8s/
│   ├── deployment.yaml
│   └── service.yaml
🔹 1. deployment.yaml (AUTO RUN APP)
apiVersion: apps/v1
kind: Deployment
metadata:
  name: event-app-deployment
spec:
  replicas: 2
  selector:
    matchLabels:
      app: event-app
  template:
    metadata:
      labels:
        app: event-app
    spec:
      containers:
      - name: event-app
        image: yourusername/event-app
        ports:
        - containerPort: 5000
🔹 2. service.yaml (AUTO EXPOSE APP)
apiVersion: v1
kind: Service
metadata:
  name: event-app-service
spec:
  type: NodePort
  selector:
    app: event-app
  ports:
    - port: 5000
      targetPort: 5000
      nodePort: 30007
🔹 3. Deploy EVERYTHING in one command

Go inside k8s folder:

kubectl apply -f .

👉 This automatically:

Creates pods
Runs containers
Exposes service
🔍 Verify automation
kubectl get pods
kubectl get svc
🌐 Access app
http://localhost:30007
🔄 Full Automation Flow
Docker Image → Kubernetes YAML → kubectl apply → App Running
🧠 What to say in exam (VERY IMPORTANT)

“I automated the deployment of my containerized Flask application using Kubernetes YAML files. By running a single command, the entire application is deployed and exposed without manual intervention.”

🔥 Show scaling (extra marks)
kubectl scale deployment event-app-deployment --replicas=3

👉 Then:

kubectl get pods
🔁 Show auto-recovery (impress examiner)
kubectl delete pod <pod-name>

👉 Kubernetes automatically creates a new pod

⚡ Even more automation (bonus)

Create script: deploy.sh

#!/bin/bash
echo "Deploying app..."
kubectl apply -f .
echo "App deployed successfully!"

Run:

sh deploy.sh
🎯 Minimum for full marks
deployment.yaml ✔
service.yaml ✔
kubectl apply ✔
App accessible ✔
Explain automation ✔