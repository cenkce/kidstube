/** @flow */

export type VideoThumbnail = {
  url: string,
  width: number,
  height: number
};

export type VideoItem = {
  videoId: string,
  title: string,
  thumbnail: VideoThumbnail
};

export type VideoItems = Array<VideoItem>;
export type DefaultPageProps = {
  navigation: any
};
