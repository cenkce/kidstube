import React from "react";
import { StyleSheet, View } from "react-native";
import YouTube from "react-native-youtube";


export function CreateVideo(props){
  return <YouTube {...props} apiKey={"AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw"} />;
};
