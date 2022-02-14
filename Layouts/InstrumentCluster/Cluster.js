import { Component } from "react";
import { View, Text, Animated, Easing } from "react-native";
import Tachometer from "./Components/Tachometer";
import Speedometer from "./Components/Speedometer";
import TurboPressure from "./Components/TurboPressure";
import CoolantTemp from "./Components/CoolantTemp";
import IntakeTemp from "./Components/IntakeTemp";
import EngineLoad from "./Components/EngineLoad";
export default class Clusters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tachoMeterRPM: 0,
      SpeedometerKMS: 0,
      booting: true,
      CoolantTemp: 45,
      IntakeTemp: 18,
      EngineLoad: 15,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ tachoMeterRPM: 1000, booting: false });
      setInterval(() => {
        this.state.tachoMeterRPM += 130;
        this.setState({ tachoMeterRPM: this.state.tachoMeterRPM });

        this.state.SpeedometerKMS += 53;
        this.setState({ SpeedometerKMS: this.state.SpeedometerKMS });
      }, 200);
    }, 2000);
  }
  render() {
    return (
      <View
        style={{
          display: "flex",
          position: "relative",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: '#232323'
        }}
      >
        <Tachometer
          booting={this.state.booting}
          rpm={this.state.tachoMeterRPM}
        ></Tachometer>
        <Speedometer
          booting={this.state.booting}
          speed={this.state.SpeedometerKMS}
        ></Speedometer>

        <TurboPressure
          booting={this.state.booting}
          pressure={50}
        ></TurboPressure>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            width: "30%",
            height: "20%",
          
            bottom: 0,
          }}
        >
          <CoolantTemp
            booting={this.state.booting}
            temp={this.state.CoolantTemp}
          ></CoolantTemp>

          <IntakeTemp
            booting={this.state.booting}
            temp={this.state.IntakeTemp}
          ></IntakeTemp>
          <EngineLoad
            booting={this.state.booting}
            load={this.state.EngineLoad}
          ></EngineLoad>
        </View>
      </View>
    );
  }
}
