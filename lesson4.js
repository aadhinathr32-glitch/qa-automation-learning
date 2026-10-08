function waitOneSecond(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Test completed");
        },  1000);
    });
}
async function main(){
    console.log("Starting test...");
    let result = await waitOneSecond();
    console.log(result);
}
main();