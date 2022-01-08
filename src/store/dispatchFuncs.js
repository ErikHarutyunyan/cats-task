export const setCategory = (category) => {
  return {
    type: 'SET_CATEGORY',
    payload: category,
  };
};

export const handleCategory = (id) => {
  return {
    type: 'TAKE_ID',
    payload: id,
  };
};

export const handleContent = () => {
  return { type: 'PAGE_CHANGE' };
};

export const handleMemory = (data) => {
  return { type: 'DATA_CHANGE', payload: data };
};

export const dataReset = () => {
  return { type: 'DATA_RESET' };
};
