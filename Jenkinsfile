pipeline {
  agent {
    docker {
      image 'node:lts-bullseye-slim'
      args '-p 4000:4000'
    }
  }
  stages {
    stage('Build'){
      steps {
        sh 'npm i --production'
      }
    }
  }
}