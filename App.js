import React, { useState } from 'react';

import {
  SafeAreaView,
  Text,
  TextInput,
  ScrollView,
  View,
  StatusBar
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';

export default function App() {

  const [primeiro, setPrimeiro] = useState(0);
  const [segundo, setSegundo] = useState(0);

  const x = parseFloat(primeiro ? primeiro : 0);
  const y = parseFloat(segundo ? segundo : 0);

  const soma = x + y;
  const divisao = Number(x / y).toFixed(2);
  const subtracao = parseInt(x - y);
  const multiplicacao = x * y;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps='handled'
        >
          <View style={styles.content}>
            <LinearGradient
              colors={['#4c669f', '#3b5998', '#192f6a']}
              style={{ alignSelf: 'stretch', flex: 1, alignItems: 'center' }}>
              <Text style={styles.title}>Calculadora</Text>
              <TextInput
                keyboardType="decimal-pad"
                placeholder="Informe o 1º valor"
                style={styles.textInput}
                value={primeiro}
                onChangeText={setPrimeiro} />
              <TextInput
                keyboardType="decimal-pad"
                placeholder="Informe o 2º valor"
                style={styles.textInput}
                value={segundo}
                onChangeText={setSegundo} />
              <Text style={styles.titleResultado}>Resultado</Text>
              <Text style={styles.textResultado}>{`Soma: ${soma}`}</Text>
              <Text style={styles.textResultado}>{`Divisão: ${divisao}`}</Text>
              <Text style={styles.textResultado}>{`Subtração: ${subtracao}`}</Text>
              <Text style={styles.textResultado}>{`Multiplicação: ${multiplicacao}`}</Text>
            </LinearGradient>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}
