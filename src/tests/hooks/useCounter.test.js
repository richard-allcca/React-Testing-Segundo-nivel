import { act, renderHook } from "@testing-library/react"
import { useCounter } from './../../hooks/useCounter';


describe('Pruebas en el useCounter', () => {


   /* NOTE - Con renderHookd, Obtenemos el retorno del hook para acceder a su contenido */

   test('Debe retornar los valores por defecto', () => {

      const { result } = renderHook(() => useCounter());
      // console.log(result)
      const { counter, increment, decrement, reset } = result.current;

      expect(counter).toBe(10)
      expect(decrement).toEqual(expect.any(Function))
      expect(increment).toEqual(expect.any(Function))
      expect(reset).toEqual(expect.any(Function))
   })

   // NOTE - 

   test('Debe retornar el valor enviado al hook', () => {

      const { result } = renderHook(() => useCounter(100));
      const { counter } = result.current;

      expect(counter).toBe(100)
   })

   // NOTE - Con Funciones, no puedes usar el destructuring para obtener valores al ejecutarla, debes usar "result.current.counter" en el "expect"
   // Acumulando ejecuciones en el "act()" debes modificar el "useCounter.js" ln 10

   test('Debe incrementar el contador', () => {

      const { result } = renderHook(() => useCounter(100));
      const { counter, increment } = result.current;

      act(() => {
         increment();
         increment(2);
      })

      expect(result.current.counter).toBe(103)
   })

   test('Debe restar el contador', () => {

      const { result } = renderHook(() => useCounter(100));
      const { counter, decrement } = result.current;

      act(() => {
         decrement();
         decrement(2);
      })

      expect(result.current.counter).toBe(97)
   })

   test('Debe resetear el contador', () => {

      const { result } = renderHook(() => useCounter(100));
      const { counter, reset } = result.current;

      act(() => {
         reset();
      })

      expect(result.current.counter).toBe(100)
   })

})