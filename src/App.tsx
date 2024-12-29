import { useState, useEffect } from 'react';
import MemoInput from './components/MemoInput';
import MemoList from './components/MemoList';
import { getMemos, saveMemos } from './utils/storage';
import './styles/App.css';

function App() {
  const [memos, setMemos] = useState<string[]>([]);

  useEffect(() => {
    setMemos(getMemos());
  }, []);

  const addMemo = (newMemo: string) => {
    const updatedMemos = [newMemo, ...memos];
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
  };

  const deleteMemo = (index: number) => {
    const updatedMemos = memos.filter((_, i) => i !== index);
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
  };

  const editMemo = (index: number, updatedMemo: string) => {
    const updatedMemos = memos.map((memo, i) => (i === index ? updatedMemo : memo));
    setMemos(updatedMemos);
    saveMemos(updatedMemos);
  };

  return (
    <div className="App">
      <h1>Memo App</h1>
      <MemoInput onAddMemo={addMemo} />
      <MemoList memos={memos} onDeleteMemo={deleteMemo} onEditMemo={editMemo} />
    </div>
  );
}

export default App;
