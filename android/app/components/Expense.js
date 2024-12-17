// this is the old expense.js
// not in use just to have the overview

import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

const Expense = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [account, setAccount] = useState('');
  const [note, setNote] = useState('');
  const [description, setDescription] = useState('');
  const [showNumpad, setShowNumpad] = useState(true);

  const appendNumber = num => {
    setAmount(prev => prev + num);
  };

  const deleteNumber = () => {
    setAmount(prev => prev.slice(0, -1));
  };

  const renderNumpadButton = value => (
    <TouchableOpacity
      style={styles.numpadButton}
      onPress={() => appendNumber(value.toString())}>
      <Text style={styles.numpadText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialIcons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Expense</Text>
          <TouchableOpacity>
            <MaterialIcons name="bookmark" size={20} color="#ff0000" />
          </TouchableOpacity>
        </View>

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Income</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Expense</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Transfer</Text>
          </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.formContainer}>
          <View style={styles.formRow}>
            <Text style={styles.label}>Date</Text>
            <View style={styles.dateContainer}>
              <Text>13/12/2024 (Fri)</Text>
              <Text>11:56 am</Text>
              <FeatherIcons name="repeat" size={24} color="gray" />
            </View>
          </View>

          <View style={styles.formRow}>
            <Text style={styles.label}>Amount</Text>
            <TextInput style={styles.input} value={amount} editable={false} />
          </View>

          <View style={styles.formRow}>
            <Text style={styles.label}>Category</Text>
            <TextInput
              style={styles.input}
              value={category}
              onChangeText={setCategory}
            />
          </View>

          <View style={styles.formRow}>
            <Text style={styles.label}>Account</Text>
            <TextInput
              style={styles.input}
              value={account}
              onChangeText={setAccount}
            />
          </View>

          <View style={styles.formRow}>
            <Text style={styles.label}>Note</Text>
            <TextInput
              style={styles.input}
              value={note}
              onChangeText={setNote}
            />
          </View>

          <View style={styles.formRow}>
            <Text style={styles.label}>Description</Text>
            <View style={styles.descriptionContainer}>
              <TextInput
                style={styles.input}
                value={description}
                onChangeText={setDescription}
              />
              <TouchableOpacity>
                <MaterialIcons name="camera-alt" size={24} color="gray" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Numpad */}
        {showNumpad && (
          <View style={styles.numpad}>
            <View style={styles.numpadRow}>
              {renderNumpadButton(1)}
              {renderNumpadButton(2)}
              {renderNumpadButton(3)}
              <TouchableOpacity
                style={styles.numpadButton}
                onPress={deleteNumber}>
                <MaterialIcons name="backspace" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.numpadRow}>
              {renderNumpadButton(4)}
              {renderNumpadButton(5)}
              {renderNumpadButton(6)}
              <TouchableOpacity style={styles.numpadButton}>
                <Text style={styles.numpadText}>-</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.numpadRow}>
              {renderNumpadButton(7)}
              {renderNumpadButton(8)}
              {renderNumpadButton(9)}
              <TouchableOpacity style={styles.numpadButton}>
                <MaterialIcons name="calculate" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <View style={styles.numpadRow}>
              <View style={styles.numpadButton} />
              {renderNumpadButton(0)}
              <TouchableOpacity
                style={styles.numpadButton}
                onPress={() => appendNumber('.')}>
                <Text style={styles.numpadText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.doneButton}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#f5f5f5',
  },
  tab: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff6b6b',
  },
  tabText: {
    color: '#666',
  },
  activeTabText: {
    color: '#ff6b6b',
  },
  formContainer: {
    padding: 16,
  },
  formRow: {
    marginBottom: 16,
  },
  label: {
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 8,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  numpad: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#f5f5f5',
    padding: 8,
  },
  numpadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  numpadButton: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#fff',
    margin: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numpadText: {
    fontSize: 24,
  },
  doneButton: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#ff6b6b',
    margin: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Expense;
