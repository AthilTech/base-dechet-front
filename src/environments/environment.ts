// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //this api is just for demo
  // ProjectURL:'https://localhost:44351/api',
  SubsidiaryURL:'http://192.168.160.74:31633/production-subsidiaries/api/subsidiary',
 AttachementConf:{BucketName:'BaseDechet',PathUnderBucket:['ProviderFile']},
 AttachementURL:"http://192.168.160.74:31633/production-attachment/api",
 fakeUserApi:'https://jsonplaceholder.typicode.com' ,
  //apiURL:'http://localhost:44351/api',

 apiURL:'http://192.168.49.175:31585/api',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
