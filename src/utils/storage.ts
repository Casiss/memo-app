const MEMOS_KEY = 'memos';

export const getMemos = (): string[] => {
  const storedMemos = localStorage.getItem(MEMOS_KEY);
  return storedMemos ? JSON.parse(storedMemos) : [];
};

export const saveMemos = (memos: string[]): void => {
  localStorage.setItem(MEMOS_KEY, JSON.stringify(memos));
};
