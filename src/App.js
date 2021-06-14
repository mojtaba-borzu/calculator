import React, {useState} from 'react';
import AddTask from './Component/AddTask';
import Tasks from './Tasks';
import Header from './Header';

function App () {
  const [showAddTask, setShowAddTask] = useState (false);
  const [tasks, setTasks] = useState ([
    {
      id: 1,
      text: 'hello world',
      day: 'feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'hello naji',
      day: 'jul 7th at 2pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'hello tehran',
      day: 'april 8th at 5pm',
      reminder: true,
    },
    {
      id: 4,
      text: 'hello azari',
      day: 'ap 9th at 7pm',
      reminder: true,
    },
  ]);
  const addTask = task => {
    const id = Math.floor (Math.random () * 1000) + 1;
    const newTask = {id, ...task};
    setTasks ([...tasks, newTask]);
  };
  const deleteTask = id => {
    setTasks (tasks.filter (task => task.id !== id));
  };
  const toggleReminder = id => {
    setTasks (
      tasks.map (
        task => (task.id === id ? {...task, reminder: !task.reminder} : task)
      )
    );
  };

  return (
    <div>

      <ul>

        <Header
          onAddTask={() => {
            setShowAddTask (!showAddTask);
          }}
          showAdd={showAddTask}
        />
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0
          ? <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              toggle={toggleReminder}
            />
          : 'no task to show'}

      </ul>
    </div>
  );
}

export default App;
