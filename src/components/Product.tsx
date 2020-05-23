// src/components/Product.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';

class Product extends React.Component {
    render() {
      return (
        <Card
            image={{uri: 'http://4.bp.blogspot.com/-28JWho2EmXI/UDd98XboSuI/AAAAAAAAESg/1QnuEXUp3oM/s1600/Yellow-Duck-4.jpg'}}>
            <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                Kid shoes
            </Text>
            <Text style={styles.price} h4>
                $ 200
            </Text>
            <Text h6 style={styles.description}>
                added 2h ago
            </Text>
            <Button
            type="clear"
            title='Buy now'
            onPress={() => this.props.navigation.navigate('Details')} />
        </Card>
      );
    }
}

const styles = StyleSheet.create({
    name: {
        color: '#5a647d',
        fontWeight: 'bold',
        fontSize: 30
    },
    price: {
        fontWeight: 'bold',
        marginBottom: 10
    },
    description: {
        fontSize: 10,
        color: '#c1c4cd'
    }
});

export default withNavigation(Product);
