pipeline {
  agent any
  stages {
    stage('Build'){
      agent{
        docker {
          image 'node:lts-bullseye-slim'
          args '-p 4000:4000'
          reuseNode true
      }
      }
      steps {
        sh 'npm i --production'
      }
    }
  }
}