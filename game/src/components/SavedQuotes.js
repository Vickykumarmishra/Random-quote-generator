import React from 'react';

const SavedQuotes = ({ quotes }) => {
  return (
    <div>
      <h2>Saved Quotes</h2>
      {quotes.length === 0 ? (
        <p>No saved quotes</p>
      ) : (
        quotes.map((quote, index) => (
          <div key={index} style={styles.card}>
            <p style={styles.quote}>{quote}</p>
          </div>
        ))
      )}
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    backgroundColor: '#e9ecef',
  },
  quote: {
    fontStyle: 'italic',
  },
};

export default SavedQuotes;
