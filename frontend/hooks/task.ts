import React from 'react';

export const useTask = (action, autoFire = false) => {
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [isActive, setIsActive] = React.useState(autoFire);

  const trigger = () => setIsActive(true);

  React.useEffect(() => {
    (async () => {
      if (isActive) {
        try {
          setValue(await action());
          setError(null);
        } catch (err) {
          setError(err);
          setValue(null);
        }
        setIsActive(false);
      }
    })();
  }, [isActive]);

  return { value, error, trigger, isActive };
};
