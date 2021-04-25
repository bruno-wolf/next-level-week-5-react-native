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
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { SvgFromUri } from 'react-native-svg';

import waterdropIcon from '../assets/waterdrop.png';
import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

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
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.shape,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 16,
    marginTop: 10,
  },
  controller: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: getBottomSpace() || 20,
  },
  tipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    marginTop: -60,
    // position: 'relative',
    // bottom: 60,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 16,
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
});