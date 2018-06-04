/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import VideoScreen from "./screens/VideoScreen";
import PlayListScreen from "./screens/PlayListScreen";
import { StackNavigator } from "react-navigation";
import type { VideoItems, VideoItem } from "./types";
const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

type Props = { navigation: any };
type State = { playList: VideoItems };

const maxResults = 30;
const apiKey = "AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw";
const channelId = "UCQzdMyuz0Lf4zo4uGcEujFw";

class App extends Component<Props, State> {
  state = { playList: [] };
  static navigationOptions = {
    title: "Home",
    headerStyle: { backgroundColor: "#F5FCFF" }
    // headerLeft: (
    //   <TouchableOpacity>
    //     <Image
    //       style={{ height: 22, width: 98, color: "#fff", marginLeft: 25 }}
    //       source={require("./images/logo.png")}
    //     />
    //   </TouchableOpacity>
    // ),
    // headerRight: (
    //   <View style={{ flexDirection: "row", marginRight: 20 }}>
    //     <TouchableOpacity style={{ paddingHorizontal: 5 }}>
    //       <Icon name="cast-connected" size={25} color={"#555"} />
    //     </TouchableOpacity>
    //     <TouchableOpacity style={{ paddingHorizontal: 5 }}>
    //       <Icon name="videocam" size={25} color={"#555"} />
    //     </TouchableOpacity>
    //     <TouchableOpacity style={{ paddingHorizontal: 5 }}>
    //       <Icon name="search" size={25} color={"#555"} />
    //     </TouchableOpacity>
    //     <TouchableOpacity style={{ paddingHorizontal: 5 }}>
    //       <Icon name="account-circle" size={25} color={"#555"} />
    //     </TouchableOpacity>
    //   </View>
    // )
  };

  componentDidMount() {
    
  }

  render() {
    return (
      <View style={styles.container}>
        <PlayListScreen
          navigation={this.props.navigation}
          data={this.state.playList}
        />
        {/* <VideoScreen youtubeId="FYB5BOUGimA" /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  body: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 30
  },
  vids: {
    paddingBottom: 30,
    width: 320,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    borderBottomWidth: 0.6,
    borderColor: "#aaa"
  },
  vidItems: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10
  },
  vidText: {
    padding: 20,
    color: "#000"
  },
  tabBar: {
    backgroundColor: "#fff",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderColor: "#bbb"
  },
  tabItems: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5
  },
  tabTitle: {
    fontSize: 11,
    color: "#333",
    paddingTop: 4,
    textDecorationLine: "underline"
  }
});

export default StackNavigator({
  Home: { screen: App },
  Video: { screen: VideoScreen },
  PlayList: { screen: PlayListScreen }
});
