import { fireEvent, render, screen } from '@testing-library/react';

import { LoginPage } from './../../09-useContext/LoginPage';
import { UserContext } from './../../09-useContext/context/UserContext';

describe('Pruebas en <LoginPage/>', () => {

   const user = {
      id: 2,
      name: 'Abdiel'
   }

   // NOTE -

   test('Debe mostrar el componente SIN el usuario', () => {

      render(
         <UserContext.Provider value={ { user: null } }>
            <LoginPage />
         </UserContext.Provider>
      )

      const preTag = screen.getByLabelText('pre');
      screen.debug();
      expect(preTag.innerHTML).toContain('null')

   })

   // NOTE - el 2º expect usa template string para que lo lea como string y no falle

   test('Debe mostrar el componente CON el usuario', () => {

      render(
         <UserContext.Provider value={ { user } }>
            <LoginPage />
         </UserContext.Provider>
      )

      const preTag = screen.getByLabelText('pre');
      screen.debug();
      expect(preTag.innerHTML).toContain(user.name)
      expect(preTag.innerHTML).toContain(`${user.id}`)

   })

   // NOTE - toHaveBeenCalledWith necesita el user del componente origen ln/21

   test('Debe llamar el setUser con clik en el boton', () => {

      const userOrigen = { id: 123, name: 'Juan', email: 'juan@google.com' }

      const setUserMock = jest.fn();

      render(
         <UserContext.Provider value={ { user: null, setUser: setUserMock } }>
            <LoginPage />
         </UserContext.Provider>
      )

      // screen.debug()
      fireEvent.click(screen.getByRole('button', { name: 'Establecer usuario' }));

      expect(setUserMock).toHaveBeenCalled()
      expect(setUserMock).toHaveBeenCalledWith(userOrigen)
   })
})