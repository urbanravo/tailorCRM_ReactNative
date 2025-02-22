import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput, Button, TouchableRipple } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

export default function RegisterScreen({navigation}) {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState('');
  const [tab, setTab] = useState("phone"); // Default tab: Phone
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false); // State for the checkbox

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      {/* Tab Buttons */}
      <View style={styles.tabContainer}>
        <TouchableRipple
          onPress={() => setTab("phone")}
          style={[styles.tabButton, tab === "phone" && styles.activeTab]}
        >
          <Text
            style={[styles.tabText, tab === "phone" && styles.activeTabText]}
          >
            Phone Number
          </Text>
        </TouchableRipple>

        <TouchableRipple
          onPress={() => setTab("email")}
          style={[styles.tabButton, tab === "email" && styles.activeTab]}
        >
          <Text
            style={[styles.tabText, tab === "email" && styles.activeTabText]}
          >
            Email
          </Text>
        </TouchableRipple>
      </View>

      {/* Phone Tab */}
      {tab === "phone" && (
        <View>
          {/* <Text style={styles.label}>Username</Text>
          <TextInput
            mode="outlined"
            value={username}
            placeholder="Enter username"
            onChangeText={(text) => setUsername(text)}
            style={styles.input}
          /> */}
          <Text style={styles.label}>Mobile number</Text>
          <TextInput
          //  label=""
          mode="outlined"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          left={<TextInput.Affix text="+91" />}
          placeholder="10 digit mobile number"
          maxLength={10}
          keyboardType="numeric"
          style={{ backgroundColor: 'white' }}
          theme={{
            colors: {
              primary: '#FF5A5F',
              background: 'white'
            },
            fonts: {
              regular: {
                fontFamily: 'Mulish, sans-serif'
              }
            }
          }}
        />
          <View style={styles.infoContainer}>
            <MaterialIcons name="info-outline" size={20} color="gray" />
            <Text style={styles.infoText}>You will get OTP</Text>
            <Text style={styles.countText}>{phoneNumber.length}/10</Text>
          </View>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('OTPScreen',phoneNumber)}
            style={styles.submitButton}
            labelStyle={styles.submitButtonText}
          >
            Submit
          </Button>
        </View>
      )}

      {/* Email Tab */}
      {tab === "email" && (
        <View>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType="email-address"
          />

          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <View style={styles.passwordInfo}>
            <MaterialIcons name="info" size={16} color="#555" />
            <View style={styles.passwordTextContainer}>
              <Text style={styles.passwordInfoText}>
                Min 8 letters - must contain at least 1 special character (eg:
                !@#$)
              </Text>
            </View>
            <Text style={styles.counter}>{password.length}/8</Text>
          </View>

          <Text style={styles.label}>Confirm password</Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm your password"
            secureTextEntry={true}
          />

          {/* <View style={styles.rememberContainer}>
            <CheckBox
              value={checked}
              onValueChange={() => setChecked(!checked)}
              color="#FF5A5F"
            />
            <Text style={styles.checkboxText}>Remember</Text>
          </View> */}

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity style={styles.socialButtonGoogle}>
            <Image
              source={require("../../assets/googlelogo.png")}
              style={styles.socialButtonImage}
            />
            <Text style={styles.socialButtonText}>Sign In with Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.socialButtonFacebook}>
            <Image
              source={require("../../assets/facebooklogo.png")}
              style={styles.socialButtonImage}
            />
            <Text style={styles.socialButtonTextFacebook}>
              Sign In with Facebook
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
     backgroundImage: 'url("../../assets/red.jpg")'
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1E1E1E",
    marginBottom: 20,
    textAlign: "center",
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    padding: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
  },
  tabText: {
    fontSize: 16,
    color: "#000",
  },
  activeTab: {
    backgroundColor: "#FFF",
    borderColor: "#ddd",
    elevation: 2,
  },
  activeTabText: {
    color: "#1E1E1E",
    fontWeight: "bold",
  },
  label: {
    fontSize: 14,
    color: "#7A7A7A",
    marginBottom: 5,
  },
  input: {
    marginBottom: 15,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  infoText: {
    color: "#7A7A7A",
    marginLeft: 5,
  },
  countText: {
    marginLeft: "auto",
    color: "#7A7A7A",
  },
  submitButton: {
    backgroundColor: "#FF5A5F",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    justifyContent: "center",
  },
  submitButtonText: { fontSize: 16, color: "#fff", textAlign: "center" },
  passwordInfo: {
    flexDirection: "row", // Align items in a row
    alignItems: "center", // Align items vertically in the center
    justifyContent: "space-between", // Distribute space between children
    marginBottom: 10, // Add some spacing below
  },
  passwordTextContainer: {
    flex: 1, // Make this container take up the remaining space
    marginHorizontal: 10, // Add some margin between the icon and text
  },
  passwordInfoText: {
    fontSize: 12, // Text size
    color: "#555", // Text color
    flexWrap: "wrap", // Ensure text wraps to the next line if necessary
  },
  counter: {
    fontSize: 12, // Size of the counter text
    color: "#555", // Text color
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkboxText: { marginLeft: 8 },
  divider: { height: 1, backgroundColor: "#ccc", marginVertical: 16 },
  socialButtonGoogle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
  },
  socialButtonFacebook: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3b5998",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
  },
  socialButtonImage: { width: 24, height: 24, marginRight: 8 },
  socialButtonText: { fontSize: 16, color: "#555" },
  socialButtonTextFacebook: { fontSize: 16, color: "#fff" },
});
