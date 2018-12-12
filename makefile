build:
	docker-compose build

dev:
	docker-compose up

api-test-watch:
	docker-compose exec api npm run test:watch

web-test-watch:
	docker-compose exec api npm run test:watch

down:
	docker-compose down