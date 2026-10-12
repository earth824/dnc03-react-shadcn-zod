// props: error
// <input className={`border ${error ? 'border-red-500': 'border-gray-300'} px-3 py-1.5`}/>
// clsx

import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';
// const error = true;
// baseClass = 'border px-3 py-1.5'
// clsx('border px-3 py-1.5', error ? 'border-red-500' : 'border-gray-300');
// const result = clsx('a', 'b', 'c'); // 'a b c'
const result = clsx('px-3 py-1.5', 'px-2', 'py-1');
const final = twMerge(result);
console.log(result);
console.log(final);

const cn = (...className) => twMerge(clsx(...className));
const cnResult = cn('px-3 py-1.5', 'px-2', 'py-1', { test: true });
console.log(cnResult);
