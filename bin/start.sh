#!/bin/bash

mkdir -p /run/nginx && yarn build:frontend && nginx && yarn start:backend
