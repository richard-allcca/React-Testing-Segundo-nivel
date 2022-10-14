import { render, screen } from '@testing-library/react';

import { HomePage } from './../../09-useContext/HomePage';
import { UserContext } from './../../09-useContext/context/UserContext';


describe('Pruebas en <HomePage/>', () => {

   const user = {
      id: 1,
      name: 'Richard'
   }

   // NOTE -

   test('Debe mostrar el componente sin el usuario ', () => {

      render(
         <UserContext.Provider value={ { user: null } }>
            <HomePage />
         </UserContext.Provider>
      );
      const preTag = screen.getByLabelText('pre');
      // screen.debug();
      expect(preTag.innerHTML).toBe('null');

   })

   // NOTE - para el user.id usamos template string para que lo lea como string ln/42

   test('Debe mostrar el componente con el usuario', () => {

      render(
         <UserContext.Provider value={ { user } }>
            <HomePage />
         </UserContext.Provider>
      )

      const preTag = screen.getByLabelText('pre');
      screen.debug()
      expect(preTag.innerHTML).toContain(user.name);
      expect(preTag.innerHTML).toContain(`${user.id}`);

   })
})