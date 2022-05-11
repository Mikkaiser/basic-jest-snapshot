import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';

export default ({ initialName }) => {
    const [name, setName] = useState('Random Name');

    const modifyName = () => {
        setName('Mikkaiser Modified');
    }

    return (
        <View>
            <Text>{initialName} - This is the name</Text>
            <Text>Mikkaiser está aqui</Text>
            <Button
                title={name}
                onPress={modifyName}
            />
        </View>
    );
}