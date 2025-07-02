import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, updateTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);     
  const [editText, setEditText] = useState('');    

  const handleEdit = (todo) => {
    setEditId(todo.id);        
    setEditText(todo.text);     
  };

  const handleUpdate = () => {

      dispatch(updateTodo({editId,editText }));
      setEditId(null);          
      setEditText('');
    
  };

  return (
    <>
      <h2 className="text-white text-lg mt-4">Todos</h2>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {/* Left: show input if editing, else show text */}
            <div className="text-white w-full mr-4 text-left">
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="w-full px-2 py-1 rounded bg-zinc-700 text-white"
                />
              ) : (
                <span >{todo.text}</span>
              )}
            </div>

            {/* Right: buttons */}
            <div className="flex gap-2">
              {editId === todo.id ? (
                <button
                  onClick={handleUpdate}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                >
                  ✅
                </button>
              ) : (
                <button
                  onClick={() => handleEdit(todo)}
                  className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
                >
                  ✏
                </button>
              )}

              <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="text-white bg-red-500 px-3 py-1 rounded hover:bg-red-600"
              >
                🗑
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
