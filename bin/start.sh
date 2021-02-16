#!/bin/bash

mkdir -p /run/nginx && yarn build:frontend && nginx && yarn run migration && yarn start:backend
