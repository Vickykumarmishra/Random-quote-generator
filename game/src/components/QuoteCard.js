import React from 'react';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div style={styles.card}>
      <p style={styles.quote}>{quote}</p>
      
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '12px',
    padding: '20px',
    margin: '20px auto',
    maxWidth: '400px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  quote: {
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '16px',
    fontSize: '1.2em',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, transform 0.3s',
  },
  buttonHover: {
    backgroundColor: '#218838',
    transform: 'scale(1.1)',
  },
};

// Adding hover effects using React state
const QuoteCardWrapper = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isButtonHovered, setIsButtonHovered] = React.useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <QuoteCard
        {...props}
        onSave={() => {
          props.onSave(props.quote);
          setIsButtonHovered(false);
        }}
      />
      <button
        style={{
          ...styles.button,
          ...(isButtonHovered ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}
        onClick={() => props.onSave(props.quote)}
      >
        Save to List
      </button>


      
    </div>
  );
};

export default QuoteCardWrapper;
