import React, { useState } from 'react';

interface MemoInputProps {
  onAddMemo: (memo: string) => void;
}

const MemoInput: React.FC<MemoInputProps> = ({ onAddMemo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onAddMemo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="memo-input">
      <input
        type="text"
        placeholder="メモを入力"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">追加</button>
    </form>
  );
};

export default MemoInput;
