import React from 'react'
import {StyleSheet, Dimensions, View, AppRegistry, Button} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Image from 'react-native-scalable-image';



export default class MainScreen extends React.Component {
    static navigationOptions = {
      title: 'Home'
      };
    render () {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.backgroundImage}>
            <Image source={{uri: 'https://i.pinimg.com/originals/29/9a/6e/299a6ecaf0a8090fd11ee77af510394f.jpg'}} style={styles.container} />
                <Row></Row>
                <Row>
                <Image width={Dimensions.get('window').width/1.5} maxHeight={300} source={{uri: 'https://vignette3.wikia.nocookie.net/theamazingworldofgumball/images/d/dd/Logo_Dota_2.png/revision/latest?cb=20130329094246'}} />
                </Row>
                <Button 
                title="Dota 2 Hero List"
                onPress={ () => navigate('Manga')}
                />
                <Row></Row>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    backgroundImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        width: null,
        height: null,
    },
  });
