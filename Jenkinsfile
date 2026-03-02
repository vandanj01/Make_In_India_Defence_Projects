pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t my-react-app:${env.BUILD_ID} ."
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh "docker stop my-react-container || true"
                    sh "docker rm my-react-container || true"
                    sh "docker run -d --name my-react-container -p 80:80 my-react-app:${env.BUILD_ID}"
                }
            }
        }
    }
}
