import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  StatusBar,
} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import styles from './Style';

function CustomCheckbox(props) {
  const [checked, setChecked] = useState(false);
  const [select, setSelect] = useState(null);
  const [data, setData] = useState([
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

  const dataCheckbox1 = [
    {id: 1, social: 'Instagram'},
    {id: 2, social: 'Facebook'},
    {id: 3, social: 'Whatsapp'},
  ];

  // unselet checkbox
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

  const selectAction = e => {
    const newData = data.map(item => {
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
    setData(newData);
  };

  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <StatusBar
        backgroundColor={props.route.params?.color}
        barStyle="light-content"
      />
      <TouchableOpacity>
        <Text style={styles.title}>RESET</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollContainer}>
        <Text style={styles.title}>Single Checkbox & Unselect</Text>
        <View style={styles.box}>
          {dataCheckbox1?.map(item => (
            <TouchableOpacity
              key={item?.id}
              onPress={() => handleCheckBox(item)}
              style={styles.button}>
              <IonIcon
                name={
                  checked === true && select?.id === item?.id
                    ? 'radio-button-on'
                    : 'radio-button-off'
                }
                color={
                  checked === true && select?.id === item?.id
                    ? props.route.params?.color
                    : 'gray'
                }
                size={20}
                style={{marginRight: 7}}
              />
              <Text style={styles.textBody}>{item?.social}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.title}>Multiple Checkbox & Unselect</Text>
        <View style={styles.box}>
          {data?.map((item, index) => (
            <TouchableOpacity
              key={item?.id}
              onPress={() => selectAction(item)}
              style={styles.button}>
              <IonIcon
                name={
                  data[index]?.selected ? 'radio-button-on' : 'radio-button-off'
                }
                color={
                  data[index]?.selected ? props.route.params?.color : 'gray'
                }
                size={20}
                style={{marginRight: 7}}
              />
              <Text style={styles.textBody}>{item?.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default CustomCheckbox;
