// Nome: Nathália Pinto Fortunato & Jorbe Junior
// Matricula: 0050016724 & 0050016533

import React, { useState, useEffect } from 'react';
import { ScrollView, TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { Keyboard } from 'react-native'; 

export default function App() {
  const [tela, setTela] = useState(0);
  const [data,setData] = useState([{}]);
  const [texto, setTexto] = useState("");
  const [numero, setNumero] = useState("");
  const [id, setId] = useState("");

  /*
  useEffect( () => {
    fetch("http://localhost:5000/contatos").then(
        response => response.json()
      ).then(
        data1 => {
          setData(data1);
          console.log(data1);
        })
  }, [])
  */

  /* TELA: ADICIONAR CONTATO */
  return tela == 1 ? (
    <View style={styles.container}>
      <Text style = {styles.Titulo} > Adicionar Novo Contato </Text>
      <Text style = {styles.Item}>Nome </Text>
      <TextInput style = {styles.CaixaTexto} maxLength = '35' placeholder = 'Ex.: Jorbe' onChangeText = {setTexto} value = {texto} />

      <Text style = {styles.Item}>Telefone </Text>
      <TextInput style = {styles.CaixaTexto} keyboardType = 'phone-pad' maxLength = '9' placeholder = 'Ex.: 900000001' onChangeText = {setNumero} value = {numero}/>

      <TouchableOpacity style = {styles.BotaoAdicionar} onPress = {() => {setTela(0); console.log("Salvou o contato " + texto + " com o numero " + numero)}} > 
          <Text style = {styles.BotaoAdicionarTexto}>Salvar novo contato</Text> 
      </TouchableOpacity>

      <TouchableOpacity style = {styles.BotaoVermelho} onPress = {() => {setTela(0)}} > 
          <Text style = {styles.BotaoVermelhoTexto}>Cancelar</Text> 
      </TouchableOpacity>

      <Text style = {{marginTop: 50}} >AV1 Desenvolvimento Mobile - Nathália & Jorbe</Text>
    </View>
  ) 
  :
  /* TELA: BUSCAR & SELECIONAR CONTATO */
  tela == 2 ? (
    <View style={styles.container}>
      <Text style = {styles.Titulo} >Resultado da busca </Text>

      <Text style = {styles.ListaContatos} >ID: 1 {"\n"}
        Nome: Jorbe {"\n"}
        Telefone: 219812279536 </Text>

      <TouchableOpacity style = {styles.BotaoAdicionar} onPress = {() => {setTela(0)}} > 
          <Text style = {styles.BotaoAdicionarTexto}>Voltar</Text> 
      </TouchableOpacity>

      <TouchableOpacity style = {styles.BotaoVermelho} onPress = {() => {setTela(0); console.log("CONTATO DELETADO DE ID: " + id )}} > 
          <Text style = {styles.BotaoVermelhoTexto}>Deletar Contato</Text> 
      </TouchableOpacity>

      <Text style = {{marginTop: 50}} >AV1 Desenvolvimento Mobile - Nathália & Jorbe</Text>
    </View>
  )
  :
  /* TELA PRINCIPAL: LISTAR TODOS OS CONTATOS */
  (
    <View style={styles.container}>
      <Text style = {styles.Titulo} > Agenda de Contatos </Text>

      <Text style = {styles.Item}>ID do contato </Text>
      <TextInput style = {styles.CaixaTexto} keyboardType = 'number-pad' placeholder = 'Ex.: 5' onChangeText = {setId} value = {id}/>
      
      <TouchableOpacity style = {styles.BotaoAdicionar} onPress = {() => {setTela(2); Keyboard.dismiss()}} > 
          <Text style = {styles.BotaoAdicionarTexto}>Buscar um contato</Text> 
      </TouchableOpacity>


      <TouchableOpacity style = {styles.BotaoAdicionar} onPress = {() => {setTela(1)}} > 
          <Text style = {styles.BotaoAdicionarTexto}>Adicionar novo contato</Text> 
      </TouchableOpacity>


      <ScrollView style = {{ flexGrow: 0.2 }}>
      { /*
       {(typeof data.contatos === 'undefined') ?
      (
        <p>Carregando.....</p>
      ): (
        data.contatos.map((contato, i) =>(
          <p key={i}>{contato}</p>
        ))
      )
      }
    */}

      <Text style = {styles.Titulo} > Lista </Text>

      <Text style = {styles.ListaContatos} >1. Jorbe {"\n"}
        2. Nathalia {"\n"}
        3. Alex </Text>
      </ScrollView>


      <Text style = {{marginTop: 50}} >AV1 Desenvolvimento Mobile - Nathália & Jorbe</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D6F4FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo: {
    fontSize: 30,
    fontWeight: '700',
    margin: 5,
    color: '#00A5E0',
  },
  ListaContatos: {
    fontSize: 20,
    fontWeight: '400',
    margin: 10,
    color: '#32CBFF',
  },
  BotaoAdicionar: {
    backgroundColor:"#FECEF1",
    padding: 5,
    marginBottom: 10,
    width: 250,
    borderRadius: 5,
  },
  BotaoAdicionarTexto: {
    fontSize: 20,
    color: '#EF9CDA',
    textAlign: 'center',
    fontWeight: '500',
  },
  BotaoVermelho: {
    backgroundColor:"#B62902",
    padding: 5,
    marginBottom: 10,
    width: 250,
    borderRadius: 5,
  },
  BotaoVermelhoTexto: {
    fontSize: 20,
    color: '#140500',
    textAlign: 'center',
    fontWeight: '500',
  },
  Item: {
    fontSize: 20,
    fontWeight: '400',
    margin: 2,
    color: '#32CBFF',
  },
  CaixaTexto: {
    backgroundColor: '#fff',
    padding: 4,
    marginBottom: 20,
    width: 250,
  },
});
