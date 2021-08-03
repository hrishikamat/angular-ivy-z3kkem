import { LeniNudgeAppliedVariables } from "./leni-nudge-applied-variables";
import { LeniNudgeStory } from "./leni-nudge-story";

export type LeniNudgeData = {
    output: any[],
    xai?: LeniNudgeStory[],
    narrative: LeniNudgeStory[],
    applied_variables: LeniNudgeAppliedVariables[],
    type: string;
};