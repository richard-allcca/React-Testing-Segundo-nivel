
import { act, renderHook } from '@testing-library/react';
import { useForm } from './../../hooks/useForm';


describe('Pruebas en useForm', () => {

   const initialValuesForm = {
      name: 'Richard',
      email: 'richard@google.com'
   }

   // NOTE - Importante usar el console.log para saber que enviar en el "toEqual"

   test('Debe regresar los valores por defecto', () => {

      const { result } = renderHook(() => useForm(initialValuesForm));
      console.log(result);

      expect(result.current).toEqual({
         name: initialValuesForm.name,
         email: initialValuesForm.email,
         formState: initialValuesForm,
         onInputChange: expect.any(Function),
         onResetForm: expect.any(Function),
      })

   })

   // NOTE - Presta atención a la forma de pasar parametros de un "onInputChange" con target y compara con lo que recibe la funcion como parametro

   test('Debe cambiar el nombre del formulario', () => {

      const newName = 'Richard';

      const { result } = renderHook(() => useForm(initialValuesForm));
      const { onInputChange } = result.current;

      act(() => {
         onInputChange({ target: { name: 'Richard', value: newName } })
      })

      expect(result.current.name).toBe(newName);
      expect(result.current.formState.name).toBe(newName);
   })

   // NOTE - 

   test('Debe resetear el formulario', () => {

      const newName = 'Richard';

      const { result } = renderHook(() => useForm(initialValuesForm));
      const { onInputChange, onResetForm } = result.current;

      act(() => {
         onInputChange({ target: { name: 'Richard', value: newName } })
         onResetForm();
      })

      expect(result.current.name).toBe(initialValuesForm.name);
      expect(result.current.formState.name).toBe(initialValuesForm.name);
   })
})