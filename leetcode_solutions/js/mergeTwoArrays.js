var join = function (arr1, arr2) {
  // we use map to store unique objects
  const map = new Map();

  const mergeFunction = (arr) => {
    arr.forEach((item) => {
      const { id } = item;
      if (!map.has(id)) {
        map.set(id, { ...item });
      } else {
        const currItem = map.get(item);
        // we override the array here
        map.set(id, { ...currItem, ...item });
        return currItem;
      }
    });
  };

  mergeFunction(arr1);
  mergeFunction(arr2);

  const joinedArray = Array.from(map.values()).sort((a, b) => a.id - b.id);
  return joinedArray;
};
