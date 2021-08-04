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
  },
  
  powerbi: {
    
    authenticationMode: "ServicePrincipal",
    authorityUri: "https://login.microsoftonline.com/common/v2.0",
    scope: "https://analysis.windows.net/powerbi/api",
    apiUrl: "https://api.powerbi.com/",
    clientId: "ba892503-86f3-4d3a-bb32-890c72ca5414",
    workspaceId: "5e36bcd0-d245-4c8b-aae3-0d0f6c88523f",
    reportId: "7c1774c7-598c-4cb1-ae44-d0dc1eac0e28",
    pbiUsername: "",
    pbiPassword: "",
    clientSecret: "pFRu.cYj5sqww9452-j_XP_3phU2KCaRV-",
    tenantId: "02aa9fc1-18bc-4798-a020-e01c854dd434"

  }
};
