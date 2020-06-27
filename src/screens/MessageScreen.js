import React, {useState} from 'react';
import {FlatList} from 'react-native';

import ListItem from '../components/ListItem';
import AppSafeArea from '../components/AppSafeArea';
import Separator from '../components/Separator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const MessageScreen = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: 'T1',
      description: 'D1',
      image: require('../assets/mosh.jpg'),
    },
    {
      id: 2,
      title: 'T2',
      description: 'D2',
      image: require('../assets/mosh.jpg'),
    },
  ]);
  const [refreshing, setRefreshing] = useState(false);

  const deleteMessage = (message) => {
    setMessages(messages.filter((m) => message.id !== m.id));
  };

  return (
    <AppSafeArea>
      <FlatList
        data={messages}
        keyExtractor={(m) => m.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message Seleted: ', item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => deleteMessage(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <Separator />}
        refreshing={refreshing}
        onRefresh={() => {
          setRefreshing(true);
          setTimeout(() => {
            setMessages([
              ...messages,
              {
                id: 3,
                title: 'T3',
                description: 'D3',
                image: require('../assets/mosh.jpg'),
              },
            ]);
            setRefreshing(false);
          }, 2000);
        }}
      />
    </AppSafeArea>
  );
};

export default MessageScreen;
