import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { BotonCalc } from '../components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';

export const CalculadoraScreen = () => {

  const {
    numeroAnterior,
    numero,
    limpiar,
    positivoNegativo,
    del,
    btnDividir,
    armarNumero,
    btnMultiplicar,
    btnRestar,
    btnSumar,
    calcular
  } = useCalculadora();

  return (
    <View style={styles.calculadoraContainer}>
      {numeroAnterior !== "0" && <Text style={styles.resultadoPeque}>{numeroAnterior }</Text>}
      <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
      
      {/* fila de botones */}
      <View style={styles.fila}>
       <BotonCalc text='C' color="#9b9b9b" accion={limpiar} />
       <BotonCalc text='+/-' color="#9b9b9b" accion={positivoNegativo} />
       <BotonCalc text='del' color="#9b9b9b" accion={del}  />
       <BotonCalc text='/' color="#ff9427" accion={btnDividir} />
      </View>
      {/* fila de botones */}
      <View style={styles.fila}>
       <BotonCalc text='7' accion={armarNumero}/>
       <BotonCalc text='8' accion={armarNumero}/>
       <BotonCalc text='9' accion={armarNumero}/>
       <BotonCalc text='X' color="#ff9427" accion={btnMultiplicar}  />
      </View>
      {/* fila de botones */}
      <View style={styles.fila}>
       <BotonCalc text='4' accion={armarNumero}/>
       <BotonCalc text='5' accion={armarNumero}/>
       <BotonCalc text='6' accion={armarNumero}/>
       <BotonCalc text='-' color="#ff9427" accion={btnRestar} />
      </View>
      {/* fila de botones */}
      <View style={styles.fila}>
       <BotonCalc text='1' accion={armarNumero}/>
       <BotonCalc text='2' accion={armarNumero}/>
       <BotonCalc text='3' accion={armarNumero}/>
       <BotonCalc text='+' color="#ff9427" accion={btnSumar} />
      </View>
      {/* fila de botones */}
      <View style={styles.fila}>
       <BotonCalc text='0' ancho accion={armarNumero}/>
       <BotonCalc text='.' accion={armarNumero}/>
       <BotonCalc text='=' color="#ff9427" accion={calcular} />
      </View>
    </View>
  )
}
