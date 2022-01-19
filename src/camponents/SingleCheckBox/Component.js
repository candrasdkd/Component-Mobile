import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

function SingleCheckBox(data, action) {
  const [checked, setChecked] = useState(false);
  const [select, setSelect] = useState(null);
  //   console.log(data.data, 'aaaaaa');

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

  return (
    <>
      <TouchableOpacity
        key={data?.data?.id}
        onPress={() => [setSelect(data.data), handleCheckBox(data.data)]}
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-start',
          marginVertical: 3,
        }}>
        <IonIcon
          name={
            checked === true && select?.id === data?.data?.id
              ? 'radio-button-on'
              : 'radio-button-off'
          }
          color={
            checked === true && select?.id === data?.data?.id ? 'blue' : null
          }
          size={20}
          style={{marginRight: 7}}
        />
        <Text numberOfLines={1} style={{color: '#000', width: 280}}>
          {data?.data?.social}
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default SingleCheckBox;
