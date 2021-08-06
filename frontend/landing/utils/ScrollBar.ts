export const scrollBarStyle = () => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '12px',
      'background-color': '#FFFFFF9C',
    },
    '*::-webkit-scrollbar-track': {
      'background-color': '#FFFFFF9C',
    },
    '*::-webkit-scrollbar-track:hover': {
      'background-color': '#f4f4f4',
    },
    '*::-webkit-scrollbar-thumb': {
      'background-color': '#babac0',
      'border-radius': '12px',
      border: '3px solid #fff',
    },
    '*::-webkit-scrollbar-thumb:hover': {
      'background-color': '#a0a0a5',
      border: '3px solid #f4f4f4',
    },
  },
});
