let debounceTimeout;
export const debounceAsync = (duration = 600) => {
    clearTimeout(debounceTimeout);

    return new Promise(resolve => {
        debounceTimeout = setTimeout(() => resolve(), duration);
    });
}