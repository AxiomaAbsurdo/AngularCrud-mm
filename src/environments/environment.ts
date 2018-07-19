// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
  //CONEXION A LA BASE
  firebase: {
  	apiKey: "AIzaSyAHymwHwNDtWFs1XTFCqI6ib1k1cb85E4w",
    authDomain: "angular-crud-mm.firebaseapp.com",
    databaseURL: "https://angular-crud-mm.firebaseio.com",
    projectId: "angular-crud-mm",
    storageBucket: "angular-crud-mm.appspot.com",
    messagingSenderId: "1050159837419"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
