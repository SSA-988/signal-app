import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import InstaStory from 'react-native-insta-story';

const ProfileScreen = () => {
  const channels = [
    {
      id: '0',
      name: 'Netflix',
      image: 'https://cdn-icons-png.flaticon.com/128/2504/2504929.png',
      text: 'Your in the right place',
      date: '2:45 AM',
    },
    {
      id: '2',
      name: 'Marc Zuckerberg',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHtsQvDUZ3Q90XuFjYvcZ-KVaDhUJcA39u-g&s',
      text: 'Anyone else watching this weekend?',
      date: '2:45 AM',
    },
    {
      id: '0',
      name: 'Indian Cricket Team',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAtic4zkoYA0BmKDTREcuxL0VWVMlP3UqBUg&s',
      text: 'Any guesses who won the Fielding medal for the series',
      date: '1:45 PM',
    },
    {
      id: '3',
      name: 'Cravings',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPcBoRdfwpZXICr6FFLcUDT4c22xCzTVwQj6e9lwQHTo-KZw12rZD_z4u-_595SK_EpU8&usqp=CAU',
      text: 'Fruit Platters are the best',
      date: '2:45 AM',
    },
    {
      id: '5',
      name: 'Royal Challengers Bangalore',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDlVuzjh0-kKm1BbO5qBjeIwelK8r4DvYZ5A&s',
      text: 'We only want it to rain boundaries and wickets for RCB',
      date: '2:45 AM',
    },
  ];
  const data = [
    {
      user_id: 1,
      user_image:
        'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
      user_name: 'Ahmet Çağlar Durmuş',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg',
        },
      ],
    },
    {
      user_id: 2,
      user_image:
        'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
      user_name: 'Test User',
      stories: [
        {
          story_id: 1,
          story_image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 1 swiped'),
        },
        {
          story_id: 2,
          story_image:
            'https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg',
          swipeText: 'Custom swipe text for this story',
          onPress: () => console.log('story 2 swiped'),
        },
      ],
    },
  ];
  return (
    <SafeAreaView>
      <View style={{padding: 10}}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Updates</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 10,
          }}>
          <View style={{marginTop: 10}}>
            <Pressable>
              <Image
                style={{width: 58, height: 58, borderRadius: 29}}
                source={{
                  uri: 'https://lh3.googleusercontent.com/ogw/AF2bZyi09EC0vkA0pKVqrtBq0Y-SLxZc0ynGmNrVKjvV66i3Yg=s64-c-mo',
                }}
              />
              <Text style={{textAlign: 'center', marginTop: 5}}>sujan</Text>
            </Pressable>
          </View>
          <InstaStory data={data} duration={10} />
        </View>
      </View>

      <View style={{padding: 10}}>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>Channels</Text>
        {channels?.map((item, index) => (
          <View
            style={{
              marginVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
              gap: 12,
            }}>
            <View>
              <Image
                style={{width: 50, height: 50, borderRadius: 25}}
                source={{uri: item?.image}}
              />
            </View>

            <View style={{flex: 1}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>
                {item?.name}
              </Text>
              <Text style={{marginTop: 4, color: 'gray'}}>{item?.text}</Text>
            </View>

            <Text>{item?.date}</Text>
          </View>
        ))}

        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
          }}>
          <Image
            style={{width: 120, height: 120}}
            source={{
              uri: 'https://signal.org/assets/images/features/Stickers.png',
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
