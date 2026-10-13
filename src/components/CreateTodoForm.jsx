import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Controller, useForm } from 'react-hook-form';
import { Field, FieldError } from './ui/field';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';

const createTodoSchema = z.object({
  title: z.string().min(1, 'Task is required')
});

export default function CreateTodoForm({ fetchTodos }) {
  const form = useForm({
    resolver: zodResolver(createTodoSchema),
    defaultValues: { title: '' }
  });

  const onSubmit = async (data) => {
    try {
      await axios.post('http://localhost:3000/todos', data);
      await fetchTodos();
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex gap-4" onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="title"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <Input
              placeholder="Type your task here..."
              {...field}
              aria-invalid={fieldState.invalid}
            />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />
      <Button type="submit">
        <Plus />
        Add
      </Button>
    </form>
  );
}
