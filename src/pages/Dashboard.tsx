import React, { useState, useEffect } from 'react';
import TransactionForm from '../components/TransactionForm';
import TransactionList from '../components/TransactionList';
import { getTransactions, saveTransactions } from '../utils';

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: Date; // Adjust Transaction interface
}

const Dashboard: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const storedTransactions = getTransactions();
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);

  const addTransaction = (transaction: Transaction) => {
    const newTransactions = [...transactions, transaction];
    setTransactions(newTransactions);
    saveTransactions(newTransactions);
  };

  return (
    <div className="page-content">
      <h2>Dashboard</h2>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default Dashboard;
