import React from 'react';
import * as Updates from 'expo-updates';
import Tooltip from 'react-native-tooltiplize';
import { PortalProvider } from '@gorhom/portal';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  I18nManager,
} from 'react-native';

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

  const switchLayout = React.useCallback(() => {
    I18nManager.forceRTL(!I18nManager.isRTL);
    Updates.reloadAsync();
  }, []);

  return (
    <PortalProvider>
      <View style={styles.container}>
        <TouchableOpacity onPress={switchLayout} style={styles.button}>
          <Text style={styles.newFeatureText}>
            {I18nManager.isRTL ? 'تغيير الواجهة' : 'Switch Layout'}
          </Text>
        </TouchableOpacity>
        <Tooltip
          position="right"
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
    paddingHorizontal: 16,
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
    backgroundColor: '#f1f1f1',
    padding: 16,
    borderRadius: 8,
  },
  newFeatureText: {
    fontSize: 16,
  },
  button: {
    height: 56,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 8,
    marginBottom: 16,
  },
});
