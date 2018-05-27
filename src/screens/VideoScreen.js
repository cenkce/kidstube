/** @flow */

import React from "react";
import { StyleSheet, View } from "react-native";
import YouTube from "react-native-youtube";
import type { DefaultPageProps } from "../types";

type Props = {} & DefaultPageProps;
type State = {
  isReady: boolean,
  status: string,
  quality: string,
  error: {} | null
};

export default class VideoScreen extends React.Component<Props, State> {
  state = {
    isReady: false,
    status: "",
    quality: "",
    error: null
  };

  static navigationOptions = {
    headerTitle: "YouTube",
    headerStyle: {
      backgroundColor: "#000"
    },
    headerTitleStyle: {
      color: "#fff"
    }
  };

  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flexGrow: 1 }}>
        <YouTube
          videoId={this.props.navigation.state.params.videoId}
          play={false}
          fullscreen={false}
          loop={false}
          apiKey={"AIzaSyBJ3ntReiv0L19H2RoYW62LpRdIuyPhIpw"}
          onReady={e => this.setState({ isReady: true })}
          onChangeState={({ state }) =>
            this.setState({
              status: state
            })
          }
          onChangeQuality={({ quality }) =>
            this.setState({
              quality
            })
          }
          onError={({ error }) =>
            this.setState({
              error
            })
          }
          style={{ alignSelf: "stretch", height: 300 }}
        />
      </View>
    );
  }
}
