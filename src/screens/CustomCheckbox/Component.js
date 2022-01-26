import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
  Linking,
} from 'react-native';
import styles from './Style';
import {Icons} from '../../camponents/Icons/Icons';

function CustomCheckbox(props) {
  const [checked, setChecked] = useState(false);
  const [select, setSelect] = useState(null);
  const [multipleChecked, setMultipleChecked] = useState(true);
  const [dataMultipleCheckbox, setDataMultipleCheckbox] = useState([
    {
      id: 1,
      name: 'Follower 1',
    },
    {
      id: 2,
      name: 'Follower 2',
    },
    {
      id: 3,
      name: 'Follower 3',
    },
    {
      id: 4,
      name: 'Follower 4',
    },
    {
      id: 5,
      name: 'Follower 5',
    },
  ]);

  const dataSingleCheckbox = [
    {id: 1, social: 'Instagram'},
    {id: 2, social: 'Facebook'},
    {id: 3, social: 'Whatsapp'},
  ];

  // UNSELECT SINGLE
  const handleCheckBox = item => {
    setSelect(item);
    if (select?.id === item?.id && checked === false) {
      return setChecked(true);
    }
    if (select?.id !== item?.id) {
      return setChecked(true);
    }
    if (select?.id === item?.id && checked === true) {
      setSelect(null);
      setChecked(false);
    }
    if (select?.id === null) {
      return setChecked(false);
    }
  };

  // UNSELECT MULTIPLE CHECKBOX
  const selectAction = e => {
    const newData = dataMultipleCheckbox.map(item => {
      if (item.id === e.id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return {
        ...item,
        selected: item.selected,
      };
    });
    setMultipleChecked(true);
    setDataMultipleCheckbox(newData);
  };

  // RESET BUTTON
  const resetButton = () => {
    let newData = dataMultipleCheckbox;
    for (let i = 0; i < newData.length; i++) {
      newData[i].selected = false;
    }
    setDataMultipleCheckbox(newData);
    setMultipleChecked(false);
    setSelect(null);
    setChecked(false);
  };

  return (
    <View style={{backgroundColor: props.route.params?.color, flex: 1}}>
      <StatusBar
        backgroundColor={props.route.params?.color}
        barStyle="light-content"
      />
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => props.navigation.goBack()}>
        <Icons.Ionicons
          name="md-arrow-back-circle-sharp"
          color={'white'}
          size={40}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.resetButton}
        onPress={() => resetButton()}>
        <Text style={styles.titleReset}>RESET</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollContainer}>
        {/* SINGLE SECTION */}
        <Text style={styles.title}>Single Checkbox & Unselect</Text>
        <View style={styles.box}>
          {dataSingleCheckbox?.map(item => (
            <TouchableOpacity
              key={item?.id}
              onPress={() => handleCheckBox(item)}
              style={styles.button}>
              <Icons.Ionicons
                name={
                  checked === true && select?.id === item?.id
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                color={
                  checked === true && select?.id === item?.id ? 'gold' : 'white'
                }
                size={20}
                style={{marginRight: 7}}
              />
              <Text
                style={[
                  styles.textBody,
                  {
                    color:
                      checked === true && select?.id === item?.id
                        ? 'gold'
                        : 'white',
                  },
                ]}>
                {item?.social}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* MULTIPLE SECTION */}
        <Text style={styles.title}>Multiple Checkbox & Unselect</Text>
        <View style={styles.box}>
          {dataMultipleCheckbox?.map((item, index) => {
            let flag = dataMultipleCheckbox[index]?.selected;
            if (multipleChecked === false) {
              flag = false;
            }

            return (
              <TouchableOpacity
                key={item?.id}
                onPress={() => selectAction(item)}
                style={styles.button}>
                <Icons.Ionicons
                  name={flag === true ? 'radio-button-on' : 'radio-button-off'}
                  color={flag === true ? 'gold' : 'white'}
                  size={20}
                  style={{marginRight: 7}}
                />
                <Text
                  style={[
                    styles.textBody,
                    {
                      color: flag === true ? 'gold' : 'white',
                    },
                  ]}>
                  {item?.name}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

export default CustomCheckbox;
