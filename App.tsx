import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, Image, TouchableOpacity, Alert, ScrollView, SafeAreaView} from 'react-native';

  const clickHandler = () =>{
    alert('Adicionado ao Carrinho!')
  }

export default function App() {
  return (
    <>
    
    <View>
      <Image
          source ={require("./assets/logo.png")}
          style={styles.logo}
        />
      </View>
    
    <ScrollView>
    <View style={styles.container}>
      
      <View style={styles.boxProdutos}>
        <Image 
          source ={require("./assets/bebidas/royalSalute.png")}
          style={styles.produtos}
        />
        
        <Text style={styles.text}>RoyalSalute</Text>
      </View>
        <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btAdicionar}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

      <View style={styles.boxProdutos}>
      <Image
      
          source ={require("./assets/bebidas/buchanansDeluxe.png")}
          style={styles.produtos}
        />
        <Text style={styles.text}>BuchanansDeluxe</Text>
      </View>
      <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btAdicionar}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

      <View style={styles.boxProdutos}>
      <Image
          source ={require("./assets/bebidas/oldParr.png")}
          style={styles.produtos}
        />
        <Text style={styles.text}>OldParr</Text>
      </View>
      <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btAdicionar}>
        <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

      <View style={styles.boxProdutos}>
      <Image
          source ={require("./assets/bebidas/redLabel.png")}
          style={styles.produtos}
        />
        <Text style={styles.text}>RedLabel</Text>
      </View>
      
      <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btAdicionar}>
       <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>

        <View style={styles.boxProdutos}>
      <Image
          source ={require("./assets/bebidas/cavaloBranco.png")}
          style={styles.produtos}
        />
        <Text style={styles.text}>CavaloBranco</Text>
      </View>
      
      <TouchableOpacity onPress={clickHandler}
        activeOpacity={0.7}
        style={styles.btAdicionar}>
       <Text style={styles.textButton}>Adicionar</Text>
        </TouchableOpacity>  

    </View>

      <View style={styles.boxFooter}>
      <Text>Fabio Nascimento</Text>
      </View>
    </ScrollView>
    
  </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    

  },
  produtos:{
    width: 200,
    height: 200
    
  },
  text:{
    textAlign: 'center',
    fontSize: 20,
    color: "#010101"
  },
  boxProdutos:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "#fff",
    width: 250,
    height: 250,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 35
  },
  btAdicionar:{
    width:150,
    height: 35,
    backgroundColor:"black",
    color: "black",
    textAlign:'center',
    justifyContent:"center",
    fontSize: 20,
    borderRadius:10,
  },
  textButton:{
    color: "#fff",
    textAlign:'center'
  },
  boxFooter:{
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
    height:50,
  },
  logo:{
    resizeMode:'cover',
    height:350,
  },
});
