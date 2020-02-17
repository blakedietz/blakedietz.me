---
title: ffmpeg downscale all videos in a directory
date: "2018-02-11T12:00:00.169Z"
description: Learn how to downscale all videos in a directory
path: "/blog/ffmpeg-one-liners"
---

### Prerequisites

This article assumes that you've already installed `ffmpeg`.

### Description

If you want to downscale your videos for sharing, this little one liner is a nice way to do so.

```
# Look through all files in the current directory
for file in ./*;
do
  ffmpeg -i "$file" -filter:v scale=960:-1 -c:a copy "$file.mp4";
done
```

You'll need to make sure that the first number for the scale ratio is a number that's the source video dimensions are divisible by. So for example the source video files were `1920 x 1080`, 960 is half of 1920.

If you aren't sure what the dimensions of your videos are, you can also use this one liner for json output.

```
ffprobe -v quiet -print_format json -show_format -show_streams ~/your/path/yourvideo.format
```

## References

- https://superuser.com/questions/624563/how-to-resize-a-video-to-make-it-smaller-with-ffmpeg
- https://stackoverflow.com/questions/684015/how-can-i-get-the-resolution-width-and-height-for-a-video-file-from-a-linux-co
