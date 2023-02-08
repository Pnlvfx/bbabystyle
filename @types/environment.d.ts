/* eslint-disable no-unused-vars */
namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SERVER_URL: string;
    NEXT_PUBLIC_CLIENT_URL: string;
    NEXT_PUBLIC_NODE_ENV: "development" | "production";
    NEXT_PUBLIC_GOOGLE_CLIENT_ID: string;
    NEXT_PUBLIC_YOUTUBE_CLIENT_ID: string;
    NEXT_PUBLIC_GA_ID: string;
  }
}
