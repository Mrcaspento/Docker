# DockerApps

A little guide I made to help navagiate an understanding of docker

Down below I will list Installation reqs
with links that I used.

---

# Installation

## For Window users

WSL2
Some Windows 10 Home users may be able to install Docker Desktop if their computer supports the Windows Subsystem for Linux (WSL2).

Please see this guide first which includes all of the steps to install and enable WSL2:

https://docs.microsoft.com/en-us/windows/wsl/install-win10

Once you have successfully installed and enabled WSL2 and then installed the Linux OS of your choice, continue to the Docker Desktop installation docs here:

https://docs.docker.com/docker-for-windows/wsl/

With Docker Desktop installed using WSL2 as a backend, you will now be able to follow along with the course. You will access the applications at localhost just like we do in the video lectures.

Important - A significant difference when using WSL2 is that you will need to create and run your project files from within the Linux filesystem, not the Windows filesystem. This will be very important in later lectures when we cover volumes.

You can access your Linux system by running wsl in the Cortana bar.

Docker Toolbox
If you are using a Windows 10 machine that does not support WSL2, or, you are using even older versions such as Windows 7, you will need to install Docker Toolbox. It is important to note, however, that this software has been officially deprecated by the Docker engineers and may not continue to work into the future.

Release downloads are available here:
https://github.com/docker/toolbox/releases

Download the .exe for the latest release and run the installer. Docker Toolbox will setup and install everything you need including VirtualBox.

You may also need to enable virtualization in your computer's BIOS settings. This will be different for each manufacturer, please refer to their documentation on which keys to use to access these settings on reboot.

After Toolbox is finished installing, open the Docker Quickstart Terminal. This will complete the setup and provision your VirtualBox machine.

Launch the Docker QuickStart terminal and type the command:

docker run hello-world

This should pull down the test container and print hello-world to your screen.

## Docker

Installation Steps

- Create Dockerhub account
  https://hub.docker.com/signup

- Install Docker
  The Docker docs suggest setting up a Docker repository to install and update from.
  This is where you should start: https://docs.docker.com/install/linux/docker-ce/ubuntu/#set-up-the-repository

- Login to the Dockerhub
  In order to push and pull images, you will need to login to the Dockerhub. In your terminal, run docker login and then enter your Dockerhub account's username and password.

## References

If you want to learn more you can follow this link to a course
https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/
