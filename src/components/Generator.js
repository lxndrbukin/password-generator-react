import { useState } from 'react';

export default function Generator() {
  const [num, setNum] = useState(5);
  const minus = () => {
    if (num > 5) {
      setNum(num - 1);
    } else {
      setNum(5);
    }
  };

  const plus = () => {
    if (num < 16) {
      setNum(num + 1);
    } else {
      setNum(16);
    }
  };

  return (
    <div>
      <h1>Generate a random password</h1>
      <div>
        <div>
          <input type='button' onClick={minus} value='-' />
          <input type='number' min={5} max={16} value={num} />
          <input type='button' onClick={plus} value='+' />
        </div>
        <button>Generate</button>
      </div>
      <div>
        <input type='text' />
      </div>
    </div>
  );
}
