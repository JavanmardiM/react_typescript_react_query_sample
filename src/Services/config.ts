const env_app: string = process.env.REACT_APP_ENV as string;
let envApiUrl: string | undefined = "";

if (env_app === "production") {
  envApiUrl = process.env.REACT_APP_DOMAIN_PROD;
} else if (env_app === "staging") {
  envApiUrl = process.env.REACT_APP_DOMAIN_STAGE;
} else {
  envApiUrl = process.env.REACT_APP_DOMAIN_DEV;
}
export const API_Url = envApiUrl;
