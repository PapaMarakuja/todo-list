import { useState } from 'react';
import './App.css';
import { CheckIcon, PlusIcon, XMarkIcon } from './assets/icons';
import Card from './components/Card';
import FilterCard from './components/FilterCard';
import NotFound from './components/NotFound';

function App() {
  const [newItem, setNewItem] = useState<string>();
  const [filter, setFilter] = useState<'all' | 'done' | 'pending'>('all');
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

  const filteredList = list.filter((todo) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'done') {
      return todo.done;
    } else {
      return !todo.done;
    }
  });

  function changeFilter(newFilter: 'all' | 'done' | 'pending') {
    setFilter(newFilter);
  }

  function handleEnterKeyPress(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key !== 'Enter') return;

    addItem(newItem);
  }

  return (
    <div className='bg-slate-300 text-zinc-800 min-h-screen flex justify-center'>
      <div className='container flex items-center flex-col p-4 gap-4'>
        <h1 className='text-3xl text-center font-bold my-4'>Rafael's Todo List</h1>

        <Card>
          <div className='grid place-items-center'>
            <div className='flex w-full'>
              <input
                className='w-full rounded-s-md pl-4 py-2 outline-none'
                type='text'
                placeholder='Add new'
                value={newItem}
                onChange={handleNewItemChange}
                onKeyDown={handleEnterKeyPress}
              />
              <button
                className='px-2 bg-white rounded-e-md'
                onClick={() => addItem(newItem)}
              >
                <PlusIcon />
              </button>
            </div>
            <div className='flex items-start w-full gap-1 pt-2'>
              <FilterCard
                text='All'
                onClick={() => changeFilter('all')}
                filter={filter}
              />
              <FilterCard
                text='Pending'
                onClick={() => changeFilter('pending')}
                filter={filter}
              />
              <FilterCard
                text='Done'
                onClick={() => changeFilter('done')}
                filter={filter}
              />
            </div>
          </div>
        </Card>

        <Card>
          <ul className='flex flex-col gap-2'>
            {filteredList.length <= 0 && <NotFound />}
            {filteredList.map((thing: TodoList, index: number) => (
              <li
                key={index}
                className={`bg-slate-300 bg-opacity-75 rounded-md px-4 py-2 min-h-[60px] flex justify-between items-center break-all transition-all 
                ${thing.done ? '!bg-slate-500 text-slate-200 line-through' : ''}`}
              >
                <h1>{thing.title}</h1>
                <div className='flex gap-2 justify-start'>
                  {!thing.done && (
                    <button
                      className='border border-green-500 text-green-600 rounded-md p-1 transition-colors hover:bg-green-300'
                      onClick={() => markAsChecked(index)}
                    >
                      <CheckIcon />
                    </button>
                  )}
                  <button
                    className={`border border-red-500 text-red-600 rounded-md p-1 transition-colors hover:bg-red-300 ${
                      thing.done ? 'opacity-75' : ''
                    }`}
                    onClick={() => deleteItem(index)}
                  >
                    <XMarkIcon />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </div>
  );
}

interface TodoList {
  title: string;
  done: boolean;
}

export default App;
