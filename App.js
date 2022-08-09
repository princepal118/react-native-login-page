import React from 'react';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {Schema} from './components/forms/loginSchema';

import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const App = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const handleData = data => console.log('data', data);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.wrapper}>
          <Text>Email</Text>
          <Controller
            name="email"
            control={control}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                placeholder="Enter Email"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Text style={styles.errorColor}>
            {errors?.email && errors?.email?.message}
          </Text>
        </View>
        <View style={styles.wrapper}>
          <Text>Password</Text>
          <Controller
            name="password"
            control={control}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={styles.input}
                placeholder="Enter Email"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          <Text style={styles.errorColor}>
            {errors?.password && errors?.password?.message}
          </Text>
        </View>
        <View style={styles.button}>
          <Button title="Login" onPress={handleSubmit(handleData)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 7,
    marginTop: 10,
  },
  button: {
    marginTop: 10,
  },
  errorColor: {
    color: 'red',
  },
});

export default App;
