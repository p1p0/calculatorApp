import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chiffre1: 0.0,
      clicOperateur: false,
      update: false,
      operateur: "",
      result: "0",
    };
  }

  calcul() {
    if (this.state.operateur === "+") {
      this.state.chiffre1 = this.state.chiffre1 + parseFloat(this.state.result);
      this.setState({ result: this.state.chiffre1 });
    }
    if (this.state.operateur === "-") {
      this.state.chiffre1 = this.state.chiffre1 - parseFloat(this.state.result);
      this.setState({ result: this.state.chiffre1 });
    }
    if (this.state.operateur === "*") {
      this.state.chiffre1 = this.state.chiffre1 * parseFloat(this.state.result);
      this.setState({ result: this.state.chiffre1 });
    }
    if (this.state.operateur === "/") {
      this.state.chiffre1 = this.state.chiffre1 / parseFloat(this.state.result);
      this.setState({ result: this.state.chiffre1 });
    }
  }
  //Listener affecté au bouton Chiffre
  ChiffreListener(number) {
    //On affiche le chiffre additionnel dans le label
    var str = "" + number;
    if (this.state.update) {
      this.state.update = false;
    } else {
      if (this.state.result !== "0") {
        str = this.state.result.concat(str);
      }
    }
    this.setState({ result: str });
  }
  //Listener affecté au bouton =
  EgalListener() {
    this.calcul();
    this.state.update = true;
    this.state.clicOperateur = false;
  }
  //Listener affecté au bouton +
  PlusListener() {
    if (this.state.clicOperateur) {
      this.calcul();
      this.setState({ result: this.state.chiffre1 + "" });
    } else {
      this.state.chiffre1 = parseFloat(this.state.result);
      this.state.clicOperateur = true;
    }
    this.state.operateur = "+";
    this.state.update = true;
  }
  //Listener affecté au bouton -
  MoinsListener() {
    if (this.state.clicOperateur) {
      this.calcul();
      this.setState({ result: this.state.chiffre1 + "" });
    } else {
      this.state.chiffre1 = parseFloat(this.state.result);
      this.state.clicOperateur = true;
    }
    this.state.operateur = "-";
    this.state.update = true;
  }

  //Listener affecté au bouton *
  MultiListener() {
    if (this.state.clicOperateur) {
      this.calcul();
      this.setState({ result: this.state.chiffre1 + "" });
    } else {
      this.state.chiffre1 = parseFloat(this.state.result);
      this.state.clicOperateur = true;
    }
    this.state.operateur = "*";
    this.state.update = true;
  }

  //Listener affecté au bouton /
  DivListener() {
    if (this.state.clicOperateur) {
      this.calcul();
      this.setState({ result: this.state.chiffre1 + "" });
    } else {
      this.state.chiffre1 = parseFloat(this.state.result);
      this.state.clicOperateur = true;
    }
    this.state.operateur = "/";
    this.state.update = true;
  }
  // AC Button
  ResetListener() {
    this.state.clicOperateur = false;
    this.state.update = true;
    this.state.chiffre1 = 0;
    this.state.operateur = "";
    this.setState({ result: "0" });
  }

  // Point Button
  PointListener() {
    if (!this.state.result.includes("."))
      this.setState({ result: this.state.result.concat(".") });
  }

  // Parcent Button
  ParcentButton() {
    var str = parseFloat(this.state.result);
    str = str / 100;
    this.setState({ result: str.toString() });
  }
  SignButton() {
    var str = parseFloat(this.state.result);
    str = str * -1;
    this.setState({ result: str.toString() });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.expression}></Text>
          <Text style={styles.result}>
            {this.state.result.length < 16
              ? `${this.state.result}`
              : `${this.state.result.toString().substr(0, 16)}`}
          </Text>
        </View>
        <View style={styles.containerButton}>
          {/* HEADER BUTTON */}
          <View style={styles.containButtonHeader}>
            <View style={{ flexDirection: "row" }}>
              <Button
                title="AC"
                titleStyle={styles.textHeader}
                buttonStyle={styles.buttonHeader}
                onPress={() => this.ResetListener()}
              />
              <Button
                title="+/-"
                titleStyle={styles.textHeader}
                buttonStyle={styles.buttonHeader}
                onPress={() => this.SignButton()}
              />
              <Button
                title="%"
                titleStyle={styles.textHeader}
                buttonStyle={styles.buttonHeader}
                onPress={() => this.ParcentButton()}
              />
            </View>
            {/* CENTER BUTTON */}
            <View style={{ flexDirection: "row" }}>
              <Button
                title="7"
                titleStyle={styles.textCenter}
                buttonStyle={styles.buttonCenter}
                onPress={() => this.ChiffreListener(7)}
              />
              <Button
                title="8"
                titleStyle={styles.textCenter}
                buttonStyle={styles.buttonCenter}
                onPress={() => this.ChiffreListener(8)}
              />
              <Button
                title="9"
                titleStyle={styles.textCenter}
                buttonStyle={styles.buttonCenter}
                onPress={() => this.ChiffreListener(9)}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Button
                title="4"
                titleStyle={styles.textCenter}
                buttonStyle={styles.buttonCenter}
                onPress={() => this.ChiffreListener(4)}
              />
              <Button
                title="5"
                titleStyle={styles.textCenter}
                buttonStyle={styles.buttonCenter}
                onPress={() => this.ChiffreListener(5)}
              />
              <Button
                title="6"
                titleStyle={styles.textCenter}
                buttonStyle={styles.buttonCenter}
                onPress={() => this.ChiffreListener(6)}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Button
                title="1"
                titleStyle={styles.textCenter}
                buttonStyle={styles.buttonCenter}
                onPress={() => this.ChiffreListener(1)}
              />
              <Button
                title="2"
                titleStyle={styles.textCenter}
                buttonStyle={styles.buttonCenter}
                onPress={() => this.ChiffreListener(2)}
              />
              <Button
                title="3"
                titleStyle={styles.textCenter}
                buttonStyle={styles.buttonCenter}
                onPress={() => this.ChiffreListener(3)}
              />
            </View>
            <View style={{ flexDirection: "row" }}>
              <Button
                title="0"
                titleStyle={styles.textCenterZero}
                buttonStyle={styles.buttonCenterZero}
                onPress={() => this.ChiffreListener(0)}
              />

              <Button
                title="."
                titleStyle={styles.textCenter}
                buttonStyle={styles.buttonCenter}
                onPress={() => this.PointListener()}
              />
            </View>
          </View>
          {/* SIDE BUTTON */}
          <View style={styles.containButtonSide}>
            <Button
              title="÷"
              titleStyle={styles.textSide}
              buttonStyle={styles.buttonSide}
              onPress={() => this.DivListener()}
            />
            <Button
              title="x"
              titleStyle={styles.textSide}
              buttonStyle={styles.buttonSide}
              onPress={() => this.MultiListener()}
            />
            <Button
              title="-"
              titleStyle={styles.textSide}
              buttonStyle={styles.buttonSide}
              onPress={() => this.MoinsListener()}
            />
            <Button
              title="+"
              titleStyle={styles.textSide}
              buttonStyle={styles.buttonSide}
              onPress={() => this.PlusListener()}
            />
            <Button
              title="="
              titleStyle={styles.textSide}
              buttonStyle={styles.buttonSide}
              onPress={() => this.EgalListener()}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  containerText: {
    justifyContent: "center",
    flex: 1,
    justifyContent: "flex-end", //Centered vertically
  },
  expression: {
    color: "#fff",
    marginLeft: 10,
  },
  result: {
    color: "#fff",
    textAlign: "right",
    fontSize: 80,
    marginRight: 25,
    marginBottom: -20,
  },

  containerButton: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 5,
  },
  containButtonHeader: {
    flexDirection: "column",
  },
  containButtonSide: {
    flexDirection: "column",
    width: "100%",
  },
  buttonHeader: {
    height: 90,
    width: 90,
    margin: 5,
    borderRadius: 64,
    backgroundColor: "#a5a5a5",
    color: "#000",
  },
  buttonSide: {
    height: 90,
    width: 90,
    margin: 5,
    borderRadius: 64,
    backgroundColor: "#ff9f0b",
  },
  buttonCenter: {
    height: 90,
    width: 90,
    margin: 5,
    borderRadius: 64,
    backgroundColor: "#333333",
  },
  buttonCenterZero: {
    height: 90,
    width: 190,
    margin: 5,
    borderRadius: 64,
    backgroundColor: "#333333",
    justifyContent: "flex-start",
    paddingLeft: 35,
  },

  textHeader: {
    color: "#000",
    fontFamily: "Helvetica",
    fontSize: 30,
  },
  textCenter: {
    color: "#fff",
    fontFamily: "Helvetica",
    fontSize: 30,
  },
  textCenterZero: {
    color: "#fff",
    fontFamily: "Helvetica",
    fontSize: 30,
  },

  textSide: {
    color: "#fff",
    fontFamily: "Helvetica",
    fontSize: 30,
  },
});
