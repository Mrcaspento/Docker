# Deploying your react app on to the Doccker container

make sure you run a `npm run build` before you use the docker cli
then
`docker build -f Dockerfile.dev .`
after creating the image procced to creating a container inside of the image

## Note React App Exits Immediately with Docker Run Command

Due to a recent update in the Create React App library, we will need to change how we start our containers.

`docker run -it -p <portId>:<portId> <image_ID>`

# React update guides for errors

---

## Windows not detecting Changes-Update

updated 4-14-2020

This note will cover a variety of different fixes for volumes issues and file watchers not updating changes. The example commands have been tested and confirmed to be accurate as of this writing. Each terminal will require a slightly different syntax for the pwd (present working directory) variable.

Windows Home with Docker Toolbox

1. Pass the container the environment variable with fix directly in the docker run command (recommended):

-e CHOKIDAR_USEPOLLING=true

or

2. Create a .env file in the project root with the following inside of it:

CHOKIDAR_USEPOLLING=true

Working example commands for each terminal (be sure to run these commands in the root of your project directory)

Docker Quickstart (recommended)

docker run -it -p 3000:3000 -v /app/node_modules -v ${PWD}:/app -e CHOKIDAR_USEPOLLING=true IMAGE_ID

GitBash

winpty docker run -it -p 3000:3000 -v /app/node_modules -v "/$(PWD)":/app -e CHOKIDAR_USEPOLLING=true IMAGE_ID

PowerShell

docker run -it -p 3000:3000 -v /app/node_modules -v /c/Users/username/frontend:/app -e CHOKIDAR_USEPOLLING=true IMAGE_ID

Note: Currently, using the full path to your project directory is the only thing that seems to properly mount the volume. Please remember to replace your current working directory with what is shown in the command above.

VirtualBox Folder Sharing

By default, VirtualBox will share the C:\Users directory. If you are using an external or network drive or some other drive on your machine such as D:\ or F:\ it will not be shared and your volumes not be mounted properly.

Please make sure that the drive you are using has been shared by opening VirtualBox and clicking on "Settings", then "Shared Folders". The drive should be listed like below:
![image](https://img-a.udemycdn.com/redactor/raw/2020-04-14_23-23-55-94765eb213f9c3388dfff177e8a6cda0.png?h73jnZ4dogRU5sIjKFl7ciVr8nvZWJrHB6k02kvHMiUYN_92zjJVjJgJ-QyoKPoBaazz-wj9GAqv532UFwF5FYUGri-oOh1NOkPntcke_AL17Hj79fmTue4pnWun33AwqSCcgKF8CiqDfMHFHWXMGV77imE3NDKdnf9z9i9dilHG25z0)
Windows Defender, Firewalls and Anti-Virus

Any of these services could possibly conflict with the volume mounting. When in doubt, disable each service one by one to see if the volumes begin working correctly.

Windows Pro with Docker Desktop
If you are using Windows and Docker Desktop v2.2 or higher and the latest Create React App v3.4.1, most of the file watching issues have been resolved. If you are using a version of Docker Desktop older than version v2.2 you should update to the latest version.

Working example commands for each terminal (be sure to run these commands in the root of your project directory)

GitBash

winpty docker run -it -p 3000:3000 -v /app/node_modules -v "/$(PWD)":/app IMAGE_ID

PowerShell

docker run -it -p 3000:3000 -v /app/node_modules -v ${pwd}:/app IMAGE_ID

Docker Desktop File Sharing

By default, your C:\ will be shared with Docker Desktop for volume mounting. If you are using an external or network drive or some other drive on your machine such as D:\ or F:\ it will not be shared and your volumes not be mounted properly.

Please make sure that the drive you are using has been shared by clicking Docker icon in the systray. Click "Settings", then "Resources" and finally "File Sharing". The drive should be listed like below:
![image](https://img-a.udemycdn.com/redactor/raw/2020-04-15_00-16-59-5edc362fabd1e2ec7951fb1c000db333.png?9D41c3cOvR0GGrZPN1Ex-nlhMHFYkxpxN1Xex8SnQ6zIhPYtkdIq27G-J0meH8Speo3VYzvfuw3XCcVvRkECD2xovMH-8foVkEqQTwO7IfDtta4K8oabE7vJ8v9ZD4xTRP13vUGBm0Jd7CDQKbZ-e_TcY3gX5B0R6syx8BSrtaNKQLI3)

Windows Defender, Firewalls and Anti-Virus

Any of these services could possibly conflict with the volume mounting. When in doubt, disable each service one by one to see if the volumes begin working correctly.
