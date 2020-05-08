# CameraTest Project using Node.js(Express, Sequelize, PostgreSQL), Vue.js, Socket.io.

## Build Configuration
### Backend .env
HOST='Server Host Url'
PORT='Server Host Port'
DB_HOST='DB Host Url'
DB_PORT='DB Host Port'
DB_NAME='DB Name'
DB_USER='DB UserName'
DB_PASSWORD='DB Password'
SECRET_KEY='Security Key which used on passport'
### Frontend .env (frontend/.env)
VUE_APP_BASE_URL=`${Server Host Url}:${Server Host Port}`

## How to build
### Install Dependency Packages
1. Server
npm install
2. Client
cd ./frontend
npm install

### Db migrate & seed
npm run migrate
npm run seed

### Build the project
npm run start

## How to run
## Log In
User: admin@admin.com
Password: admin

## Test API
Can test 2 apis(one: use authorization token, onother: user/password) using TestCase.json

Finally, will comfirm that add messages to dashboard when calls CT(Camera Test) apis.