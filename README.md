# XC Code Challenge


## Features:
- Vue Carousel Component
    - Utilizes Vue Transitions for crisp slide animations.

- Image Swapping Functionality

- Responsive Design
    - Developed for any screen size and device -- desktop, tablet, and mobile devices.
    - Uses CSS grids for modern, robust, responsive design.

- Reusable Vue Components:
    - `AppButton.vue`, `AppCard.vue`, and `TheCarousel.vue` can be reused in any Vue application.

- Custom Webpack Setup:
    - Two configs: one for dev and other for production build.
    - Transpiles ES6+ and compiles `.vue` and `.scss` files.
    - Dev:
        - Custom Dev Server using Node.js gives us extra customization.
        - Watches for changes and automatically rebuilds on save.
        - Automatically opens browser when dev server is started.
    - Prod:
        - Bundles assets and dependencies.
        - Minifies and optimizes assets.

- Unit Tests using Jest
    - Configured for reporting test results and code coverage.
    - Configured to test both `.js` and `.vue` files.

- Docker Image
    - Makes our app portable for easy deployment.
    - Containerizes our production dependencies (e.g. Nginx).


## Running the App:
You can run a local development of this app in the terminal:
- Clone this repo and `cd` to the project directory.
- Install npm packages: `$ npm install`
- Run `$ npm run serve`
- Your browser will automatically open.

You can also build and run a production version of the app on you local via the terminal:
- Clone this repo and `cd` to the project directory.
- Install npm packages: `$ npm install`
- Build the production app: `$ npm run build`
- Run the app you just built: `$ npm run start`
- Open your browser and access the app at `http://localhost:8080`


## Running the App Via Docker:
You can run a containerized version of this app on your local. 
- You'll first need to install Docker; check the instructions for your operating system: [Win](https://docs.docker.com/docker-for-windows/install/) | [Linux](https://docs.docker.com/install/linux/docker-ce/ubuntu/) | [Mac](https://docs.docker.com/docker-for-mac/install/).
- Once you have Docker installed, in the terminal run: 
```bash
$ docker run -it -p 8080:80 --rm deesus/xc-challenge:1
```
This will pull and run the Docker image from the remote (public) repo.
- In your browser, you can access the app at `http://localhost:8080`


## Running Unit Tests:
This project uses [Jest](https://jestjs.io/) for unit tests.
- On your local environment, you may run unit test with the following command: `$ npm run test:unit`
- Jest will run all applicable tests and output a results summary in the command line. It will also generate a full report and coverage summary -- found in the `/coverage` folder.
- To create a new test spec, create a JS file ending in the `.spec.js` file extension and place it any folder named `__tests__`


## Tech Notes:

#### Vue:
- Vuex is probably overkill for a relatively simple app; therefore, it wasn't implemented.
- Vue Router is minimally used -- only to redirect invalid routes to the home page.

#### Webpack Setup:
This project comes with a custom Webpack dev server that runs on top of Node.js/Express.js. This opens us up for additional Webpack customization (more so than the plugins found in Webpack's docs).

#### Node Server:
- We are currently using the Node server as a custom dev server (n.b. this is **not** the same as Webpack's `webpack-dev-server` plugin).
- If you don't want to use Docker to run the app, the Node server doubles as a lightweight production server (not recommended for real applications, though).

#### Docker:
For production settings, we would prefer a more robust solution for containerizing/isolating our dependencies (OS, web server, etc.) as well being able to easily port to different machines. Therefore, Docker containers are the recommended solution for production apps.
- The Docker container -- i.e. Nginx -- is configured to run Vue Router in [history mode](https://router.vuejs.org/guide/essentials/history-mode.html); however, the repo/app is set to the default _hash mode_ to so that it can be run on a local machine with just npm/Node.
- See the `Docker.prod` file for (minimal) instructions on building a new Docker image.
- Deployment of the container will depend on your hosting service (e.g. AWS, Azure, Google Cloud, Heroku, etc.).

#### Nginx:
- Nginx is the recommended server for production deployments. Although for a simple application like this, it doesn't matter if we run on a Node.js server or Nginx, spinning up a simple Nginx server requires minimal effort.


## Technologies Used:
- Vue
- Vue Transitions
- Webpack
- Node.js
- Express.js
- Jest
- CSS Grids
- Docker
- Nginx
- Sass
