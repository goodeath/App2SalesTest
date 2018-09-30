// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBjjijtol8zHVqFLPwus_S6_2f29GNQmNE',
    authDomain: 'app2salestest.firebaseapp.com',
    databaseURL: 'https://app2salestest.firebaseio.com',
    projectId: 'app2salestest',
    storageBucket: 'app2salestest.appspot.com',
    messagingSenderId: '958312940254'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
