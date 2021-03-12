# Specify a base image
FROM node:alpine

WORKDIR /usr/app
#      |  ^^^^^ |  any following command will be executed relatie to this path in the container 

# Install some dependencies
COPY package.json .
RUN npm install 
# npm is only gonna reinstall during the build process if I add any new packages to the package.json file 
COPY . .

# Default command double quotes is important
CMD ["npm", "start"]