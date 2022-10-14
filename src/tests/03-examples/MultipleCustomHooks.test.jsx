
import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from './../../03-examples/MultipleCustomHooks';
import { useCounter } from './../../hooks/useCounter';
import { useFetch } from './../../hooks/useFetch';


// hacer mock es hacer una imitación o copia  
jest.mock('./../../hooks/useFetch')
jest.mock('./../../hooks/useCounter')



describe('Pruebas en MultipleCustomHooks', () => {

   // NOTE - hacemos un mock global para que todos los test tengan acceso a useCounter

   const mockIncrement = jest.fn();

   useCounter.mockReturnValue({

      counter: 1,
      increment: mockIncrement

   })

   beforeEach(() => {// asegura que en cada test las funciones sean reseteadas 

      jest.clearAllMocks();

   })


   // NOTE - 

   test('Debe retornar el estado inicial del componente y sus elementos', () => {


      useFetch.mockReturnValue({
         data: null,
         isLoading: true,
         hasError: null
      })

      render(<MultipleCustomHooks />);

      // existe el Texto en el componente?
      expect(screen.getAllByText('Loading...'))
      expect(screen.getAllByText('BreakingBad Quotes'))

      const nextButton = screen.getByRole('button', { name: 'Next quote' })

      // existe la propiedad en el componente?
      expect(nextButton.disabled).toBeTruthy();

      screen.debug();

   })

   // NOTE - Probamos los posibles estados que un hook puede enviar o devolver

   test('Debe mostrar un Quote', () => {

      useFetch.mockReturnValue({
         data: [ { author: 'Richard', quote: 'Hola mundo' } ],
         isLoading: false,
         hasError: null
      })

      render(<MultipleCustomHooks />);
      expect(screen.getByText('Hola mundo')).toBeTruthy();
      expect(screen.getByText('Richard')).toBeTruthy();

      const nextButton = screen.getByRole('button', { name: 'Next quote' })
      expect(nextButton.disabled).toBeFalsy();

      screen.debug();
   })

   // NOTE - Evaluar que una función haya sido llamada

   test('Debe llamar y ejecutar la función Incrementar', () => {

      useFetch.mockReturnValue({
         data: [ { author: 'Richard', quote: 'Hola mundo' } ],
         isLoading: false,
         hasError: null
      })

      render(<MultipleCustomHooks />);

      // const nextButton = screen.getByRole('button', { name: 'Next quote' })
      fireEvent.click(screen.getByRole('button', { name: 'Next quote' }));

      expect(mockIncrement).toHaveBeenCalled()

   })

})