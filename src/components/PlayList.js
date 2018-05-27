/** @flow */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  ListView,
  Image
} from "react-native";
import type { VideoItems, VideoItem, VideoThumbnail } from "../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  img: {
    width: 193,
    height: 110
  }
});

type PlayListProps = {
  onItemSelect: Function,
  data: VideoItems
};

type PlayListItemProps = {
  title: string,
  image: VideoThumbnail,
  onPress: Function
};

type State = { dataSource: any };

export default class PlayList extends Component<PlayListProps, State> {
  constructor(props: PlayListProps) {
    super(props);
  }

  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    const dataSource = ds.cloneWithRows(this.props.data);

    return (
      <ListView
        dataSource={dataSource}
        renderRow={
          (data: VideoItem) => (
            <PlayListItem
              onPress={e =>
                this.props.onItemSelect(data.videoId)
              }
              image={data.thumbnail}
              title={data.title}
            />
          )
          // <View style={styles.container}>
          //   {/* <Image source={{ uri: imageSource }} style={styles.img} /> */}
          //   <Text>{data}</Text>
          // </View>
        }
      />
    );
    //   <FlatList
    //     ItemSeparatorComponent={
    //       Platform.OS !== "android" &&
    //       (({ highlighted }) => (
    //         <View style={[highlighted && { marginLeft: 0 }]} />
    //       ))
    //     }
    //     data={[{ title: "Title Text", key: "item1" }]}
    //     renderItem={PlayListItem}
    //   />
  }
}

const PlayListItem = (props: PlayListItemProps) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      {/* // onShowUnderlay={separators.highlight} */}
      {/* // onHideUnderlay={separators.unhighlight} */}
      <View
        style={{
          backgroundColor: "white",
          height: props.image.height,
          marginBottom: 5,
          justifyContent: "center",
          flexDirection: 'row',
          flexGrow: 1,
          paddingLeft: 3,
          paddingRight: 3
        }}
      >
        <Image
          source={{ uri: props.image.url }}
          style={{ minWidth: props.image.width, height: props.image.height, marginRight: 5}}
        />
        <Text style={{flex: 1, flexWrap: 'wrap'}}>{props.title}</Text>
      </View>
    </TouchableHighlight>
  );
};
