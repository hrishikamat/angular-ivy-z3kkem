import { Component, OnInit } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { Router } from "@angular/router";
import * as pbi from "powerbi-client";
import { environment } from "src/environments/environment";
import { PowerBiReportDetails } from "../../../assets/pbi-config/embedReportConfig";
import { utils } from "../../../assets/pbi-config/utils";
import { embedConfig } from "../../../assets/pbi-config/embedConfig";
import ADAL from "adal-node";
import { HttpClient } from "@angular/common/http";
import { AdalService } from "src/app/services/Adal/adal.service";
import * as msal from "@azure/msal-node";

@Component({
  selector: "app-power-bi",
  templateUrl: "./power-bi.component.html",
  styleUrls: ["./power-bi.component.scss"],
})
export class PowerBiComponent implements OnInit {
  // may be useful
  name = "Power-BI-Visual";

  // no longer needed, replaced with showReport method kept for reference and confirmation of vars
  url = 'https://app.powerbi.com/reportEmbed?reportId=7c1774c7-598c-4cb1-ae44-d0dc1eac0e28&autoAuth=true&ctid=02aa9fc1-18bc-4798-a020-e01c854dd434&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D&filterPaneEnabled=false&navContentPaneEnabled=false';
  urlSafe: SafeResourceUrl;

  constructor(
    // private adalService: AdalService,
    // private httpClient: HttpClient,
    public sanitizer: DomSanitizer,
    private router: Router
  ) {

    // test to see if service works
    // console.log("User info from JWT");

    // console.log(this.adalService.getUserInfo());

    // console.log("JWT Token");

    // console.log(this.adalService.getAccessToken());
  }

  backToGrowthOp(): void {
    this.router.navigate(
      [
        {
          outlets: {
            leftPanel: ["growth-opportunity-panel"],
            mainPanel: ["growth-opportunity"],
          },
        },
      ],
      {
        skipLocationChange: true,
        replaceUrl: false,
      }
    );
  }

