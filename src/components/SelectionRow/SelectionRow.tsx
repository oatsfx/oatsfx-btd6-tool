import { EventType } from "types/events";

const SelectionRow = ({
  selectionName,
  selectionId,
  selections,
}: {
  selectionName: string;
  selectionId: string;
  selections: { ids: string[]; name: string; onClickFunction: () => void }[];
}) => {
  return (
    <div className="flex gap-2">
      {selections.map((selection) => (
        <a
          className={
            "py-2 px-2 transition ease-in-out border-b bg-black hover:bg-opacity-70 hover:cursor-pointer hover:text-accent hover:border-b-2" +
            (selection.ids.includes(selectionId)
              ? " bg-black bg-opacity-30 text-primary border-b-2"
              : " bg-opacity-0")
          }
          onClick={() => {
            selection.onClickFunction();
          }}
          key={selection.name}
        >
          {selection.name}
        </a>
      ))}
    </div>
  );
};

export default SelectionRow;
