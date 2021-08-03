import { LeniNudgeData } from "./leni-nudge-data";

export type LeniNudge = {
    _id: string,
    data: LeniNudgeData[],
    indicator: string,
    measure: string,
    rank: number,
    title: string,
    whatNLG: string,
    whereNLG: string,
    whyNLG: string
    chart_image_exists?: boolean,
    chart_image?: string,
    dataset?: string,
};