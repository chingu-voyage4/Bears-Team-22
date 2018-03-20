# Bears-Team-22
In this voyage we are cloning the [JobBatical](https://jobbatical.com/) web site

# Getting start
1. Fork this project.
2. Clone your fork and prepare it.
    ```
    > git clone https://github.com/YOUR_USERNAME/YOUR_FORK_NAME.git
    > cd YOUR_FORK_NAME
    > yarn install-all
    > yarn start
    ```
    
The project is divided into two parts; a front-end and a back-end. 

The project can be run separately in different terminals but if you run from the root, gulp.js will take care of everything.

Contribution steps:

1. Use the yarn package manager as we have used yarn to scaffold the app. See https://yarnpkg.com.
2. Make a separate branch per feature added or bug fixed. Make a different PR for each so that we can track history better.
3. **DO NOT COMMIT CHANGES THAT BREAK THE RENDER**
4. Open a new issue for new features.
6. Keep you commit messages meaningful
7. [Squash your commit](https://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231) if there are more than one.
8. Running tests before commit is recommended.
9. Do not commit package-lock.json as we are using yarn.lock
10. Keep your environment vars in config.js file. If you add any config.js variables make sure to add them config.sample.js file for the references.
11. Keep your fork up to date to avoid merge conflicts.
Happy coding!!
