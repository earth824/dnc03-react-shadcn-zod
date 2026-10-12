import CreateTodoForm from './CreateTodoForm';
import StatusFilter from './StatusFilter';
import TodoItem from './TodoItem';
import { ItemGroup } from './ui/item';

export default function TodoContainer() {
  return (
    <div className="">
      <CreateTodoForm />
      <div className="flex justify-between items-center mt-8 mb-4">
        <StatusFilter />
        <span className="text-muted-foreground text-sm">2 task left</span>
      </div>
      <ItemGroup>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ItemGroup>
    </div>
  );
}
