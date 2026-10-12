import { Pencil } from 'lucide-react';
import { Checkbox } from './ui/checkbox';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle
} from './ui/item';
import { Trash } from 'lucide-react';
import { cn } from 'cn';

export default function TodoItem({ title, completed }) {
  return (
    <Item variant="outline" size="lg">
      <ItemMedia>
        <Checkbox checked={completed} />
      </ItemMedia>
      <ItemContent>
        <ItemTitle
          className={cn({ 'line-through text-muted-foreground': completed })}
        >
          {title}
        </ItemTitle>
      </ItemContent>
      <ItemActions>
        <button>
          <Pencil className="size-4" />
        </button>
        <button>
          <Trash className="size-4" />
        </button>
      </ItemActions>
    </Item>
  );
}
