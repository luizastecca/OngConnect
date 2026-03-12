import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    //<Scrollview>
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/images/ONGConnect.png')} style={styles.logo} resizeMode="contain" />
      </View>
      <Text style={styles.title}>ONGConnect</Text>
      <Text style={styles.slogan}>Ponte para a solidariedade e a necessidade.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => console.log('Conhecer Projetos pressionado!')}>
        <Text style={styles.buttonText}>CONHECER PROJETOS</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => console.log('Login pressionado!')}>
        <Text style={styles.buttonText2}>LOGIN</Text>
      </TouchableOpacity>
    </View>


    //</Scrollview>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#bbdfe2ff',
  },

  title: {
    fontSize: 50,
    fontWeight: 600,
    fontFamily: 'Montserrat',
    color: '#222b54ff',
  },

  logo: {
    borderRadius: 60,
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  slogan: {
    fontSize: 19,
    fontWeight: 300,
    fontFamily: 'Opens Sans',
    color: '#222b54ff',
  },

  button:{
    backgroundColor: '#222b54ff',
    padding: 12,
    borderRadius: 20,
    marginTop: 30,
    fontSize: 17, 
  },

  buttonText:{
    color: '#92dfe5ff',
    fontWeight: 700,
  },

  button2:{
    
  },

  buttonText2:{
     color: '#222b54ff',
     fontWeight: 700,
     textDecorationLine: 'underline',
     fontSize: 17, 
  },
});
