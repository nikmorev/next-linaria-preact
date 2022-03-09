FROM node:17-alpine

WORKDIR /opt/project

COPY ./app .

RUN npm ci

EXPOSE 3000

# to start a container without running server use "tail -f /dev/null"
CMD npm run dev