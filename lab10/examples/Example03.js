import React, { Component } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebaseDB";
import { Button, Input, Image } from "react-native-elements";

class Example03 extends Component {
  constructor() {
    super();

    this.state = {
      key: "",
      id: "",
      name: "",
      gpa: "",
    };
  }

  componentDidMount() {
    const subjDoc = firebase
  
      .firestore()
      .collection("students")
      .doc(this.props.route.params.key);
      // console.log("this.props.root.params()", this.props.route.params.key)
    subjDoc.get().then((res) => {
      if (res.exists) {
        const subj = res.data();
        this.setState({
          key: res.id,
          id: subj.id,
          name: subj.name,
          gpa: subj.gpa,
        });
      } else {
        console.log("Document does not exist!!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  };

  updateSubject() {
    const updateSubjDoc = firebase
      .firestore()
      .collection("students")
      .doc(this.state.key);
    updateSubjDoc
      .set({
        id: this.state.id,
        name: this.state.name,
        gpa: this.state.gpa,
      })
      .then(() => {
        Alert.alert(
          "Updating Alert",
          "The subject was updated!! Pls check your DB!!"
        );
      });
  }
  deleteSubject() {
    const delSubjDoc = firebase
      .firestore()
      .collection("students")
      .doc(this.state.key);
    delSubjDoc.delete().then((res) => {
      Alert.alert(
        "Deleting Alert",
        "The subject was deleted!! Pls check your DB!!"
      );
    });
  }

  render() {
    return (
      <View style={styles.container}> 
        <Image
          source={require("../assets/IT_Logo.png")}
          style={{ width: 120, height: 100 }}
          containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <Input
          placeholder={"Subject id"}
          value={this.state.id}
          onChangeText={(val) => this.inputValueUpdate(val, "id")}
        />
        <Input
          placeholder={"Subject Name"}
          value={this.state.name}
          onChangeText={(val) => this.inputValueUpdate(val, "name")}
        />
        <Input
          placeholder={"Subject gpa"}
          value={this.state.gpa}
          onChangeText={(val) => this.inputValueUpdate(val, "gpa")}
        />
        <Button
          title="Update Student Info"
          onPress={() => {
            this.updateSubject();
          }}
        />
        <Button
          title="Delete Student"
          onPress={() => {
            this.deleteSubject();
            this.props.navigation.navigate("Example01")
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
});

export default Example03;
