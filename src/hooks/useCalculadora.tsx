import { useRef, useState } from "react";

enum Operadores {
    sumar, restar, multiplicar, dividir
  }


export const useCalculadora = () => {

    const [numero, setNumero] = useState("0");
    const [numeroAnterior, setNumeroAnterior] = useState("0");
  
    const ultimaOperacion = useRef<Operadores>();
  
    const armarNumero = (numeroTexto : string) => {
      /* no aceptar doble punto */
      if (numero.includes(".") && numeroTexto === ".") return;
  
      if (numero.startsWith("0") || numero.startsWith("-0")) {
  
        if (numeroTexto === ".") {
          setNumero(numero + numeroTexto)
  
          //evaluar si es otro 0 y hay un .
        } else if (numeroTexto === "0" && numero.includes(".")) {
          setNumero(numero + numeroTexto);
  
          //Evaluar si es diferente de 0 y no tiene .
        } else if (numeroTexto !== "0" && !numero.includes(".")) {
          setNumero(numeroTexto);
  
          //Evitar el 0000.0
        } else if (numeroTexto === "0" && !numero.includes(".") ) {
          setNumero(numero);
        } else if (numero.includes(".") && numeroTexto) {
          setNumero(numero + numeroTexto)
        }
        
      } else {
        setNumero(numero + numeroTexto)
        
      }
    }
  
    const limpiar = () => {
      setNumero("0");
      setNumeroAnterior("0")
    };
  
    const positivoNegativo = () => {
      if (numero.includes("-")) {
        setNumero(numero.replace("-", ""))
      }
      else {
        setNumero("-" + numero)
      }
    }
  
    const del = () => {
      if (numero !== "0") {
        if (numero.length !== 1) {
          setNumero(numero.substring(0, numero.length -1))
        } else if (numero.length === 1 && numero !== "0") {
          setNumero("0")
        } 
      };
      if (numero.includes("-")) {
        if (numero.length === 2) {
          setNumero("0")
        }
      }
      else { setNumero("0")}
    }
  
    const cambiarNumPorAnterior = () => {
      if (numero.endsWith(".")) {
        setNumeroAnterior(numero.slice(0, -1));
      } else {
        setNumeroAnterior(numero);
        
      }
      setNumero("0");
    };
  
    const btnDividir = () => {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.dividir
    };
    const btnMultiplicar = () => {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.multiplicar
    };
    const btnRestar = () => {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.restar
    };
    const btnSumar = () => {
      cambiarNumPorAnterior();
      ultimaOperacion.current = Operadores.sumar
    };
  
    const calcular = () => {
  
      const num1 = Number(numero);
      const num2 = Number(numeroAnterior);
  
      switch (ultimaOperacion.current) {
        case Operadores.sumar:
          setNumero(`${num1 + num2}`);
          break;
        case Operadores.restar:
          setNumero(`${num2 - num1}`);
          break;
        case Operadores.dividir:
          setNumero(`${num2 / num1}`);
          break;
        case Operadores.multiplicar:
          setNumero(`${num1 * num2}`);
          break;
     
      
        default:
          break;
      }
  
  
      setNumeroAnterior("0");
    };


    return ({
        numero,
        numeroAnterior,
        btnSumar,
        btnRestar,
        btnMultiplicar,
        btnDividir,
        limpiar,
        calcular, 
        positivoNegativo,
        del,
        armarNumero
      
  }
    
  )
}
