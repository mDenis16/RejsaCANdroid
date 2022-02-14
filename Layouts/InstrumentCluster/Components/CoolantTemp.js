import { View, Text, Animated, Easing } from "react-native";
import React, { useRef, useEffect, Component } from "react";

import CoolantTempSVG from "../../../images/coolant.svg";

export default class CoolantTemp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var color = "black";
    if (this.props.temp >= 95) color = "red";
    else if (this.props.temp > 85) color = "orange";
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
        <CoolantTempSVG
          width={"100%"}
          height={"100%"}
          fill={color}
        ></CoolantTempSVG>

        <Text
          style={{
            fontSize: 13,
            color: color
          }}
        >
          {this.props.temp} C
        </Text>
      </View>
    );
  }
}
