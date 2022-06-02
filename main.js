edited_video_button = document.getElementById("one");
raw_video_button = document.getElementById("two");

video_player = document.getElementById("video1");

video_number = 0;

edited_video = "editedvideo.mp4";
raw_video = "rawvideo.mp4";

change_video();

edited_video_button.onclick = function() {
    if (video_number == 0) {
        return;
    } else {
        video_number = 0;
        change_video();
    }
};

raw_video_button.onclick = function() {
    if (video_number == 1) {
        return;
    } else {
        video_number = 1;
        change_video();
    }
};

function change_video() 
{
    if (video_number == 0){
        video_player.src = edited_video;
    } else {
        video_player.src = raw_video;
    }
    video_player.load();
}