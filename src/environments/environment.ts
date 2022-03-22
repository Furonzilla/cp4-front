// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  backUrl: 'http://localhost:8080/api/',
  acceptedFiles: '.png, .jpeg, .jpg', // Allowed types of files for upload
  maxFileSize: 5000000, // Is equivalent to 5Mo
  tokenExpirationDelay: 864000000, // Is equivalent to 24 hours, same as back server
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
