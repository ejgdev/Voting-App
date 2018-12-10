# Voting App with NodeJS.

This App can create, edit and delete Polls, any non registered user can vote in any Poll.

Is made with NodeJS, MongoDB and EJS templates.

![](Voting-app-1.gif)

You can see this alive, [Click here](https://powerful-brook-68149.herokuapp.com/).

This Project is part of the Freecodecamp course.

## Getting Started

Click in the download button and get the .zip file. Extract the contents of the zip file.

Or can clone this repository, just copy the git url and open your terminal and run git clone + repository url:

```
git clone https://github.com/edlobox/Voting-App.git
```

### Prerequisites

It is necessary to have installed a package manager like npm or yarn.

- [NodeJS website](https://nodejs.org/).
- [Yarn website](https://yarnpkg.com/).

### Enviroment Keys configuration
#### Github OAuth Token keywords:
You need login in your Github account and enter this [link](https://github.com/settings/developers). Then create `New OAuth App`:

If you want run this Project in local, you can use this configuration:
- Application name: Any name you want.
- Homepage URL: http://localhost:8080/
- Authorization callback URL: http://localhost:8080/auth/github/callback

Then you can copy the **Client ID** as your `GITHUB_KEY` and your **Client Secret** as yor `GITHUB_SECRET` in your `.env file`.

#### MongoDB configuration
You Need an account in [mlab](https://mlab.com/), then create a database with two collections: `polls` and `users` like the App's models.

Then in your `.env file` copy the MongoDB URI:
- `mongodb://<dbuser>:<dbpassword>@ds<deploymentnumber>.mlab.com:<id>/mydb`

Note: In your mLab database website shows your URI link.

#### App  configuration
Only left two more configuration.
- one of them is the `PORT`, you can use your own port or by default is `8080`.
- The last one is the `APP_URL`, you can use your own url website or `http://localhost:8080/`.

You can see the `.env.example` file for references.

### Installing

For install this repository, just need to run this command:

```
npm install
```

### Start the Project
When everything is setup, you can run the project with this command:

```
npm run start:dev
```
Then open http://localhost:3000/ to see your app. By default run on port 3000.

## Deployment

There are differents way to Deployment.

If you want use Heroku, you can follow this [article](https://devcenter.heroku.com/articles/git).

When your heroku app is created, just need deploy with this command:

```
git push heroku master
```
## Freecodecamp Information

### Objective:
Build a full stack JavaScript app that is functionally similar to **[this page](https://fcc-voting-arthow4n.herokuapp.com/)** and deploy it to Heroku.

Note that for each project, you should create a new GitHub repository and a new Heroku project. If you can't remember how to do this, revisit [This Page](https://freecodecamp.org/challenges/get-set-for-our-dynamic-web-application-projects).

Here are the specific user stories you should implement for this project:

### User Story:
>1 As an authenticated user, I can keep my polls and come back later to access them.

>2.As an authenticated user, I can share my polls with my friends.

>3. As an authenticated user, I can see the aggregate results of my polls.

>4. As an authenticated user, I can delete polls that I decide I don't want anymore.

>5. As an authenticated user, I can create a poll with any number of possible items.

>6. As an unauthenticated or authenticated user, I can see and vote on everyone's polls.

>7. As an unauthenticated or authenticated user, I can see the results of polls in chart form. (This could be implemented using Chart.js or Google Charts.)

>8. As an authenticated user, if I don't like the options on a poll, I can create a new option.

### Links
[https://powerful-brook-68149.herokuapp.com/](https://powerful-brook-68149.herokuapp.com/)

[https://github.com/edlobox/Voting-App](https://github.com/edlobox/Voting-App)
