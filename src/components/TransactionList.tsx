import React from 'react';
import '../styles.css'; // Import your CSS file for styling (if needed)

interface Transaction {
  id: string;
  description: string;
  amount: number;
  date: Date;
}

interface TransactionListProps {
  transactions: Transaction[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <h3>Transactions</h3>
      <table>
        <thead>
          <tr>
            <th>Transaction Name</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.description}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.date ? transaction.date.toLocaleDateString() : 'No date'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionList;
