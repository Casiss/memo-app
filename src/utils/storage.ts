const MEMOS_KEY = 'memos';

interface Memo {
  text: string;
  timestamp: string;
}

export const getMemos = (): Memo[] => {
  const storedMemos = localStorage.getItem(MEMOS_KEY);
  return storedMemos ? JSON.parse(storedMemos) : [];
};

export const saveMemos = (memos: Memo[]): void => {
  localStorage.setItem(MEMOS_KEY, JSON.stringify(memos));
};
