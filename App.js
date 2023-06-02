import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, View, Button, Dimensions } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

const videoIds = [
  "XqZsoesa55w",
  "xnvkStb2jT0",
  "1yyRvyNQ5rQ",
  "3xZ30C898VY",
]; // Array of video IDs

export default function App() {
  const [selectedVideoId, setSelectedVideoId] = useState(videoIds[0]);

  const handleVideoIdChange = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.playerContainer}>
        <YoutubePlayer
          height={300}
          play={true}
          videoId={selectedVideoId}
          webViewProps={{ allowsFullscreenVideo: true }}
        />
      </View>

      <View style={styles.buttonContainer}>
        {videoIds.map((videoId , index) => (
          <Button style={styles.buttonWrapper}
            key={videoId}
            title={`Video ${index + 1}`}
          
            onPress={() => handleVideoIdChange(videoId)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "center",
  },
  playerContainer: {
    width: Dimensions.get("window").width,
    aspectRatio: 16 / 9,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  buttonWrapper: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
 
});