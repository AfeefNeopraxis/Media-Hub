# Getting Started with MediaHub React App

MediaHub is a product designed and developed by Neopraxis.
This  platform will provide media sharing facility between organization and customers.

----
---
# Developer Document
1. Fork this project to your repository
2. Clone your forked repository to your device
3. Checkout to "development" branch
    * ```git checkout development```
4. If you are working on a new feature, create new branch named as the name of the feature. (this should be made from development branch)
    * create and checkout to that branch
        * ```git branch <new-feature-branch-name>```
        * ```git checkout <new-feature-branch-name>```
    * or you can use this single command instead of the above two 
        * ```git checkout -b <new-feature-branch-name>```
4. If you are working on existing feature, checkout to that specific branch
    * ```git checkout <branch-name>```
5. Code your changes only on that specific branch **not on development branch**
5. Commit your work daily
    * ```git add .```
    * ```git commit -m <commit-message>```
6. After finilizing the work, just **document your code using inline commands**
7. Test your code and working
8. Only if you are completed. It's the time to merge the your branch to "development" branch. 
    * for that you need to fetch the latest development branch to your local system
    * ```git checkout development```
    * ```git pull```
    * now merge your branch to development branch
    * ```git merge <branch-name>```
9. Upload to your cloud repository
    * ```git push origin development```
10. Make a pull request to this repository



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
