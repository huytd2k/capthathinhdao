import Axios, { AxiosInstance } from "axios";
import * as dotenv from "dotenv";
import { ApiRouteEnum } from "./enums/api-route.enum";
import type { GetRandomCaptionQuerys } from "./types/caption/get-random/GetRandomCaptionQuerys";
import type { GetRandomCaptionResponse } from "./types/caption/get-random/GetRandomCaptionResponse";

dotenv.config({
  path: `.env`,
});

class ApiService {
  axios: AxiosInstance;
  constructor() {
    const SERVER_URL = process.env.SERVER_URL;
    if (!SERVER_URL) {
      throw new Error("Server url is missing");
    }
    this.axios = Axios.create({ baseURL: SERVER_URL });
  }

  async getRandomCaption({type: captionType}: GetRandomCaptionQuerys ) {
      return await this.axios.get<GetRandomCaptionResponse>(ApiRouteEnum.CAPTION, {params: {
          type: captionType
      }})
  }
}

export default new ApiService();