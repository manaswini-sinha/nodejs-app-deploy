pipeline {
    agent any

    environment {
        DEPLOY_DIR = "/var/www/nodejs-app-deploy"
        APP_NAME = "nodejs-app"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'github-token', url: 'https://github.com/manaswini-sinha/nodejs-app-deploy.git', branch: 'main'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test || true'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh '''
                        mkdir -p $DEPLOY_DIR
                        rm -rf $DEPLOY_DIR/*
                        cp -r * $DEPLOY_DIR
                        cd $DEPLOY_DIR
                        pm2 delete $APP_NAME || true
                        pm2 start app.js --name $APP_NAME
                    '''
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment Successful!'
        }
        failure {
            echo '❌ Deployment Failed.'
        }
    }
}
