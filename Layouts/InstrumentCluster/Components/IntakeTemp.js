import { View, Text, Animated, Easing } from "react-native";
import React, { useRef, useEffect, Component } from "react";

import IntakeTempSVG from "../../../images/temperature.svg";

export default class IntakeTemp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
  

    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
         
          width: "25%",
          height: "25%",
       
        }}
      >
        <IntakeTempSVG
          width={"100%"}
          height={"100%"}
          fill={'whitesmoke'}
        ></IntakeTempSVG>

        <Text
          style={{
            fontSize: 13,
            color: 'whitesmoke'
          }}
        >
          {this.props.temp} C
        </Text>
      </View>
    );
  }
}
