/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <TextInput
            style={styles.textInput}
            placeholder={'Email'}
            textContentType={'emailAddress'}
            keyboardType={'email-address'}
            autoCompleteType={'email'}
            testID={'signup-email'}
          />
          <TextInput
            style={styles.textInput}
            placeholder={'Password'}
            secureTextEntry={true}
            textContentType={'newPassword'}
            autoCompleteType={'password'}
            testID={'signup-password'}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  textInput: {
    margin: 8,
    height: 40,
    borderRadius: 5,
  },
});

export default App;
