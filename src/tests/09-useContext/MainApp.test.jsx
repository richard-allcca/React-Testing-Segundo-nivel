
import { MainApp } from './../../09-useContext/MainApp';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Pruebas en <MainApp/>', () => {


   // NOTE - por defecto testea la ruta principal

   test('Debe mostrar el <HomePage/>', () => {

      render(
         <MemoryRouter>
            <MainApp />
         </MemoryRouter>
      )

      expect(screen.getByText('HomePage')).toBeTruthy()
      screen.debug();

   })

   // NOTE - Cambia la ruta usarndo un arreglo en initialEntries de MemoryRouter

   test('Debe mostrar el <HomePage/>', () => {

      render(
         <MemoryRouter initialEntries={ [ '/login' ] } >
            <MainApp />
         </MemoryRouter>
      )

      expect(screen.getByText('LoginPage')).toBeTruthy()
      screen.debug();

   })
})