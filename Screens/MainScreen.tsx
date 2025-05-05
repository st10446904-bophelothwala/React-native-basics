import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import mainStyles from "../Styles/Main";


function MainScreen({ navigation }) {
    return (
        <View>
            <View>
                <Text style={mainStyles.title}>Welcome to the Calculator App</Text>
            </View>

            <View>
                <Text>{'\n'}</Text>
            </View>

            <View>
                <Text>{'\n'}</Text>
            </View>

            <View>
               <TouchableOpacity  style={mainStyles.addButton} onPress={() => navigation.navigate('Add')}>
                    <Text style={mainStyles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>{'\n'}</Text>
            </View>

            <View>
                <TouchableOpacity  style={mainStyles.subtractButton} onPress={() => navigation.navigate('Calculator')}>
                    <Text style={mainStyles.subtractButtonText}>Subtract</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>{'\n'}</Text>
            </View>

            <View>
                <TouchableOpacity  style={mainStyles.multiplyButton} onPress={() => navigation.navigate('Calculator')}>
                    <Text style={mainStyles.multiplyButtonText}>Multiply</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text>{'\n'}</Text>
            </View>

            <View>
                <TouchableOpacity  style={mainStyles.divideButton} onPress={() => navigation.navigate('Calculator')}>
                    <Text style={mainStyles.divideButtonText}>Divide</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MainScreen;