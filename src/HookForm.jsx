// pnpm i react-hook-form @hookform/resolvers

import { Controller, useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Field, FieldError, FieldLabel } from './components/ui/field';
import { Input } from './components/ui/input';
import { Button } from './components/ui/button';

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6, 'Password must have at least 6 characters')
});

export default function App() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field data-invalid={fieldState.invalid}>
            <FieldLabel>Email</FieldLabel>
            <Input {...field} aria-invalid={fieldState.invalid} />
            {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
          </Field>
        )}
      />

      <Controller
        name="password"
        control={form.control}
        render={({ field, fieldState }) => (
          <Field>
            <FieldLabel>Password</FieldLabel>
            <Input {...field} />
          </Field>
        )}
      />

      <Button type="submit">Submit</Button>
    </form>
  );
}

// export default function App() {
//   const form = useForm({
//     resolver: zodResolver(loginSchema),
//     defaultValues: { email: '', password: '' }
//   });

//   // this function will be called if validation passed
//   const onSubmit = (data) => {
//     console.log(data);
//   };

//   const { errors } = form.formState;

//   return (
//     <div>
//       <form
//         className="p-4 border grid gap-6"
//         // form.handleSubmit will validate the form input with zod schema
//         // if validation passed: it called onSubmit with success data
//         onSubmit={form.handleSubmit(onSubmit)}
//       >
//         <div>
//           <input
//             type="email"
//             className="border w-full"
//             {...form.register('email')}
//           />
//           {errors.email && (
//             <p className="text-red-500">{errors.email.message}</p>
//           )}
//         </div>

//         <div>
//           <input
//             type="password"
//             className="border w-full"
//             {...form.register('password')}
//           />
//           {errors.password && (
//             <p className="text-red-500">{errors.password.message}</p>
//           )}
//         </div>
//         <button className="bg-blue-500">Submit</button>
//       </form>
//     </div>
//   );
// }
