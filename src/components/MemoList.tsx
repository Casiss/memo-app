import React from 'react';

interface MemoListProps {
  memos: string[];
  onDeleteMemo: (index: number) => void;
}

const MemoList: React.FC<MemoListProps> = ({ memos, onDeleteMemo }) => {
  return (
    <ul className="memo-list">
      {memos.map((memo, index) => (
        <li key={index} className="memo-item">
          <span>{memo}</span>
          <button onClick={() => onDeleteMemo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default MemoList;
