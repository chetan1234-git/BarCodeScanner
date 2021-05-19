import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class BookTransactionScreen extends React.Component {
    constructor(){
      super();
      this.state = {
        hasCameraPermissions: null,
        scanned: false,
        scannedData: '',
         buttonState: 'normal'
      }
    }
    getCameraPermissions = async (id) =>{
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        
        this.setState({
          /*status === "granted" is true when user has granted permission
            status === "granted" is false when user has not granted the permission
          */
          hasCameraPermissions: status === "granted",
          buttonState: id,
          scanned: false
        });    }
        handleBarCodeScanned = async({type, data})=>{
            const {buttonState} = this.state
      
            if(buttonState==="clicked"){
              this.setState({
                scanned: true,
                scannedBookId: data,
                buttonState: 'normal'
              });
            }
            else if(buttonState==="clicked"){
              this.setState({
                scanned: true,
                scannedStudentId: data,
                buttonState: 'normal'
              });
            }
            
          }
        }      
        <View>
        <TouchableOpacity
        style={styles.scanButton}
        onPress={() => {
          this.getCameraPermissions;
        }}>
            title="Bar Code Scanner";
        <Text style={styles.buttonText}>Scan</Text>
      </TouchableOpacity>
      </View>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    displayText: {
      fontSize: 15,
      textDecorationLine: 'underline',
    },
    scanButton: {
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 10,
    },
    buttonText: {
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10,
    },
    inputView: {
      flexDirection: 'row',
      margin: 20,
    },
    inputBox: {
      width: 200,
      height: 40,
      borderWidth: 1.5,
      borderRightWidth: 0,
      fontSize: 20,
    },
    scanButton: {
      backgroundColor: '#66BB6A',
      width: 50,
      borderWidth: 1.5,
      borderLeftWidth: 0,
    },
  });
  