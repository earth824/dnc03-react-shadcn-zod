import z from 'zod';

// schema to validate login input (email, password)
// example data: { email: 'abcd', password: '1234' }
// const data = { email: 'abcd@mail.com', password: '1a1B' };

// const loginSchema = z.object({
//   email: z.email(),
//   // password: z
//   //   .string('Password must be a string and required')
//   //   .min(1, 'Password is required')
//   password: z
//     .string()
//     .min(8, 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร')
//     .regex(/[0-9]/, 'ต้องมีตัวเลขอย่างน้อย 1 ตัว')
//     .regex(/[A-Z]/, 'ต้องมีตัวพิมพ์ใหญ่อย่างน้อย 1 ตัว')
//     .regex(/[a-z]/, 'ต้องมีตัวพิมพ์เล็กอย่างน้อย 1 ตัว')
//     .regex(/[^A-Za-z0-9]/, 'ต้องมีอักขระพิเศษอย่างน้อย 1 ตัว')
// });

// 2 way to validate:
// 1. safeParse => { success: boolean, data?, error? }
// success validation: { success: true, data: data after validation, error: undefined }
// failed validation: { success: false, data: undefined, error: Error object which have validation failure }
// const parse = loginSchema.safeParse(data);
// console.log(parse);
// console.log(parse.error);
// console.log(z.prettifyError(parse.error));
// console.log(z.flattenError(parse.error));

// 2. parse => data if success, throw error if failed
// try {
//   const result = loginSchema.parse(data);
//   console.log(result);
// } catch (error) {
//   console.log(z.flattenError(error));
// }

// async function test() {
//   try {
//     // awai axios
//     // safeParse
//   } catch (error) {
//     if (error instanceof AxiosError) {}
//     if (error instanceof ZodError) {}
//   }
// }

// const parse = loginSchema.safeParse(data)
// if (!parse.success) {
//   // setError(z.flattenError(parse.error))
//   // return
// }

// axios.post(url, parse.data)

const changePasswordSchema = z
  .object({
    newPassword: z.string().min(1),
    oldPassword: z.string().min(1),
    confirmNewPassword: z.string().min(1)
  })
  .refine((value) => value.newPassword === value.confirmNewPassword, {
    error: 'password and confirm did not match',
    path: ['confirmNewPassword']
  })
  .transform(({ confirmNewPassword, ...rest }) => rest);

const parse = changePasswordSchema.safeParse({
  newPassword: '1',
  oldPassword: '0',
  confirmNewPassword: '1'
});

console.log(parse.data);
