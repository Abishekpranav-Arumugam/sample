const process = (num, callback) => {
    console.log("Processing number...");
    callback(num);
};
const display = (result) => {
    console.log(`Result: ${result}`);
};
process(5, display);