import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {currentYear} Sva prava zadržana.</p>
      </div>
    </footer>
  );
};

export default Footer;
