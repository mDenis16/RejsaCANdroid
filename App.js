import { View, Text } from "react-native";

// From https://simpleicons.org/?q=expo
import ExpoLogo from "./assets/expo.svg";

import Clusters from "./Layouts/InstrumentCluster/Cluster";

export default function App() {
  return (
    <View
      style={{
        backgroundColor: "gray",
        flex: 1,
        overflow: 'hidden',
        width: '100%',
        height: '100%'
      }}
    >
     <Clusters></Clusters>
  
    </View>
  );
}
