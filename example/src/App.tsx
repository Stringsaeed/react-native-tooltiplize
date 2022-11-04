import React from 'react';
import Tooltip from 'react-native-tooltiplize';
import { PortalProvider } from '@gorhom/portal';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

const App = () => {
  const [isVisible, toggle] = React.useReducer((state) => !state, false);

  const renderContent = React.useCallback(() => {
    return (
      <TouchableOpacity style={styles.tooltipContainer} onPress={toggle}>
        <Text style={styles.tooltipText}>
          Welcome to React Native Tooltiplize 🥳
        </Text>
      </TouchableOpacity>
    );
  }, []);

  return (
    <PortalProvider>
      <View style={styles.container}>
        <Tooltip
          position="top"
          offset={8}
          renderContent={renderContent}
          isVisible={isVisible}
          withOverlay
          onDismiss={toggle}
          pointerStyle={styles.pointer}
          pointerColor="pink"
        >
          <TouchableOpacity onPress={toggle} style={styles.newFeature}>
            <Text style={styles.newFeatureText}>This is new cool feature</Text>
          </TouchableOpacity>
        </Tooltip>
      </View>
    </PortalProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tooltipContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    backgroundColor: 'pink',
  },
  tooltipText: {
    fontSize: 12,
    color: 'black',
  },
  pointer: { width: 16, height: 8 },
  newFeature: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  newFeatureText: {
    fontSize: 16,
  },
});
