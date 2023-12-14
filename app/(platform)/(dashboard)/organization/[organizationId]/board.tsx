import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";

interface BoardProps {
  title: string;
  id: string;
}

const Board = ({ title, id }: BoardProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);
  return (
    <form className="flex items-center gap-x-2" action={deleteBoardWithId}>
      <p>Board Title: {title}</p>
      <Button type="submit" size="sm" variant="destructive">
        Delete Board
      </Button>
    </form>
  );
};

export default Board;
