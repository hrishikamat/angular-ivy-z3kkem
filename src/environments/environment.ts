// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  leni: {
    baseUrl: "https://app.leni.ai/",
    token: "",
    user: "prakhar.adhyaru@lntinfotech.com",
    password: "",
    authenticateEndoint: "leni/v1/authenticate",
    accountEndpoint: "lenientry/v1/fetch-account-info",
    getPopularQuestionsEndpoint: "utility/v2/getPopularQuestions",
    getYourStatsTimeSavedEndpoint: "leni/v1/getYourStatsTimeSaved",
    notificationsEndpoint: "leni/v2/notifications",
    nudgesEndpoint: "tech-nudges/v2/nudges/filters",
    suggestEndpoint: "leni/v3/suggest",
    askLeniEndpoint: "leni/v4/askleni",
    recommendEnpoint: "/leni/v3/recommend"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
