#!/bin/bash

cd /app/frontend
npm run dev &

cd /app/backend
node server.js
