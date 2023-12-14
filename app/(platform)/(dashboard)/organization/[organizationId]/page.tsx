import { createBoard } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Board from "./board";

async function OrganizationIdPage() {
  const boards = await db.board.findMany();
  return (
    <div>
      <form action={createBoard}>
        <input
          type="text"
          name="title"
          id="title"
          required
          placeholder="Enter a board title"
          className="border-black border p-1"
        />
        <Button type="submit">Create Board</Button>
      </form>

      <div className="space-y-2">
        {boards.map((board) => (
          <Board key={board.id} title={board.title} id={board.id} />
        ))}
      </div>
    </div>
  );
}

export default OrganizationIdPage;
