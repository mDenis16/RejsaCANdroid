import { View, Text, Animated, Easing } from "react-native";
import React, { useRef, useEffect, Component } from "react";

import SpeedometerSVG from "../../../images/gauge-speedo.svg";
import RotorCenterSVG from "../../../images/Center.svg";
import NeedleSVG from "../../../images/needle.svg";

export default class Speedometer extends Component {
  constructor(props) {
    super(props);
    this.state = { anim: new Animated.Value(props.speed) };
  }
  componentDidMount = () => {
    this.startImageRotateFunction();
  };
  componentDidUpdate = () => {
    // Animated.timing(this.state.anim, {
    //   toValue: this.props.rpm,
    //   duration: 50,
    //   easing: Easing.linear,
    //   useNativeDriver: false,
    // }).start();
    // console.log('updated shit')
  };
  startImageRotateFunction = () => {
    if (this.props.booting) {
      Animated.timing(this.state.anim, {
        toValue: 7000,
        duration: 1600,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(this.state.anim, {
          toValue: 0,
          duration: 1400,
          easing: Easing.linear,
          useNativeDriver: true,
        }).start();
        console.log("finished ");
      });
    }
  };
  render() {
    Animated.timing(this.state.anim, {
      toValue: this.props.speed,
      duration: 500,
      useNativeDriver: true,
      easing: Easing.linear,
    }).start();
    return (
      <View
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
    
          width: '50%',
          height: '80%',
         
        }}
      >
        <SpeedometerSVG
          width={"100%"}
          height={"100%"}
          fill="black"
        ></SpeedometerSVG>

        <Animated.View
          style={{
            width: "100%",
            height: "10%",
            position: "absolute",

            transform: [
              {
                rotate: this.state.anim.interpolate({
                  inputRange: [0, 7000],
                  outputRange: ["-45deg", "220deg"],
                }),
              },
            ],
          }}
        >
          <NeedleSVG
            height={"100%"}
            width={"32%"}
            fill="black"
            style={{
              position: "absolute",
              right: "50%",
              transform: [
                {
                  rotate: "360deg",
                },
              ],
            }}
          ></NeedleSVG>
        </Animated.View>
        <RotorCenterSVG
          width={"12%"}
          height={"12%"}
          fill="black"
          style={{ position: "absolute" }}
        ></RotorCenterSVG>
      </View>
    );
  }
}
