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
        placeholder="Enter your memo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default MemoInput;
