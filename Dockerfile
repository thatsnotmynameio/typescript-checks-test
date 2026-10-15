FROM node:24-alpine
WORKDIR /app
COPY dist ./dist
CMD ["node", "dist/index.js"]
