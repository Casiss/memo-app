import { useState, useEffect } from 'react';
import MemoInput from './components/MemoInput';
import MemoList from './components/MemoList';
import { getMemos, saveMemos } from './utils/storage';
import './styles/App.css';

function App() {
  const [memos, setMemos] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); // 検索クエリの状態
  const [filteredMemos, setFilteredMemos] = useState<string[]>([]); // フィルタリングされたメモ

  useEffect(() => {
    const savedMemos = getMemos();
    setMemos(savedMemos);
    setFilteredMemos(savedMemos); // 初期状態では全てのメモを表示
  }, []);

  useEffect(() => {
    // 検索クエリに基づいてメモをフィルタリング
    setFilteredMemos(
      memos.filter((memo) =>
        memo.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, memos]);

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
      <input
        type="text"
        placeholder="Search memos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
      <MemoInput onAddMemo={addMemo} />
      <MemoList memos={filteredMemos} onDeleteMemo={deleteMemo} onEditMemo={editMemo} />
    </div>
  );
}

export default App;
