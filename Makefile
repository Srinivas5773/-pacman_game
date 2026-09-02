.PHONY: all start generate test build docker-build docker-run

all: generate test

start:
	node server.js

generate:
	node scripts/generate_55k_dataset.js

test:
	npx jest --verbose

build:
	node scripts/build.js

docker-build:
	docker build -t pacman-arcade-game .

docker-run:
	docker run -p 3000:3000 pacman-arcade-game
