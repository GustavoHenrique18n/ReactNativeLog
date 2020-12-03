import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Text, View, Image, KeyboardAvoidingView,
  TextInput, TouchableOpacity, Animated, Modal, SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [open, setOpen] = useState(false);




  useEffect(() => {

    Animated.spring(offset.y, {
      toValue: 0,
      speed: 4,
      bounciness: 20
    }).start();
  }, []);

  function handleSubmit() {
    alert("this fuction is not avaliable");
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.containerLogo}>

        <Image
          source={require('./assets/logo.png')}
        />
        <StatusBar style="auto" />
      </View>
      <Animated.View
        style={[
          styles.containerInput,
          {

            transform: [
              { translateY: offset.y }
            ]
          }
        ]}
      >
        <TextInput
          placeholder="email"
          autoCorrect={false}
          onChangeText={() => { }}
          style={styles.loginInput}
        />

        <TextInput
          placeholder="senha"
          autoCorrect={false}
          onChangeText={() => { }}
          style={styles.loginInput}
        />

        <Modal transparent={false} visible={open}>
          <SafeAreaView style={styles.modal}>

            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setOpen(false)}>
                <Ionicons name="md-arrow-back" size={40} color="#FFF"
                  style={{ marginLeft: 5, marginRight: 5 }}
                />
              </TouchableOpacity>
              <View><Text style={styles.modaltitle}>sign up</Text></View>
            </View>
            <View style={styles.modalContainer}>
              <TextInput
                placeholder="nome"
                autoCorrect={false}
                onChangeText={() => { }}
                style={styles.registerInput}
              />

              <TextInput
                placeholder="email"
                autoCorrect={false}
                onChangeText={() => { }}
                style={styles.registerInput}
              />
              <TextInput
                placeholder="senha"
                autoCorrect={false}
                onChangeText={() => { }}
                style={styles.registerInput}
              />

              <TextInput
                placeholder="confirme a senha"
                autoCorrect={false}
                onChangeText={() => { }}
                style={styles.registerInput}
              />
              <TouchableOpacity style={styles.btnSubmitModal}>

                <Text style={styles.btnText}
                  onPress={handleSubmit}
                >Cadastrar</Text>

              </TouchableOpacity>
            </View>

          </SafeAreaView>
        </Modal>

        <TouchableOpacity style={styles.btnSubmit}>

          <Text style={styles.btnText}
            onPress={handleSubmit}
          >Acessar</Text>


        </TouchableOpacity>

        <TouchableOpacity style={styles.btnRegister}>

          <Text style={styles.registerText}
            onPress={() => setOpen(true)}
          >Abrir conta gratuita</Text>

        </TouchableOpacity>
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerLogo: {
    flex: 1,
    justifyContent: 'center',

  },
  containerInput: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'

  },
  registerInput: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10,
    height: 55

  },
  loginInput: {
    backgroundColor: '#fff',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 17,
    borderRadius: 7,
    padding: 10
  },
  btnSubmit: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
  },
  btnSubmitModal: {
    backgroundColor: '#35AAFF',
    width: '90%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 7,
    marginTop: 10
  },
  submitText: {
    color: '#FFF',
    fontSize: 18
  },
  btnRegister: {
    marginTop: 10,
  },
  registerText: {
    color: '#FFF'
  },
  modal: {
    flex: 1,
    backgroundColor: '#191919',
  },

  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',


  },
  modaltitle: {
    margin: 25,
    fontSize: 30,
    color: '#FFF',



  },
  modalContainer: {
    padding: 9,
    alignItems: 'center',
    height: 85,
    marginTop: 50,
    marginLeft: 10,
    marginRight: 10,
  }
});
