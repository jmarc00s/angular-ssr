FROM node:slim
WORKDIR /app
COPY ./dist /app/dist
USER node
EXPOSE 4000
CMD ["node", "/app/dist/angular-ssr/server/main.js"]
