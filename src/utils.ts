interface Transaction {
    id: string;
    description: string;
    amount: number;
    date: Date;
  }
  
  export const getTransactions = (): Transaction[] => {
    const transactions = localStorage.getItem('transactions');
    return transactions ? JSON.parse(transactions) : [];
  };
  
  export const saveTransactions = (transactions: Transaction[]) => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  };
  