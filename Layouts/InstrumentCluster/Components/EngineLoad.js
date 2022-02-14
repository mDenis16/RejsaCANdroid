import { View, Text, Animated, Easing } from "react-native";
import React, { useRef, useEffect, Component } from "react";

import EngineLoadSVG from "../../../images/engine_load.svg";

export default class EngineLoad extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var color = "black";
    if (this.props.load >= 95) color = "red";
    else if (this.props.load > 85) color = "orange";
    else color = "#42b3f5";

    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          
          width: "25%",
          height: "25%",
        }}
      >
        <EngineLoadSVG
          width={"100%"}
          height={"100%"}
          fill={color}
        ></EngineLoadSVG>

        <Text
          style={{
            fontSize: 13,
            color: color
          }}
        >
          {this.props.load} LOAD
        </Text>
      </View>
    );
  }
}
