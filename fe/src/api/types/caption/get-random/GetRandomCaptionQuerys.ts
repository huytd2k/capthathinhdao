import type { ApiRouteEnum } from "src/api/enums/api-route.enum";
import type { paths } from "src/types/api";

export type GetRandomCaptionQuerys = paths[ApiRouteEnum.CAPTION]['get']['parameters']['query']