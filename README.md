# Test en React

- Primer nivel de Testing en React

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

- Para test con `fetch` la libreria de `whatwg-fetch` tiene fallas por eso debemos usar `isomorphic-fetch`, ademas se debe crear y configurar los archivos `jest.config y el jest.setup` ejemplo en la clase 59

- Para test en `hooks` usamos `renderHook` ejemplo en useCounter
