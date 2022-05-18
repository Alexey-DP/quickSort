const quickSort = (arrey) => {
    if(arrey.length < 2) {
        return arrey;
    }
    const midIndex = Math.floor(arrey.length / 2);
    const left = [], right = [], mid = [];

    arrey.forEach(item => {
        if (item < arrey[midIndex]) {
            left.push(item);
        } else if (item > arrey[midIndex]) {
            right.push(item);
        } else if (item == arrey[midIndex]) {
            mid.push(item);
        }
    });

    return [...quickSort(left), ...mid, ...quickSort(right)];
};