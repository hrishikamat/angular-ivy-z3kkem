// ----------------------------------------------------------------------------
// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.
// ----------------------------------------------------------------------------
import { v4 as guid } from 'uuid';
import { environment } from "src/environments/environment";

export class utils {

static getAuthHeader(accessToken) {

    // Function to append Bearer against the Access Token
    return "Bearer ".concat(accessToken);
}

static validateConfig():string {

    // Validation to check whether the Configurations are available in the environment.powerbi from the env file or not

    // let guid = require("guid");

    if (!environment.powerbi.authenticationMode) {
        return "AuthenticationMode is empty. Please choose MasterUser or ServicePrincipal in environment.powerbi.json.";
    }

    if (environment.powerbi.authenticationMode.toLowerCase() !== "masteruser" && environment.powerbi.authenticationMode.toLowerCase() !== "serviceprincipal") {
        return "AuthenticationMode is wrong. Please choose MasterUser or ServicePrincipal in environment.powerbi.json";
    }

    if (!environment.powerbi.clientId) {
        return "ClientId is empty. Please register your application as Native app in https://dev.powerbi.com/apps and fill Client Id in environment.powerbi.json.";
    }

    if (!guid.isGuid(environment.powerbi.clientId)) {
        return "ClientId must be a Guid object. Please register your application as Native app in https://dev.powerbi.com/apps and fill Client Id in environment.powerbi.json.";
    }

    if (!environment.powerbi.reportId) {
        return "ReportId is empty. Please select a report you own and fill its Id in environment.powerbi.json.";
    }

    if (!guid.isGuid(environment.powerbi.reportId)) {
        return "ReportId must be a Guid object. Please select a report you own and fill its Id in environment.powerbi.json.";
    }

    if (!environment.powerbi.workspaceId) {
        return "WorkspaceId is empty. Please select a group you own and fill its Id in environment.powerbi.json.";
    }

    if (!guid.isGuid(environment.powerbi.workspaceId)) {
        return "WorkspaceId must be a Guid object. Please select a workspace you own and fill its Id in environment.powerbi.json.";
    }

    if (!environment.powerbi.authorityUri) {
        return "AuthorityUri is empty. Please fill valid AuthorityUri in environment.powerbi.json.";
    }

    if (environment.powerbi.authenticationMode.toLowerCase() === "masteruser") {
        if (!environment.powerbi.pbiUsername || !environment.powerbi.pbiUsername.trim()) {
            return "PbiUsername is empty. Please fill Power BI username in environment.powerbi.json.";
        }

        if (!environment.powerbi.pbiPassword || !environment.powerbi.pbiPassword.trim()) {
            return "PbiPassword is empty. Please fill password of Power BI username in environment.powerbi.json.";
        }
    } else if (environment.powerbi.authenticationMode.toLowerCase() === "serviceprincipal") {
        if (!environment.powerbi.clientSecret || !environment.powerbi.clientSecret.trim()) {
            return "ClientSecret is empty. Please fill Power BI ServicePrincipal ClientSecret in environment.powerbi.json.";
        }

        if (!environment.powerbi.tenantId) {
            return "TenantId is empty. Please fill the TenantId in environment.powerbi.json.";
        }

        if (!guid.isGuid(environment.powerbi.tenantId)) {
            return "TenantId must be a Guid object. Please select a workspace you own and fill its Id in environment.powerbi.json.";
        }
    }
}

}
export default utils;

