let is_ok = true;

function customFetch(time, task) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (is_ok) {
                resolve(task);
            } else {
                reject("Error in the customFetch :(");
            }
        }, time);
    });
}

export default customFetch;