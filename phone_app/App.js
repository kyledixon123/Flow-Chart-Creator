const React = require('react');
const { View, Text, TextInput, Button, StyleSheet } = require('react-native');

function App() {
  const [number, setNumber] = React.useState('');
  const handlePress = () => {
    console.log(`Pretend calling: ${number}`);
  };
  return (
    React.createElement(View, { style: styles.container },
      React.createElement(Text, { style: styles.header }, 'Basic Phone App'),
      React.createElement(TextInput, {
        style: styles.input,
        placeholder: 'Enter phone number',
        value: number,
        onChangeText: setNumber,
        keyboardType: 'phone-pad'
      }),
      React.createElement(Button, { title: 'Call', onPress: handlePress })
    )
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  header: { fontSize: 24, marginBottom: 12, textAlign: 'center' },
  input: { height: 40, borderColor: '#ccc', borderWidth: 1, marginBottom: 12, paddingHorizontal: 8 }
});

module.exports = App;

if (require.main === module) {
  console.log('Running in a Node environment. React Native runtime required on device.');
}
