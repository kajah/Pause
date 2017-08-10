/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    TouchableHighlight
} from 'react-native';

export default class Pause extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentContainer}>
                    <TouchableHighlight style={styles.buttonContainer}>
                        <View style={styles.pause} title="Pause" />
                    </TouchableHighlight>
                </View>
                <View style={styles.box} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    contentContainer: {
        flex: 1,
    },
    buttonContainer: {
        marginTop: 200,
    },
    pause: {
        backgroundColor: "#F57C00",
        width: 200,
        height: 200,
        borderRadius: 200/2,
    },
    box: {
        height: 100,
        alignSelf: 'stretch',
        backgroundColor: "#CE93D8",
        marginTop: 200,
    }
});

AppRegistry.registerComponent('Pause', () => Pause);
