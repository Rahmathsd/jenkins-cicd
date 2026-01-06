pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/rahmathsd/jenkins-cicd.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t react-app .'
            }
        }

        stage('Run Docker Container') {
            steps {
                sh '''
                docker rm -f react-container || true
                docker run -d -p 3000:3000 --name react-container react-app
                '''
            }
        }
    }
}
