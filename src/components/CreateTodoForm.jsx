import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function CreateTodoForm() {
  return (
    <form className="flex gap-4">
      <Input placeholder="Type your task here..." />
      <Button>
        <Plus />
        Add
      </Button>
    </form>
  );
}
