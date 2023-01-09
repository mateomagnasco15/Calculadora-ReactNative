import React from 'react'
import { styles } from '../theme/appTheme';
import { View, Text, TouchableOpacity } from 'react-native';

interface BotonCalcProps {
  text: string,
  color?: string,
  ancho?: boolean,
  accion: (numeroText: string) => void

}

export const BotonCalc = ({text, color = "#2d2d2d", ancho = false, accion} : BotonCalcProps) => {
  return (
    <TouchableOpacity onPress={ () => accion(text)}>
      <View style={{
        ...styles.boton,
        backgroundColor: color,
        width: (ancho) ? 180  : 80
      }}>
        <Text style={{
          ...styles.botonText,
          color:( color === "#9b9b9b") ? "black" : "white"
        }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>  
  )
}
