import ExpoImageThemeColors from 'expo-image-theme-colors';
import { Button, ScrollView, Text, View } from 'react-native';
import { useImage } from 'expo-image';
import { useEffect } from 'react';

export default function App() {
  const imageRef = useImage('https://i2.hdslb.com/bfs/archive/aa7b946340dc5834309b4f529a5d3b52c69cfac8.jpg');

  useEffect(() => {
    console.log('--- sanity check start ---');
console.log('ExpoImageThemeColors (default export) =', ExpoImageThemeColors);
console.log('NativeModules.ExpoImageThemeColors =', ExpoImageThemeColors);
console.log('typeof extractThemeColorAsync =', ExpoImageThemeColors ? typeof ExpoImageThemeColors.extractThemeColorAsync : 'module missing');
console.log('--- sanity check end ---');
  }, []);

  return (
      <ScrollView style={styles.container}>
        <Text style={styles.header}>Module API Example</Text>
        <Group name="Async functions">
          <Button
            title="Get dominant color from url"
            onPress={async () => {
		    console.log('wtf')
              const res = await ExpoImageThemeColors.extractThemeColorAsync('https://i2.hdslb.com/bfs/archive/aa7b946340dc5834309b4f529a5d3b52c69cfac8.jpg');
              console.log('hey')
	      console.log(res);
            }}
          />
          <Button
            title="Get dominant color from image ref"
            onPress={async () => {
              if (!imageRef) {
                console.log('N');
                return;
              }
              const res = await ExpoImageThemeColors.extractThemeColorAsync(imageRef);
              console.log(res);
            }}
          />
        </Group>
      </ScrollView>
  );
}

function Group(props: { name: string; children: React.ReactNode }) {
  return (
    <View style={styles.group}>
      <Text style={styles.groupHeader}>{props.name}</Text>
      {props.children}
    </View>
  );
}

const styles = {
  header: {
    fontSize: 30,
    margin: 20,
  },
  groupHeader: {
    fontSize: 20,
    marginBottom: 20,
  },
  group: {
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  view: {
    flex: 1,
    height: 200,
  },
};
