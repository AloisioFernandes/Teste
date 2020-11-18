import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'
import Feather from '@expo/vector-icons/Feather'

export default function App() {
  const [investimento, setInvestimento] = useState('')
  const [dataInvestimento, setDataInvestimento] = useState(new Date())
  const [showInv, setShowInv] = useState(false)
  const [dataVencimento, setDataVencimento] = useState(new Date())
  const [showVenc, setShowVenc] = useState(false)
  const [taxaSelic, setTaxaSelic] = useState('')
  const [taxaTesouroSelic, setTaxaTesouroSelic] = useState('')
  const [taxaB3, setTaxaB3] = useState('')
  const [taxaCorretora, setTaxaCorretora] = useState('')
  const [taxaDI, setTaxaDI] = useState('')
  const [remuneraçãoPoupança, setRemuneraçãoPoupança] = useState('')
  const [percentualCDB, setPercentualCDB] = useState('')
  const [percentualLCILCA, setPercentualLCILCA] = useState('')
  const [diasCorridos, setDiasCorridos] = useState(0)

  function mudarDataVencimento(event, date){
    // setShowVenc(Platform.OS === 'ios')
    setShowVenc(false)
    setDataVencimento(date)
  }

  function mudarDataInvestimento(event, date){
    // setShowVenc(Platform.OS === 'ios')
    setShowInv(false)
    setDataInvestimento(date)
  }

  useEffect(() => {
    const dias = (dataVencimento.getTime() - dataInvestimento.getTime())/(1000 * 3600 * 24) //Cálculo da diferença entre dias a partir dos milissegundos internos de cada data
    setDiasCorridos(dias)
  }, [dataInvestimento, dataVencimento])

  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Investimento" 
        onChangeText={text => setInvestimento(text)}
        keyboardType="numeric"
      />

      <View style={{flexDirection: 'row'}}>
        <Text>{dataInvestimento.getDate() <= 9 ? '0' + dataInvestimento.getDate() : dataInvestimento.getDate()}/</Text>
        <Text>{dataInvestimento.getMonth() + 1 <= 9 ? '0' + `${dataInvestimento.getMonth() + 1}` : dataInvestimento.getMonth() + 1}/</Text>
        <Text>{dataInvestimento.getFullYear()}</Text>
        <TouchableOpacity onPress={() => setShowInv(true)}>
          <Feather name="calendar" size={18}/>
        </TouchableOpacity>

        {showInv && 
          <DateTimePicker
            value={dataInvestimento}
            mode="date"
            display="calendar"
            onChange={(event, date) => mudarDataInvestimento(event, date)}
          />
        }
      </View>


      <View style={{flexDirection: 'row'}}>
        <Text>{dataVencimento.getDate() <= 9 ? '0' + dataVencimento.getDate() : dataVencimento.getDate()}/</Text>
        <Text>{dataVencimento.getMonth() + 1 <= 9 ? '0' + `${dataVencimento.getMonth() + 1}` : dataVencimento.getMonth() + 1}/</Text>
        <Text>{dataVencimento.getFullYear()}</Text>
        <TouchableOpacity onPress={() => setShowVenc(true)}>
          <Feather name="calendar" size={18}/>
        </TouchableOpacity>

        {showVenc && 
          <DateTimePicker
            value={dataVencimento}
            mode="date"
            display="calendar"
            onChange={(event, date) => mudarDataVencimento(event, date)}
          />
        }
      </View>


      <TextInput 
        style={styles.input} 
        placeholder="Taxa Selic ao ano" 
        onChangeText={text => setTaxaSelic(text)} 
        keyboardType="numeric"
      />

      <TextInput 
        style={styles.input} 
        placeholder="Taxa de Compra do Tesouro Selic" 
        onChangeText={text => setTaxaTesouroSelic(text)} 
        keyboardType="numeric"
      />

      <TextInput 
        style={styles.input} 
        placeholder="Taxa B3 (Título Público)" 
        onChangeText={text => setTaxaB3(text)} 
        keyboardType="numeric"
      />

      <TextInput 
        style={styles.input} 
        placeholder="Taxa da Corretora" 
        onChangeText={text => setTaxaCorretora(text)} 
        keyboardType="numeric"
      />

      <TextInput 
        style={styles.input} 
        placeholder="Taxa DI (CDI) ao ano" 
        onChangeText={text => setTaxaDI(text)} 
        keyboardType="numeric"
      />

      <TextInput 
        style={styles.input} 
        placeholder="Remuneração Mensal Poupança" 
        onChangeText={text => setRemuneraçãoPoupança(text)} 
        keyboardType="numeric"
      />

      <TextInput 
        style={styles.input} 
        placeholder="Percentual do CDI no CDB" 
        onChangeText={text => setPercentualCDB(text)} 
        keyboardType="numeric"
      />

      <TextInput 
        style={styles.input} 
        placeholder="Percentual do CDI no LCI/LCA" 
        onChangeText={text => setPercentualLCILCA(text)} 
        keyboardType="numeric"
      />

      <Text>Dias corridos: {diasCorridos}</Text>
      <Text>Dias úteis: </Text>
      <Text>Alíquota do Imposto de Renda: </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    backgroundColor: '#eee',
    marginBottom: 5,
    borderRadius: 5,
    padding: 2
  }
});
