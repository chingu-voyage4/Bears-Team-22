# Bears-Team-22
In this voyage we are cloning the [JobBatical](https://jobbatical.com/) web site

# Getting start
1. Fork this project
2. Clone your fork and prepare it.
    ```
    > git clone https://github.com/YOUR_USERNAME/YOUR_FORK_NAME.git
    > cd YOUR_FORK_NAME
    > yarn install-all
    > yarn start
    ```
    
The project is divede in two a front-end and a back-end. 

The project can run separately in diffrent terminals but if you run from the root, gulp.js will take care of that.

Contribution step:

1. Use yarn package manager as we have used yarn to scaffold the app. See https://yarnpkg.com
2. Make a separate branch per feature added or bug fixed. Make a different PR for each so that we can track history better.
3. **DO NOT COMMIT CHANGES THAT BREAKS THE RENDER**
4. Open a new issue for a new feature
6. Keep you commit messages meaningful
7. [Squash your commit](https://forum.freecodecamp.org/t/how-to-squash-multiple-commits-into-one-with-git/13231) if there are more than one.
8. Running tests before commit is recommended
9. Do not commit package-lock.json as we are using yarn.lock
10. Keep you environment vars in config.js file. If you add any config.js variable make sure to add it config.sample.js file for the references.
11. Keep your fork up to date as to avoid merge conflicts
Happy coding!!
