The solution involves creating a copy of the state object and updating the copy before setting the new state.  This ensures that React detects a change in the object reference and re-renders the component.

```javascript
import React, { useState } from 'react';

function MyComponent() {
  const [count, setCount] = useState({ value: 0 });

  const increment = () => {
    setCount({ ...count, value: count.value + 1 }); // Correct: Creates a new object
  };

  return (
    <div>
      <p>Value: {count.value}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
```