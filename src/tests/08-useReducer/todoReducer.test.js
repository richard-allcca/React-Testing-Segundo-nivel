import { todoReducer } from './../../08-useReducer/todoReducer';


describe('Pruebas en todoReducer', () => {

   const initialState = [
      {
         id: 1,
         description: 'Demo todo',
         done: false
      }
   ]

   // NOTE - para evaluar un "obj" usamos "toEqual" en este caso usamos "toBe" porque este valida que el obj es de mismo tipo y apunte a la misma ubicación en memoria

   test('Debe regresar un estado inicial', () => {

      const newState = todoReducer(initialState, {})
      expect(newState).toBe(initialState)

   })

   // NOTE - falla por razon desconocida 

   test('Debe agregar un Todo', () => {

      const action = {
         type: '[TODO] Add Todo ',
         payload: {
            id: 2,
            description: 'Nuevo todo #2',
            done: false
         }
      }

      const newState = todoReducer(initialState, action)
      console.log(newState)
      expect(newState.length).toBe(2); // FIXME - 
      expect(newState).toContain(action.payload); //FIXME - 

   })

   // NOTE -

   test('Debe eliminar un TODO', () => {

      const action = {
         type: '[TODO] Remove Todo',
         payload: 1
      }

      const newState = todoReducer(initialState, action)
      expect(newState.length).toBe(0)

   })

   // NOTE -

   test('Debe realizar un Toggle del TODO', () => {

      const action = {
         type: '[TODO] Toggle Todo',
         payload: 1
      }

      const newState = todoReducer(initialState, action)
      expect(newState[ 0 ].done).toBe(true)

   })

})