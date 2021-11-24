
import React from 'react';
import { styles } from './style.js'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Touchable,
  TouchableOpacity
} from 'react-native';


export default App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.ust}></View>
      <Image source={require("../assets/logo.png")} style={styles.logo}></Image>
      <View style={styles.goQuestion}>
        <View style={styles.goQuestionMain}>
          <View style={styles.goQuestionMainHeader}>
            <Text style={styles.mainHeader}>Welcome to Yaramaz Çocuk Evine</Text>
            <Text style={styles.mainContent}>Neque porro quisquam est qui dolorem ipsum quia</Text>
          </View>
          <View style={styles.goQuestionMainContent}>
            <TouchableOpacity style={styles.ınButton}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.upButton}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.goQuestionMainFooter}>
            <Text style={styles.mainContent}>or Connection</Text>
            <View style={{flexDirection:"row",}}>
              <Image source={require("../assets/facebook.png")} style={styles.iconSizeF}></Image>
              <Image source={require("../assets/twitter.png")} style={styles.iconSizeT}></Image>
              <Image source={require("../assets/gmail.png")} style={styles.iconSizeG}></Image>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

