import React from "react";
import { StyleSheet, View } from "react-native";
import YouTube from "react-native-youtube";


export function CreateVideo(props){
  return <YouTube {...props} apiKey={"AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw"} />;
};

export function getChannelData(){
  return fetch(`https://www.googleapis.com/youtube/v3/search/?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`)
    .then(res => res.json())
    .then(res => {
      const items: VideoItems = res.items.map(item => ({
        videoId: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default
      }));

      return items;
    })
    .catch(error => {
      console.error(error);
    });
}