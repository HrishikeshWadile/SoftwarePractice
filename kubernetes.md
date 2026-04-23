Step 1: Build Docker Image
docker build -t event-app .
🛑 Important (very important)

Kubernetes cannot use your local image unless:

Option 1 (BEST for exam):

Push to Docker Hub

docker tag event-app hrishikeshwadile/event-app
docker push hrishikeshwadile/event-app
📦 Step 2: Create Kubernetes Deployment

Create file: deployment.yaml

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
        image: hrishikeshwadile/event-app
        ports:
        - containerPort: 5000
🌐 Step 3: Create Service

Create file: service.yaml

apiVersion: v1
kind: Service
metadata:
  name: event-app-service
spec:
  type: NodePort
  selector:
    app: event-app
  ports:
    - protocol: TCP
      port: 5000
      targetPort: 5000
      nodePort: 30007
▶️ Step 4: Apply in Kubernetes
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
🔍 Step 5: Verify
kubectl get pods
kubectl get services
🌐 Step 6: Access App

Open:

http://localhost:30007
🔄 Architecture (say this in exam)
Flask App → Docker Image → Kubernetes Deployment → Service → Browser

If dosent work:
kubectl port-forward deployment/event-app-deployment 5000:5000
What to say in exam (VERY IMPORTANT)

“I used port-forwarding to access the Kubernetes pod locally. This bypasses NodePort limitations in local environments and directly exposes the application.”

If examiner asks “why NodePort didn’t work?”

Say:

“In local clusters like Docker Desktop or Minikube, NodePort may not always bind to localhost due to networking constraints.”