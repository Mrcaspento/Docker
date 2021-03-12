# Docker

---

## Development WorkFlow

Works around Github repo it will have two dif branches a `feature` which will be the one we add code to and make changes to
then we have a `master` branch which will be our clean and employed code

\*\* Note
I can delete the node_modules folder after I run `docker build -f Dockerfile.dev .` but when I run that code again it builds alot faster becuase the container has those files already

Any time you want expose a port from our port to our machine we need the `-p <portid>:<portid> <Image-ID>` tag

## Docker CLI Commands

- `docker ps`
- `docker ps --all`
- `docker stop <container id>`
- `docker kill`
- `docker exec -it <container id> redis-cli`
- `docker build -t <dockerUserName>/<Image_ID>:latest .`
- `docker run -p <portId>:<portId> <Image_ID>`
- `docker-compose up`
- `docker-compose up --build`
- `docker-compose ps `
- `docker build -f Dockerfile.dev .`
- `docker run -it -p 3000:3000 `
- `docker run -it -p <portId>:<portId> <Image_ID>`
- `docker run -p <portId>:<portId> <Image_ID>`
