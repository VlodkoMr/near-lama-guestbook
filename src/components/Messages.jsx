import React from 'react';
import PropTypes from 'prop-types';

export default function Messages({messages}) {
  return (
    <>
      <div className="messages-list">
        <h2>Messages</h2>
        <div className="cards">
          {messages.map((message, i) =>
            <div key={i} className={message.premium ? 'is-premium' : ''}>
              <div className="text-center username">
                <strong>{message.sender}</strong>
              </div>

              <div className="text">{message.text}</div>

              <div className="footer">
                <span title="Block Height">#{message.timestamp}</span>
                <span>Rate: <b>{message.rate}</b></span>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

Messages.propTypes = {
  messages: PropTypes.array
};
