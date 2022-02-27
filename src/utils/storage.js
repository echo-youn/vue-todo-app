const box = {
  getItem(key) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = localStorage.getItem(key);
        if (item) {
          try {
            resolve(JSON.parse(item));
          } catch (ex) {
            console.error('Error on parse Json.\n message : ', ex.message);
            reject(ex);
          }
        } else {
          resolve(item);
        }
      }, 1500);
    });
  },
  setItem(key, value) {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
};

export default box;
