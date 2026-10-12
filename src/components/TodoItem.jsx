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

export default function TodoItem() {
  return (
    <Item variant="outline" size="lg">
      <ItemMedia>
        <Checkbox />
      </ItemMedia>
      <ItemContent>
        <ItemTitle>Your profile has been verified.</ItemTitle>
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
