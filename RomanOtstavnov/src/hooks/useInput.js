import {useState} from "react";

export const useInput = (initialState) => {
  const [state, setState] = useState(initialState);
  const setInput = ({ currentTarget: { value }}) => setState(value);
  const clearInput = () => setState('');
  return [state, setInput, clearInput];
};

export default useInput;
