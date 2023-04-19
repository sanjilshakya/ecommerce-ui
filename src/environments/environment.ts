// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://localhost:3000/api',
  firebase: {
    apiKey: "AIzaSyCPZZZl6taUbUA_0wtPUl4MG20nSM_EWjo",
    authDomain: "a-z-shoppers.firebaseapp.com",
    projectId: "a-z-shoppers",
    storageBucket: "a-z-shoppers.appspot.com",
    messagingSenderId: "520600646827",
    appId: "1:520600646827:web:19446448d953b15d0c33ee"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
