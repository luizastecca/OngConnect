import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    console.log("--- BOTÃO ENTRAR CLICADO! ---");
    console.log("E-mail digitado:", email);
    console.log("Senha digitada:", senha);
    if (email.includes('@') && senha.length > 6) {
      console.log(`Acesso autorizado para: ${email}`);
    } else {
      console.log("Falha no login: Verifique os critérios de validação.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Image source={require('../assets/images/ONGConnect.png')} style={styles.logo} resizeMode="contain" />
      </View>
      <Text style={styles.title}>ONGConnect</Text>
      <Text style={styles.slogan}>Ponte para a solidariedade e a necessidade.</Text>

      {/* Atividade Formativa 2: */}
      <Text style={styles.title2}>LOGIN:</Text>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>E-mail:</Text>
        <TextInput style={styles.input} placeholder="Digite seu e-mail" value={email} onChangeText={setEmail} keyboardType='email-address' autoCapitalize='none' />
      </View>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Senha:</Text>
        <TextInput style={styles.input} placeholder="Digite sua senha" value={senha} onChangeText={setSenha} secureTextEntry={true} />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      {email.length > 0 && (
        <Text style={styles.helperText}>Logando como: {email}</Text>
      )}
      <Text style={styles.buttonText2}>Esqueci minha senha</Text>

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
    fontWeight: '600',
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
    fontWeight: '300',
    fontFamily: 'Opens Sans',
    color: '#222b54ff',
  },

  button: {
    backgroundColor: '#222b54ff',
    padding: 12,
    borderRadius: 20,
    marginTop: 10,
    fontSize: 17,
  },

  buttonText: {
    color: '#92dfe5ff',
    fontWeight: '700',
  },


  button2: {
    marginTop: 6,
  },

  buttonText2: {
    color: '#222b54ff',
    fontWeight: '700',
    textDecorationLine: 'underline',
    fontSize: 17,
  },

  title2: {
    fontSize: 25,
    fontWeight: '600',
    fontFamily: 'Montserrat',
    color: '#222b54ff',
    marginTop: 25,
  },

  inputGroup: {
    marginBottom: 10,
    width: '80%'
  },

  label: {
    textAlign: 'left',
    marginBottom: 5,
    color: '#222b54ff',
    width: '100%'
  },

  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: 'white',
    color: '#222b54ff',
  },

  helperText: {
    marginTop: 10,
    color: '#222b54ff',
    fontSize: 14,
    fontStyle: 'italic',
  },
});
