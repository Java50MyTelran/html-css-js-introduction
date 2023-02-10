import { sleep } from "./utils/sleep.js";
import { VideoPlayer } from "./ui/video-player.js";
import { DataForm } from "./ui/input-data-form.js";
import { checkPlayingTime } from "./service/checkTime.js";
const dataForm = new DataForm("form-section");
const videoPlayer = new VideoPlayer("video-section");
dataForm.addHandler(async (data) => {

    let res = checkPlayingTime(data.time)
    if (!res) {
        videoPlayer.setUrl(data.link);
        videoPlayer.start();
        await sleep(data.time * 1000);
        videoPlayer.stop();
    }
    return res;

})




