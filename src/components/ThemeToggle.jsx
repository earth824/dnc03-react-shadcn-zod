import { useTheme } from '@/hooks/use-theme';
import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? (
        <Sun className="size-10" />
      ) : (
        <Moon className="size-10" />
      )}
    </button>
  );
}
