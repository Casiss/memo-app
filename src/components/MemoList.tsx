import React, { useState } from 'react';

interface MemoListProps {
  memos: string[];
  onDeleteMemo: (index: number) => void;
  onEditMemo: (index: number, updatedMemo: string) => void;
}

const MemoList: React.FC<MemoListProps> = ({ memos, onDeleteMemo, onEditMemo }) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState<string>('');

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setEditingValue(memos[index]);
  };

  const saveEditing = () => {
    if (editingIndex !== null && editingValue.trim()) {
      onEditMemo(editingIndex, editingValue);
      setEditingIndex(null);
      setEditingValue('');
    }
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setEditingValue('');
  };

  return (
    <ul className="memo-list">
      {memos.map((memo, index) => (
        <li key={index} className="memo-item">
          {editingIndex === index ? (
            <>
              <input
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button onClick={saveEditing}>Save</button>
              <button onClick={cancelEditing}>Cancel</button>
            </>
          ) : (
            <>
              <span>{memo}</span>
              <button onClick={() => startEditing(index)}>Edit</button>
              <button onClick={() => onDeleteMemo(index)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MemoList;
