/** @flow */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList
} from "react-native";
import type { DefaultPageProps, VideoItems, VideoItem } from "../types";
import PlayList from "../components/PlayList";

type Props = { data: VideoItems } & DefaultPageProps;
type State = {};

export default class PlayListScreen extends React.Component<Props, State> {
  state = {};
  static navigationOptions = {
    headerTitle: "PlayList",
    headerStyle: { backgroundColor: "#000" },
    headerTitleStyle: { color: "#fff" }
  };

  constructor(props: Props) {
    super(props);
  }

  openVid = (videoId: string) => {
    this.props.navigation.navigate("Video", { videoId });
  };

  render() {
    return (
      <View style={{ flexGrow: 1 }}>
        <PlayList onItemSelect={this.openVid} data={this.props.data} />
      </View>
    );
  }
}
