import { render, screen, fireEvent } from '@testing-library/react';
import { TodoItem } from '../../08-useReducer/TodoItem';


describe('Pruebas en <TodoItem/>', () => {

   const todo = {
      id: 1,
      description: 'Piedra del alma',
      done: false
   }

   const onDeleteTodoMock = jest.fn();
   const onToggleTodoMock = jest.fn();

   beforeEach(() => jest.clearAllMocks());



   // NOTE - "span" no puede ser objetivo del "getByrole", se soluciona con un arial-label en elemento y hacer objetivocon "getByLabelText" ln/35

   test('Debe mostrar la tarea (todo) a completar ', () => {

      render(
         <TodoItem
            todo={ todo }
            onDeleteTodo={ onToggleTodoMock }
            onToggleTodo={ onDeleteTodoMock }
         />
      )

      const liElement = screen.getByRole('listitem');
      expect(liElement.className).toBe('list-group-item d-flex justify-content-between')


      const spanElement = screen.getByLabelText('span')
      expect(spanElement.className).toContain('align-self-center')
      expect(spanElement.className).not.toContain('text-decoration-line-through')

      screen.debug();

   })

   // NOTE - No olvides que para apuntar a un "span" debe tener un "aria-label"

   test('Debe mostrar la tarea (todo) completada', () => {

      todo.done = true;

      render(
         <TodoItem
            todo={ todo }
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
         />
      )

      const spanElement = screen.getByLabelText('span')
      expect(spanElement.className).toContain('align-self-center')
      expect(spanElement.className).toContain('text-decoration-line-through')
   })

   // NOTE - toggle puede ser llamado solo con "toHaveBeenCalled" pero aqui deber ser llamado con todo.id

   test('Span debe llamar al Toggle cuando se hace click', () => {

      render(
         <TodoItem
            todo={ todo }
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
         />
      )

      const spanElement = screen.getByLabelText('span');
      fireEvent.click(spanElement)

      expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
   })

   // NOTE - 

   test('El boton debe llamar al onDeleteTodo', () => {

      render(
         <TodoItem
            todo={ todo }
            onToggleTodo={ onToggleTodoMock }
            onDeleteTodo={ onDeleteTodoMock }
         />
      )

      const buttonElement = screen.getByRole('button', { name: 'Borrar' });
      fireEvent.click(buttonElement)

      expect(onDeleteTodoMock).toHaveBeenCalled()
      expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)

   })
})