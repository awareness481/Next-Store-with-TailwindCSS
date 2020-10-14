#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }

    stages {
        stage('Install') {
            steps {
                echo 'Building...'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Testing...'
                sh 'npm run build'
            }
        }
    }
}
