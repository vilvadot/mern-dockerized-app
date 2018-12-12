# mern-dockerized-app
**M**ongo

**E**xpress

**R**eact

**N**ode

-----

### Pre-requisites
You need Node and Docker installed in your machine

-----

### Available commands
* **make build**: Builds the development containers
* **make dev**: Starts the development containers exposing the apps
* **make api-test-watch**: Run backend tests in watch mode. *(Run in a different terminal with container already up)*
* **make web-test-watch**: Run frotend tests in watch mode.
*(Run in a different terminal with container already up)*
* **make down**: Shuts down all containers

-----

### Exposed Ports
* **http://localhost:8001**: Web frontend  
* **http://localhost:8000**: API
* **http://localhost:27018**: Mongo database


----

## Nice to haves:

- [ ] Eslint
- [ ] Commitizen