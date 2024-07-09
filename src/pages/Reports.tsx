import React from 'react';

const Reports: React.FC = () => {
  return (
    <div className="page-content">
      <h2>Reports</h2>
      <p>This is the Reports page. Here, you can view various financial reports and summaries.</p>
      <div className="report">
        <h3>Monthly Summary</h3>
        <p>Here you can see the summary of your transactions for the current month.</p>
      </div>
      <div className="report">
        <h3>Yearly Summary</h3>
        <p>Here you can see the summary of your transactions for the current year.</p>
      </div>
      <div className="report">
        <h3>Category Breakdown</h3>
        <p>Here you can see the breakdown of your expenses by category.</p>
      </div>
    </div>
  );
}

export default Reports;
