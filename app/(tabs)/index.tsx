import { SelectList } from 'react-native-dropdown-select-list';
import React, { useState } from 'react';
import { Dimensions, Text, StyleSheet, View, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useFonts } from 'expo-font';

function HomeScreen() {
  const [fontsLoaded] = useFonts({
    FranklinGothic: require('@/assets/fonts/FranklinGothic.ttf'),
  });

  const [currentView, setCurrentView] = useState('header');
  const [selected, setSelected] = useState("");

  const data = [
    { key: '1', value: 'Пациент' },
    { key: '2', value: 'Доктор' }
  ];

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  const handleViewChange = (view) => {
    setCurrentView(view);
  };

  return (
    <View style={styles.body1}>
      {currentView === 'header' && (
        <View style={styles.header1}>
          <Image
            style={styles.getStartedImage}
            source={require('@/assets/images/doctor-get-started.png')}
          />
          <Text style={styles.title1}>Добре дошли в MediChat!</Text>
          <Text style={styles.paragraph1}>Новата специализирана чат мрежа между лекари и пациенти в България.</Text>
          <TouchableOpacity style={styles.getStartedButton} onPress={() => handleViewChange('login')}>
            <Text style={styles.buttonText}>Да започваме!</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentView === 'login' && (
        <View style={styles.logInButtons}>
          <Text style={styles.titleLogInButtons}>Вход към системата</Text>
          <Text style={styles.paragraphLogInButtons}>За целта трябва да изберете дали да влезете със съществуващ акаунт или да си създадете такъв.</Text>
          <TouchableOpacity style={styles.logInButton}>
            <Text style={styles.buttonText1}>Вход със съществуващ акаунт</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.registrationButton} onPress={() => handleViewChange('registration')}>
            <Text style={styles.buttonText2}>Регистрация</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentView === 'registration' && (
        <View style={styles.registrationMenu}>
          <Text style={styles.titleRegistrationMenu}>Регистрация</Text>
          <Text style={styles.paragraphLogInButtons}>Моля, изберете типа акаунт, който искате да създадете.</Text>
          <SelectList 
            placeholder="Изберете..." 
            searchPlaceholder="Търсене на опции..."  
            boxStyles={{width: wp(70), top: hp(15), maxWidth: 300}}
            dropdownStyles={{height: hp(12), top: hp(15)}}
            setSelected={(val) => setSelected(val)}
            data={data}
            save="value"
          />
          <TouchableOpacity style={styles.buttonAfterChooseRole}>
            <Text style={styles.buttonAfterChooseRoleText}>Напред</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  body1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1D3D47",
  },
  header1: {
    width: wp(100),
    height: hp(126),
    position: "absolute",
    left: 0,
    top: 100,
    backgroundColor: "#1D3D47",
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  getStartedImage: {
    height: hp(53.7),
    width: wp(100),
    maxWidth: 600,
    resizeMode: 'contain',
  },
  title1: {
    position: "absolute",
    top: hp(2),
    textAlign: "center",
    fontSize: hp(3.2),
  
    color: '#fff',
    fontWeight: "bold",
  },
  paragraph1: {
    position: "absolute",
    top: 65,
    textAlign: "center",
    fontSize: hp(2),

    color: '#fff',
    fontWeight: "bold",
  },
  getStartedButton: {
    position: "absolute",
    top: hp(22),
    borderWidth: 2,
    width: wp(45),
    maxWidth: 230,
    height: hp(5),
    borderRadius: 40,
  },
  buttonText: {
    top: hp(0.7),
    textAlign: "center",
    fontSize: hp(2),
  
    color: '#fff',
    fontWeight: "bold",
  },
  logInButtons:{
  backgroundColor:"white",
  width: wp(100),
  maxWidth: 600,
  height: hp(70),
  maxHeight: 1000,
  top: hp(19),
  borderTopLeftRadius: 80,
  borderTopRightRadius: 80,
  textAlign: "center",
 
  alignItems: 'center',
  },
  titleLogInButtons:{
    textAlign: "center",
   
    top: hp(-15),
    fontSize: hp(3.2),

    color: '#fff',
    fontWeight: "bold",
  },
  paragraphLogInButtons:{
    textAlign: "center",
   
    top: hp(6),
    fontSize: hp(1.8),
    margin: 2,

    color: 'black',
    fontWeight: "bold",
  },
  logInButton:{
   
    position: "absolute",
    top: hp(30),  // Може да промените тази стойност според нуждите ви
   
    borderWidth: 2,
    borderColor: "black",
    width: wp(56),
    maxWidth: 230,
    height: hp(5),
    borderRadius: 40,
  },
  buttonText1:{
    color: "black",
    textAlign:"center",
    fontSize: hp(1.6),
    top: hp(1),
  },
  registrationButton:{
    position: "absolute",
    top: hp(40),  // Може да промените тази стойност според нуждите ви
   
    borderWidth: 2,
    borderColor: "black",
    width: wp(56),
    maxWidth: 230,
    height: hp(5),
    borderRadius: 40,
  },
  buttonText2:{
    color: "black",
    textAlign:"center",
    fontSize: hp(1.6),
    top: hp(1),
  },
  registrationMenu:{
    backgroundColor:"white",
    width: wp(100),
    maxWidth: 600,
    height: hp(70),
    maxHeight: 1000,
    top: hp(19),
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    textAlign: "center",
   
    alignItems: 'center',
  },
  titleRegistrationMenu:{
    textAlign: "center",
   
    top: hp(-15),
    fontSize: hp(3.2),

    color: '#fff',
    fontWeight: "bold",
  },
  buttonAfterChooseRole:{
    position: "absolute",
    top: hp(50),  // Може да промените тази стойност според нуждите ви
   
    borderWidth: 2,
    borderColor: "black",
    width: wp(56),
    maxWidth: 230,
    height: hp(5),
    borderRadius: 40,
  },
  buttonAfterChooseRoleText:{
    color: "black",
    textAlign:"center",
    fontSize: hp(1.6),
    top: hp(1),

  }
});

export default HomeScreen;