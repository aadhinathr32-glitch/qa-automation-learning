function waitTwoSeconds(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Automation lesson completed");
        }, 2000);
    });
}
async function main(){
    console.log("Starting test...");
    let result = await waitTwoSeconds();
    console.log(result);
}
main();