import { videoConfig } from "../config/videoConfig.js"

export function checkPlayingTime(timeValue) {
    let res = '';
    if (timeValue < videoConfig.minTime || timeValue > videoConfig.maxTime) {
        res = `time value must be in the range [${videoConfig.minTime}-${videoConfig.maxTime}] `
    }
    return res;
}