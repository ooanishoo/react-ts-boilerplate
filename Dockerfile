FROM node:12.18-alpine
# ENV NODE_ENV=production
WORKDIR /usr/src/app
# COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY package*.json ./

# Installs all node packages
RUN npm install
# RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
