import { renderHook } from "@testing-library/react"
import { useCounter } from './../../hooks/useCounter';


describe('Pruebas en el useCounter', () => {



   test('Debe retornar los valores por defecto', () => {

      /* Obtenemos el retorno del hook para acceder a su contenido */
      const { result } = renderHook(() => useCounter());
      // console.log(result)
      const { counter, increment, decrement, reset } = result.current;

      expect(counter).toBe(10)
      expect(decrement).toEqual(expect.any(Function))
      expect(increment).toEqual(expect.any(Function))
      expect(reset).toEqual(expect.any(Function))
   })

   test('Debe retornar el valor enviado al hook', () => {

      const { result } = renderHook(() => useCounter(100));
      // console.log(result)
      const { counter } = result.current;

      expect(counter).toBe(100)
   })
})