import './App.css';

function App() {
  const list = [
    {
      title: 'Anything',
      content: 'blá blá blá',
    },
    {
      title: 'Other thing',
      content: 'sadkfjasdjkfhjkadsfkaskjhasifhikujas',
    },
  ];
  return (
    <div className='bg-slate-100 text-zinc-800 h-screen flex justify-center'>
      <div className='container px-4'>
        <h1 className='text-3xl text-center font-bold mb-10 mt-4'>Rafael's Todo List</h1>

        <div className='grid place-items-center mb-4'>
          <input
            className='w-full border rounded-2xl px-4 py-2'
            type='text'
            placeholder='Search'
          />
          <div className='flex gap-4 pt-2'>
            <label>
              <input type='checkbox' /> Done
            </label>
            <label>
              <input type='checkbox' /> Pending
            </label>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-2'>
          {list.map((things: TodoList) => (
            <div className='border border-cyan-700 rounded-lg px-4 py-2'>
              <h1 className='mb-2'>{things.title}</h1>
              <p>{things.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface TodoList {
  title: string;
  content: string;
}

export default App;
