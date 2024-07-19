import { evaluate } from "mathjs";
export const c_calculate = (operation) => {
    //eval no es seguro
    const result = evaluate(operation);
    return result;
  }