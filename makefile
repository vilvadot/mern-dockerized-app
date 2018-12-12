build:
	docker-compose build

start:
	docker-compose up

test-watch:
	docker-compose exec api npm run test:watch

down:
	docker-compose down