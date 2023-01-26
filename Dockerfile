FROM node:19.1.0

# Add your source files
COPY . .  

# Create app directory
WORKDIR /bho_backend/node_app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
ARG NPM_TOKEN
COPY package*.json .
COPY .npmrc .  
RUN npm install  

# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD ["npm", "start"]
