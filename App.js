// IMPORTS
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import LocationIcon from "react-native-vector-icons/Entypo";

const App = () => {
  const region = {
    latitude: 31.9412285,
    longitude: 35.8473543,
    latitudeDelta: 0.005,
    longitudeDelta: 0.005,
  };
  const locations = [
    {
      latitude: 31.9412285,
      longitude: 35.8473543,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      title: "Mad Hook",
    },
    {
      latitude: 31.9411475,
      longitude: 35.8480406,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      title: "Mercedes",
    },
    {
      latitude: 31.9404343,
      longitude: 35.848689,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      title: "Total Gas-Station",
    },
    {
      latitude: 31.9398867,
      longitude: 35.848599,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
      title: "Donuts Factory",
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: region?.latitude,
          longitude: region?.longitude,
          latitudeDelta: region?.latitudeDelta,
          longitudeDelta: region?.longitudeDelta,
        }}
        maxZoomLevel={30}
        minZoomLevel={16}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
      >
        {locations?.map((location) => {
          return (
            <Marker
              coordinate={{
                latitude: location?.latitude,
                longitude: location?.longitude,
              }}
              title={location?.title}
            >
              <LocationIcon name="location-pin" size={40} color={"red"} />
            </Marker>
          );
        })}
      </MapView>

      <StatusBar style="auto" />
    </View>
  );
};

// STYLING
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default App;
