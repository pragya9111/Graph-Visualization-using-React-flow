import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Undo2, Redo2 } from 'lucide-react';
import { RootState } from '../types';
import { undo, redo } from '../store/actions';

const UndoRedoControls: React.FC = () => {
  const dispatch = useDispatch();
  const { past, future } = useSelector((state: RootState) => state.graph);

  return (
    <div className="flex gap-2">
      <button
        onClick={() => dispatch(undo())}
        disabled={past.length === 0}
        className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50"
      >
        <Undo2 size={20} />
      </button>
      <button
        onClick={() => dispatch(redo())}
        disabled={future.length === 0}
        className="p-2 bg-white rounded-lg shadow hover:bg-gray-50 disabled:opacity-50"
      >
        <Redo2 size={20} />
      </button>
    </div>
  );
};

export default UndoRedoControls