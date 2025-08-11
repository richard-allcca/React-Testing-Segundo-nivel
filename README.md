# Pruebas

- Tercera bateria de pruebas unitarias en React

## Enlaces

[Web Oficial Jest](https://jestjs.io/)
[React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
[Configuraciones para Test](https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177)

## Dependencies

    npm i jest --save-dev
    npm i @types/jest --save-dev
    npm i babel-jest @babel/core @babel/preset-env --save-dev 
    npm i isomorphic-fetch -D 
    npm i @testing-library/react --save-dev 
    npm i @babel/preset-react
    npm i --dev whatwg-fetch (puede fallar)

## Tests siempre escuchando cambios

- Modifica el script para Jest

    "test": "jest --watchAll"

## Notas

1. Para test con `fetch`
   - la libreria de `whatwg-fetch` tiene fallas por eso debemos usar `isomorphic-fetch`
   - se debe crear y configurar los archivos `jest.config y el jest.setup` clase 59

2. Para test en `hooks`
   - usamos `renderHook` ejemplo en useCounter

3. Para test con `Funcional Component`
   - El archivo de test debe tener terminacion jsx `NameComponent.jsx`

4. Referecia a un boton especifico por rol
   - ejemplo en `MultipleCustomHooks.test` ln/16
   - el 2º parametro es un obj que recibe el texto que contiene para hacer referencia

5. Referecia a la propiedad de un Elemento
   - ejemplo en `MultipleCustomHooks` la 19

6. Verificar `string` (textos) en un componente
   - ejemplo en ln/12 `MultipleCustomHook`

7. Evaluar el estado que devuelve un hook
   - ejemplo en `MultipleCustomHook` ln/53

8. Evaluar la ejecución de una función que viene de un customHook
   - ejemplo en `MultipleCustomHook` ln/73

9. Test en Reducer
   - ejemplo en `todoReducer.test`

10. Verificar que exista una clase en el elemento

- ejemplo en `TodoItem.test`

11º. Pruebas en componente que usa `custom hook`

- ejemplo en `MultipleCustomHook` y `Todoapp`

12º. Pruebas en `context`

- ejemplo en `HomePage`
- Debes proveer el context con su 'Provider' en el render

13º. Pruebas a funciones de un `context` en componente

- ejemplo en `LoginPage` ln/48

14º. Pruebas en Router

- ejemplo en `LoginPage.test`

14º. Elementos que no pueden ser objetivo de `getbyRole`

- Debes usar un `aria-label` como propiedad en el elemento
- Usa `getByLabelText` para hacer objetivo en el elemento
- ejemplo en `HomePage.test` and `TodoItem.test`
