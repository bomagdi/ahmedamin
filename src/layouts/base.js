/* eslint-disable max-len */
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseLayout = ({ children }) => {
  return (
    <div id="main">
      <Head>
        <title>Ahmed Amin</title>
        <link rel="icon" href="/public/favicon.ico" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          key="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />

        <meta property="og:site_name" content="Ahmed Amin || Accountant" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Ahmed Amin || Accountant" />
        <meta property="og:locale" content="en" />
        <meta
          name="description"
          content="Ahmed Amin is an accountant living in the Eastern Province of Saudi Arabia. He has extensive experience in the field of accounting and always strives to improve financial performance and provide accurate consultations to help companies grow."
        />
        <meta
          name="keywords"
          content="Accountant, Financial Analyst, CPA, Bookkeeping, Tax Preparation, Accounting Software, QuickBooks, Financial Reporting, Accounts Payable, Accounts Receivable, Auditing, Payroll Management, Tax Consultant, Financial Planning, Financial Statements, Budgeting, Forensic Accounting, Tax Filing, Management Accounting, Cost Accounting, IFRS, GAAP, Balance Sheet, Profit and Loss, Accounting Systems Integration, Tax Compliance"
        />
      </Head>
      {children}
    </div>
  );
};

BaseLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default BaseLayout;
