# JPL Car Share Project🚗

[![Build Status](https://travis-ci.com/JackViney96/JPLCarShare.svg?token=GNspWJXsqsSBHQ67j6VK&branch=dev)](https://travis-ci.com/JackViney96/JPLCarShare)

## To get started working on this project 👩‍💻👩‍💻
### You will need
This website can be developed on Windows, Mac and OSX, to get started you'll need NodeJS and Git installed :^)
### Get the source
You can download the repository by running `git clone 'https://github.com/JackViney96/JPLCarShare.git'`
### Install
After that, you can <br>
```cd JPLCarShare```<br>
into the source directory and run<br>
```npm i```<br>
to install all of the dependencies<br>
### Running
Before we can go further you'll have to start the server, first enter the directory with<br>
```cd server/```<br>
then run
```node index.js```<br>
To get the server up and running, after that you can move back up to the top directory with<br>
```cd ..```<br>
You'll then be able to spin up the dev build by running<br>
```npm run client```<br>
And then your browser should open to `http://localhost:3000` where you'll be greeted with the site.🎉🎉<br>


## Deploying the app to Google Cloud ☁️☁️
### Travis
If this repository is connected to Travis, it will automatically build and deploy anything pushed to the `cloud` branch
### Manual builds 
#### Requirements
Requires an authorized Google Cloud account connected to the gcloud tool on your computer
#### Instructions
The API and Front End run on different Google App Engine services. To deploy the API, simply run<br>
```gcloud app deploy```<br>
from the `server/` directory<br>
The front end first has to be built, which can be done by running<br>
```npm run build```<br>
from the project root, followed by<br>
```gcloud app deploy```<br>
to push it up to App Engine. Within 30 minutes the build should be live.🎉🎉


## Built With 💖 and

* [ReactJS](https://reactjs.org/) - Amazing front end framework 🤯
* [NodeJS](https://nodejs.org/) - Helped us build a great backend quickly 👩‍💻
* [Travis-CI](https://travis-ci.com) - Allowed us to quickly build and deploy our work ⏩
* [MariaDB](https://mariadb.org/) - Allowed us to store our data with speed and style 😎
* [Google Cloud](https://google.com/) - Allowed us to affordably host our solution ☁️


## Authors

* **Phillip Guettaf**
* **Jack Viney**
* **Liam Wright**
* **Blaise Saunders**
