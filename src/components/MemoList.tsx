import React, { useState } from 'react';

interface Memo {
  text: string;
  timestamp: string;
}

interface MemoListProps {
  memos: Memo[];
  onDeleteMemo: (index: number) => void;
  onEditMemo: (index: number, updatedMemo: string) => void;
}

const MemoList: React.FC<MemoListProps> = ({ memos, onDeleteMemo, onEditMemo }) => {
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState<string>('');

  const startEditing = (index: number) => {
    setEditingIndex(index);
    setEditingValue(memos[index].text);
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
              <button onClick={saveEditing}>保存</button>
              <button onClick={cancelEditing}>キャンセル</button>
            </>
          ) : (
            <>
              <span>{memo.text}</span>
              <span className="timestamp">{memo.timestamp}</span>
              <button onClick={() => startEditing(index)}>編集</button>
              <button onClick={() => onDeleteMemo(index)}>削除</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default MemoList;