  ngOnInit(): void {
    // this.showReport();
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  /**
   * the following method is from a testbed template and may need correction
   * Generate embed token and embed urls for reports
   * @return Details like Embed URL, Access token and Expiry
   */
  // async getEmbedInfo() {
  //   // Get the Report Embed details
  //   try {
  //     // Get report details and embed token
  //     const embedParams = await this.getEmbedParamsForSingleReport(
  //       environment.powerbi.workspaceId,
  //       environment.powerbi.reportId,
  //       null
  //     );

  //     return {
  //       accessToken: embedParams.embedToken.token,
  //       embedUrl: embedParams.reportsDetail,
  //       expiry: embedParams.embedToken.expiration,
  //       status: 200,
  //     };
  //   } catch (err) {
  //     return {
  //       status: err.status,
  //       error: `Error while retrieving report embed details\r\n${
  //         err.statusText
  //       }\r\nRequestId: \n${err.headers.get("requestid")}`,
  //     };
  //   }
  // }

  /**
   * Get embed params for a single report for a single workspace
   * @param {string} workspaceId
   * @param {string} reportId
   * @param {string} additionalDatasetId - Optional Parameter
   * @return EmbedConfig object
   */
  // async getEmbedParamsForSingleReport(
  //   workspaceId,
  //   reportId,
  //   additionalDatasetId?
  // ) {
  //   const reportInGroupApi = `https://api.powerbi.com/v1.0/myorg/groups/${workspaceId}/reports/${reportId}`;
  //   const headers = await this.getRequestHeader();

  //   // Get report info by calling the PowerBI REST API
  //   const result = this.httpClient.get(reportInGroupApi, {
  //     headers: headers,
  //   });

  //   let resp;
  //   result.subscribe(
  //     (response) => {
  //       resp = response;
  //       console.log("response");
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log("Error: ");
  //       console.log(error);
  //     }
  //   );

  //   // Convert result in json to retrieve values

  //   // Add report data for embedding
  //   const reportDetails = new PowerBiReportDetails(
  //     resp.id,
  //     resp.name,
  //     resp.embedUrl
  //   );
  //   const reportEmbedConfig = new embedConfig();

  //   // Create mapping for report and Embed URL
  //   reportEmbedConfig.reportsDetail = [reportDetails];

  //   // Create list of datasets
  //   let datasetIds = [resp.datasetId];

  //   // Append additional dataset to the list to achieve dynamic binding later
  //   if (additionalDatasetId) {
  //     datasetIds.push(additionalDatasetId);
  //   }

  //   // Get Embed token multiple resources
  //   reportEmbedConfig.embedToken =
  //     await this.getEmbedTokenForSingleReportSingleWorkspace(
  //       reportId,
  //       datasetIds,
  //       workspaceId
  //     );
  //   return reportEmbedConfig;
  // }

  /**
   * Get Embed token for single report, multiple datasets, and an optional target workspace
   * @param {string} reportId
   * @param {Array<string>} datasetIds
   * @param {string} targetWorkspaceId - Optional Parameter
   * @return EmbedToken
   */
  // async getEmbedTokenForSingleReportSingleWorkspace(
  //   reportId,
  //   datasetIds,
  //   targetWorkspaceId
  // ) {
  //   // Add report id in the request
  //   let formData = {
  //     reports: [
  //       {
  //         id: reportId,
  //       },
  //     ],
  //   };

  //   // Add dataset ids in the request
  //   formData["datasets"] = [];
  //   for (const datasetId of datasetIds) {
  //     formData["datasets"].push({
  //       id: datasetId,
  //     });
  //   }

  //   // Add targetWorkspace id in the request
  //   if (targetWorkspaceId) {
  //     formData["targetWorkspaces"] = [];
  //     formData["targetWorkspaces"].push({
  //       id: targetWorkspaceId,
  //     });
  //   }

  //   const embedTokenApi = "https://api.powerbi.com/v1.0/myorg/GenerateToken";
  //   const headers = await this.getRequestHeader();

  //   // Generate Embed token for single report, workspace, and multiple datasets. Refer https://aka.ms/MultiResourceEmbedToken
  //   const result = this.httpClient.post(embedTokenApi, {
  //     headers: headers,
  //     body: JSON.stringify(formData),
  //   });

  //   const resp = result.subscribe(
  //     (response) => {
  //       console.log("response");
  //       console.log(response);
  //     },
  //     (error) => {
  //       console.log("Error: ");
  //       console.log(error);
  //     }
  //   );

  //   return resp;
  // }
  /**
   * Get Request header
   * @return Request header with Bearer token
   */
  // async getRequestHeader(): Promise<any> {
  //   // Store authentication token
  //   let tokenResponse;

  //   // Store the error thrown while getting authentication token
  //   let errorResponse;

  //   // Get the response from the authentication request
  //   try {
  //     tokenResponse = await this.getAccessToken();
  //     console.warn(tokenResponse);
  //   } catch (err) {
  //     if (
  //       err.hasOwnProperty("error_description") &&
  //       err.hasOwnProperty("error")
  //     ) {
  //       errorResponse = err.error_description;
  //     } else {
  //       // Invalid PowerBI Username provided
  //       errorResponse = err.toString();
  //     }
  //     return {
  //       status: 401,
  //       error: errorResponse,
  //     };
  //   }

  //   // Extract AccessToken from the response
  //   const token = tokenResponse.accessToken;
  //   return {
  //     "Content-Type": "application/json",
  //     Authorization: `${utils.getAuthHeader(token)}`,
  //   };
  // }

  // async getAccessToken() {
  //   // Use MSAL for authentication

  //   let AuthenticationContext = this.adalService;

  //   console.log(
  //     "Before adal service Login AccessToken is: " +
  //       this.adalService.getAccessToken()
  //   );
  //   //if access token is null get an access token
  //   if (this.adalService.getAccessToken() == null) {
  //     this.adalService.login;
  //   }

  //   console.log(
  //     "After adal service Login AccessToken is: " + this.adalService.getAccessToken()
  //   );

  //   // Create a config variable that store credentials from config.json
  //   let config = environment.powerbi;

  //   // let authorityUrl = config.authorityUri;

  //   const adalConfig = {
  //     auth: {
  //       // authentication related parameters
  //       clientId: environment.powerbi.clientId,
  //       clientSecret: environment.powerbi.clientSecret,
  //       authority:
  //         "https://login.microsoftonline.com/" + environment.powerbi.tenantId,
  //       redirectUri: "http://localhost:4200",
  //     },
  //     cache: {
  //       // cache related parameters
  //       cacheLocation: "sessionStorage",
  //       storeAuthStateInCookie: true,
  //     },
  //     system: {
  //       loggerOptions: {
  //         loggerCallback(loglevel, message, containsPii) {
  //           console.log(message);
  //         },
  //         piiLoggingEnabled: false,
  //         logLevel: "VERBOSE",
  //       },
  //     },
  //   };
  //   // Check for the Authentication

  //   let authorityUrl = config.authorityUri;
  //   authorityUrl = authorityUrl.replace("common", config.tenantId);
  //   console.log("AuthorityURL: " + authorityUrl);

  //   config.authorityUri = authorityUrl;

  //   // const msalConfig = {
  //   //   auth: {
  //   //     // authentication related parameters
  //   //     clientId: environment.powerbi.clientId,
  //   //     clientSecret: environment.powerbi.clientSecret,
  //   //     authority: "https://login.microsoftonline.com/" + environment.powerbi.tenantId,
  //   //     redirectUri: "http://localhost:4200",
  //   //   },
  //   //   // cache: { //c commented out because causing strange issues,
  //   //   //   // cache related parameters
  //   //   //   cacheLocation: 'sessionStorage',
  //   //   //   storeAuthStateInCookie: true,
  //   //   // },
  //   //   system: {
  //   //     loggerOptions: {
  //   //       loggerCallback(loglevel, message, containsPii) {
  //   //         console.log(message);
  //   //       },
  //   //       piiLoggingEnabled: false,
  //   //       logLevel: msal.LogLevel.Verbose,
  //   //     },
  //   //   },
  //   // };

  //   // let contextMsal = new msal.ConfidentialClientApplication(msalConfig);

  //   // return await new Promise(
  //   //   (resolve, reject) => {
  //   //       contextMsal.acquireTokenByClientCredential(
  //   //         {
  //   //           scopes: [config.scope],
  //   //           authority: config.authorityUri,
  //   //           correlationId: config.tenantId
  //   //           // clientId: config.clientId,
  //   //           // clientSecret: config.clientSecret
  //   //         }
  //   //         ).then(
  //   //           ( tokenResponse ) => {
  //   //             if(tokenResponse == null) reject(tokenResponse);

  //   //             console.log(tokenResponse);
  //   //             resolve(tokenResponse);
  //   //           }
  //   //         ).catch( (error) => {

  //   //           console.log(error);
  //   //         });
  //   //       });

  //   let contextAdal = ADAL.createAuthenticationContext(authorityUrl);
  //   console.log(config.scope);
  //   console.log(config.clientId);
  //   console.log(config.clientSecret);

  //   return await new Promise((resolve, reject) => {
  //     contextAdal.acquireTokenWithClientCredentials(
  //       config.scope,
  //       config.clientId,
  //       config.clientSecret,
  //       (err, tokenResponse) => {
  //         if (err) {
  //           reject(tokenResponse == null ? err : tokenResponse);
  //         }
  //         resolve(tokenResponse);
  //       }
  //     );
  //   });
  // }

  showReport() {
  //   // Report's Secured Token
  //   let accessToken = this.getAccessToken();

  //   // Embed URL
  //   let embedUrl =
  //     "https://embedded.powerbi.com/appTokenReportEmbed?reportId=" +
  //     environment.powerbi.reportId;

  //   // Report ID
  //   let embedReportId = environment.powerbi.reportId;

  //   // Configuration used to describe the what and how to embed.
  //   // This object is used when calling powerbi.embed.
  //   // This also includes settings and options such as filters.
  //   // You can find more information at https://github.com/Microsoft/PowerBI-JavaScript/wiki/Embed-Configuration-Details.
  //   let config = {
  //     type: "report",
  //     accessToken: accessToken,
  //     embedUrl: embedUrl,
  //     id: embedReportId,
  //     // filters: ,         //add filters
  //     settings: {
  //       filterPaneEnabled: false,
  //       navContentPaneEnabled: false,
  //     },
  //   };

  //   // Grab the reference to the div HTML element that will host the report.
  //   let reportContainer = <HTMLElement>(
  //     document.getElementById("reportContainer")
  //   );

  //   // Embed the report and display it within the div container.
  //   let powerbi = new pbi.service.Service(
  //     pbi.factories.hpmFactory,
  //     pbi.factories.wpmpFactory,
  //     pbi.factories.routerFactory
  //   );
  //   // @ts-ignore
  //   let report = powerbi.embed(reportContainer, config);

  //   // Report.off removes a given event handler if it exists.
  //   report.off("loaded");

  //   // Report.on will add an event handler which prints to Log window.
  //   report.on("loaded", function () {
  //     console.log("Loaded");
  //   });
  }

  // might be needed, but don't quite understand where it should go at this point
  // module.exports = {
  //   getEmbedInfo: getEmbedInfo,
  // };
}
//
