import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import waterdropIcon from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import colors from '../styles/colors';

export function PlantSave() {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri 
          uri=""
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>Nome da Planta</Text>

        <Text style={styles.plantAbout}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus corporis sed vitae libero sapiente deserunt ducimus possimus dolores veniam asperiores, repudiandae quo provident excepturi eos dicta omnis ut totam optio.
        </Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image 
            source={waterdropIcon}
            style={styles.tipImage}
          />
          <Text style={styles.tipText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt eligendi soluta doloribus, sit, quisquam omnis tempora quia sed voluptas amet ullam eveniet ratione rerum ut alias explicabo rem voluptatibus earum.</Text>
        </View>
        <Text style={styles.alertLabel}>
          Selecione a hora ideal para ser recordada/o
        </Text>
        <Button 
          title="adicionar planta"
          onPress={() => {}}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape
  },
  plantInfo: {},
  plantName: {},
  plantAbout: {},
  controller: {},
  tipContainer: {},
  tipImage: {},
  tipText: {},
  alertLabel: {},
});