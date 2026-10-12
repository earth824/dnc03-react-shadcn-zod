import ThemeToggle from './components/ThemeToggle';
import TodoContainer from './components/TodoContainer';

export default function App() {
  return (
    <div className="bg-body min-h-screen p-4">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="text-center text-5xl font-bold">My Tasks</h1>
      <div className="max-w-2xl mx-auto my-8">
        <TodoContainer />
      </div>
    </div>
  );
}
