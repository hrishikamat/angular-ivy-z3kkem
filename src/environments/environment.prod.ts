export const environment = {
  production: true,
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
