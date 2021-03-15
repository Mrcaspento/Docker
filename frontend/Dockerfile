FROM node:alpine

WORKDIR '/app'

COPY package.json .

RUN npm install

COPY . .
#^^ copying over all the source code
RUN npm run build

FROM nginx
# after putting a second FROM statement its basically saying that the other FROM is stoping and now starting a new phase
COPY --from=0 /app/build /usr/share/nginx/html
## /app/build <--^^-- stuff that is imortant

##this is for PRODUCTION BUILDS

## when you want to deploy the production app Run `docker build .`
## Important to know the default port nginx run is "80"
## after running "docker build ." if you didnt add a tag to the image take the image_id and paste in the script 
#`docker run - p <portId>:80 <image_ID>