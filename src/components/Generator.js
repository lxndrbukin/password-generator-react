import { useState } from 'react';

export default function Generator() {
  const [num, setNum] = useState(5);
  const [password, setPassword] = useState('');
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-?/><,.;:{[]}';
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

  const generate = () => {
    const combination = [];
    for (let i = 0; i < num; i++) {
      combination.push(chars.charAt(Math.floor(Math.random() * chars.length)));
    }
    setPassword(combination.join(''));
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
        <button onClick={generate}>Generate</button>
      </div>
      <div>
        <input value={password} type='text' />
      </div>
    </div>
  );
}
