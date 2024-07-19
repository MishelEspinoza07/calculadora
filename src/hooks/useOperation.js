import { useState } from "react";
import { c_calculate } from "../plugins/mathPlugin";
import { operators } from '../utils/operatorsUtil';

const useOperation = () => {
  const [result, setResult] = useState('0');
  const [operacion, setOperacion] = useState('');

  const reset = () => {
    setResult('0');
    setOperacion('');
  };

  const buildOperation = (text) => {
    // Cuando agregas un número 0
    if (text === '0' && operacion === '0') return;

    // Verificar si el último carácter es un operador
    const lastChar = operacion[operacion.length - 1];

    // Permitir agregar punto después de un operador
    if (text === '.' && (operators.includes(lastChar) || operacion === '')) {
      setOperacion(operacion + '0.');
      return;
    }

    // Permitir solo un punto por número
    const parts = operacion.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (text === '.' && lastPart.includes('.')) return;

    // Asegurar que los operadores no se repitan consecutivamente
    if (operators.includes(text) && (operacion === '' || operators.includes(lastChar))) return;

    setOperacion(operacion + text);
  };

  const removeLast = () => {
    if (operacion.length === 1) {
      setOperacion('');
      return;
    }
    setOperacion(operacion.substring(0, operacion.length - 1));
  };

  const calculate = () => {
    if (operacion === '') return;

    // Validar división por cero
    if (operacion.includes('/0')) {
      setResult('Error');
      setOperacion('');
      return;
    }

    if (operacion === result) return;
    try {
      let calculatedResult = c_calculate(operacion);
      setResult(calculatedResult.toString());
      //setOperacion(calculatedResult.toString());
    } catch (error) {
      setResult('Error');
      setOperacion('');
    }
  };

  return {
    reset,
    result,
    operacion,
    buildOperation,
    removeLast,
    calculate
  };
};

export default useOperation;
