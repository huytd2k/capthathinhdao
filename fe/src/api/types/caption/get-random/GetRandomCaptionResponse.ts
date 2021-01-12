import type { ApiRouteEnum } from "src/api/enums/api-route.enum";
import type { paths } from "src/types/api";

export type GetRandomCaptionResponse = paths[ApiRouteEnum.CAPTION]['get']['responses']['200']['application/json']