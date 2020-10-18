#!/usr/bin/env groovy

pipeline {

    agent {
        docker {
            image 'node'
            args '-u root'
        }
    }
    
    environment {
        CHROME_PATH=$(which google-chrome-stable)
        LHCI_BUILD_CONTEXT__EXTERNAL_BUILD_URL="http://localhost:3000"
    }

    stages {
        stage('Install') {
            steps {
                echo 'Installing...'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Building...'
                sh 'npm run build'
            }
        }
        stage('Start') {
            steps {
                echo 'Starting Next.js app'
                sh 'npm start'
            }
        }
        stage('LHCI') {
            steps {
                sh 'npm install -g @lhci/cli@0.4.x'
                sh 'lhci autorun'
            }
        }    
    }
}
