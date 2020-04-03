import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4c669f'
    },
    content: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        margin: 15,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#FFF',
    },
    textInput: {
        margin: 5,
        width: '80%',
        height: 42,
        backgroundColor: '#FFF',
        padding: 15
    },
    titleResultado: {
        margin: 15,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    textResultado: {
        fontSize: 20,
        fontWeight: '100',
        color: '#FFF',
    }
});

export default styles;