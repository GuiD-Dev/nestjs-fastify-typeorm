#!make

MAKEFLAGS += -j4

BUILD_DIR?=$(shell pwd)
HOST_USER_ID?=$(shell id -u)
HOST_USER_GID?=$(shell id -g)
PROJECT_NAME_DEV?=nestjs-fastify-typeorm-dev

setup-dev:
	docker image build \
		--build-arg HOST_USER_ID=$(HOST_USER_ID) \
		--build-arg HOST_USER_GID=$(HOST_USER_GID) \
		-f docker/development.dockerfile \
		-t $(PROJECT_NAME_DEV) .

dev:
	docker container run --rm -it \
		-v $(BUILD_DIR):/home/node/app \
		-p 3000:3000 \
		-p 9229:9229 \
		--user node \
		--network host \
		--name $(PROJECT_NAME_DEV) \
		$(PROJECT_NAME_DEV)

setup-db:
	docker image build -f docker/postgres.dockerfile -t postgres .

init-db:
	docker container run -d --rm \
		-p 5432:5432 \
		--network host \
		--name postgres \
		postgres

stop-db:
	docker container stop postgres