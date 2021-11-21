import React from 'react';
import PropTypes from 'prop-types';
import Big from 'big.js';

export default function Form({onSubmit, currentUser}) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset id="fieldset">
        <p className="mt-0">Welcome, {currentUser.accountId}!</p>
        <p className="highlight">
          <label htmlFor="message">Message:</label>
          <input
            autoComplete="off"
            autoFocus
            id="message"
            required
          />
        </p>
        <p>
          <label htmlFor="donation">Donation (optional):</label>
          <input
            autoComplete="off"
            defaultValue={'0'}
            id="donation"
            max={Big(currentUser.balance).div(10 ** 24)}
            min="0"
            step="0.01"
            type="number"
          />
          <span title="NEAR Tokens">Ⓝ</span>

          <span className="right">
            <label htmlFor="rate">Rate Us:</label>
            <select name="rate" id="rate">
              <option value="Excellent">Excellent</option>
              <option value="Perfect">Perfect</option>
              <option value="Just Fine">Just Fine</option>
            </select>
          </span>
        </p>
        <button type="submit" className="btn-primary">
          Send Feedback
        </button>
      </fieldset>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({
    accountId: PropTypes.string.isRequired,
    balance: PropTypes.string.isRequired
  })
};
