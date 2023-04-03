import { useState } from 'react';
import './App.css';
import { CheckIcon, PlusIcon, XMarkIcon } from './assets/icons';

function App() {
  const [newItem, setNewItem] = useState<string>();
  const [list, setList] = useState<TodoList[]>([
    {
      title: 'Anything',
      done: false,
    },
    {
      title: 'Other thing',
      done: true,
    },
  ]);

  function addItem(title: any) {
    if (!title) {
      return;
    }

    setList([...list, { title: title, done: false }]);
    setNewItem('');
  }

  function markAsChecked(index: number) {
    const newList = [...list];
    newList[index].done = true;
    setList(newList);
  }

  function deleteItem(index: number) {
    setList(list.filter((_, i) => i !== index));
  }

  function handleNewItemChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewItem(event.target.value);
  }

  return (
    <div className='gradient text-zinc-800 h-screen flex justify-center'>
      <div className='container flex items-center flex-col px-4 gap-4'>
        <h1 className='text-3xl text-center font-bold my-4'>Rafael's Todo List</h1>

        <div className='w-full max-w-4xl bg-gray-100 bg-opacity-70 p-4 rounded-xl backdrop-blur-lg backdrop-saturate-150'>
          <div className='grid place-items-center'>
            <input
              className='w-full rounded-2xl px-4 py-2'
              type='text'
              placeholder='Add new'
              value={newItem}
              onChange={handleNewItemChange}
            />
            <button onClick={() => addItem(newItem)} className='absolute top-6 right-8'>
              <PlusIcon />
            </button>
            <div className='flex gap-4 pt-2'>
              <label>
                <input type='checkbox' /> Done
              </label>
              <label>
                <input type='checkbox' /> Pending
              </label>
            </div>
          </div>
        </div>

        <div className='w-full max-w-4xl bg-gray-100 bg-opacity-70 p-4 rounded-xl backdrop-blur-lg backdrop-saturate-150'>
          <ul className='flex flex-col gap-2'>
            {list.map((thing: TodoList, index: number) => (
              <li
                key={index}
                className={`bg-slate-400 bg-opacity-75 rounded-md px-4 py-2 flex justify-between break-words ${
                  thing.done ? 'bg-slate-800 text-slate-400 line-through' : ''
                }`}
              >
                <h1>{thing.title}</h1>
                <div className='flex gap-2 justify-start'>
                  {!thing.done && (
                    <button onClick={() => markAsChecked(index)}>
                      <CheckIcon />
                    </button>
                  )}
                  <button onClick={() => deleteItem(index)}>
                    <XMarkIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface TodoList {
  title: string;
  done: boolean;
}

export default App;
