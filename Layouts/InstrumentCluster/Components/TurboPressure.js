import { View, Text, Animated, Easing } from "react-native";
import React, { useRef, useEffect, Component } from "react";

import TachoMeterSVG from "../../../images/gauge-tacho.svg";
import RotorCenterSVG from "../../../images/Center.svg";
import NeedleSVG from "../../../images/needle.svg";

export default class TurboPressure extends Component {
  constructor(props) {
    super(props);
    this.state = { anim: new Animated.Value(props.pressure) };
  }
  componentDidMount = () => {
    this.startImageRotateFunction();
  };
  
  startImageRotateFunction = () => {
    if (this.props.booting) {
      Animated.timing(this.state.anim, {
        toValue: 3,
        duration: 800,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(() => {
        Animated.timing(this.state.anim, {
          toValue: 0,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start();
        console.log("finished ");
      });
    }
  };
  render() {
    if (!this.props.booting) {
    Animated.timing(this.state.anim, {
      toValue: this.props.pressure,
      duration: 800,
      useNativeDriver: false,
      easing: Easing.linear,
    }).start();
  }
    return (
      <View
        style={{
          position: "absolute",
          
         
          borderColor: '#1d6b68',
          borderStyle: 'solid',
          borderWidth: 1,          
          width: '2%',
          height: '75%',
          right: '1.5%'
        }}
      >
        
        <Animated.View
          style={{
            width: "100%",
            position: "absolute",
            backgroundColor: '#3597cc',
            bottom: 0,
            height: this.state.anim.interpolate({
              inputRange: [0, 100],
              outputRange: ["0%", "100%"],
            }),
          }}
        >
       
       </Animated.View>
      </View>
    );
  }
}
