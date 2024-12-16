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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';

const IncomeFab = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [account, setAccount] = useState('');
  const [note, setNote] = useState('');
  const [description, setDescription] = useState('');
  const [showNumpad, setShowNumpad] = useState(false);
  const [activeField, setActiveField] = useState(null);

  const appendNumber = num => {
    switch (activeField) {
      case 'amount':
        setAmount(prev => prev + num);
        break;
      case 'category':
        setCategory(prev => prev + num);
        break;
      case 'account':
        setAccount(prev => prev + num);
        break;
      case 'note':
        setNote(prev => prev + num);
        break;
      case 'description':
        setDescription(prev => prev + num);
        break;
    }
  };

  const deleteNumber = () => {
    switch (activeField) {
      case 'amount':
        setAmount(prev => prev.slice(0, -1));
        break;
      case 'category':
        setCategory(prev => prev.slice(0, -1));
        break;
      case 'account':
        setAccount(prev => prev.slice(0, -1));
        break;
      case 'note':
        setNote(prev => prev.slice(0, -1));
        break;
      case 'description':
        setDescription(prev => prev.slice(0, -1));
        break;
    }
  };

  const handleFieldPress = fieldName => {
    setShowNumpad(true);
    setActiveField(fieldName);
  };

  const handleDone = () => {
    setShowNumpad(false);
    setActiveField(null);
  };

  const renderNumpadButton = value => (
    <TouchableOpacity
      style={styles.numpadButton}
      onPress={() => appendNumber(value.toString())}>
      <Text style={styles.numpadText}>{value}</Text>
    </TouchableOpacity>
  );

  const renderField = (label, value, fieldName) => (
    <View style={styles.formRow}>
      <Text
        style={[styles.label, activeField === fieldName && styles.activeLabel]}>
        {label}
      </Text>
      <TouchableOpacity onPress={() => handleFieldPress(fieldName)}>
        <TextInput
          style={[
            styles.input,
            activeField === fieldName && styles.activeInput,
          ]}
          value={value}
          editable={false}
          pointerEvents="none"
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity>
            <MaterialIcons name="arrow-back" size={24} color="#ffd700" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Income</Text>
          <TouchableOpacity>
            <MaterialIcons name="bookmark" size={20} color="#ffd700" />
          </TouchableOpacity>
        </View>

        {/* Tab Navigation */}
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, , styles.activeTab]}>
            <Text style={[styles.tabText, , styles.activeTabText]}>Income</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Expense</Text>
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

          {renderField('Amount', amount, 'amount')}
          {renderField('Category', category, 'category')}
          {renderField('Account', account, 'account')}
          {renderField('Note', note, 'note')}

          <View style={styles.formRow}>
            <Text
              style={[
                styles.label,
                activeField === 'description' && styles.activeLabel,
              ]}>
              Description
            </Text>
            <View style={styles.descriptionContainer}>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => handleFieldPress('description')}>
                <TextInput
                  style={[
                    styles.input,
                    activeField === 'description' && styles.activeInput,
                  ]}
                  value={description}
                  editable={false}
                  pointerEvents="none"
                />
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
                <MaterialIcons name="backspace" size={24} color="#ffd700" />
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
                <MaterialIcons name="calculate" size={24} color="#ffd700" />
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
              <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
                <Text style={styles.doneButtonText}>Done</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default IncomeFab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#000',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#ffd700',
    fontFamily: 'Spicy Rice',
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 8,
    backgroundColor: '#333333',
  },
  tab: {
    flex: 1,
    padding: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#333333',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#ffd700',
  },
  tabText: {
    color: '#ffd700',
    fontFamily: 'Spicy Rice',
  },
  activeTabText: {
    color: '#ffd700',
  },
  formContainer: {
    padding: 16,
    backgroundColor: '#000',
    paddingTop: 0,
  },
  formRow: {
    marginBottom: 16,
  },
  label: {
    color: '#666',
    marginBottom: 8,
  },
  activeLabel: {
    color: '#ffd700',
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    padding: 8,
  },
  activeInput: {
    borderBottomColor: '#ffd700',
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
    padding: 8,
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  numpad: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#000',
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
    backgroundColor: '#333333',
    margin: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numpadText: {
    fontSize: 24,
    color: '#fff',
    fontFamily: 'Spicy Rice',
  },
  doneButton: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: '#ffd700',
    margin: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#000',
    fontSize: 16,
    fontFamily: 'Spicy Rice',
  },
});
