const delay = (ms) => {
    return new Promise (resolve => setTimeout(resolve, ms));
}
const showMessage = async() => {
    console.log('wait for two sec')
    await delay (2000)
    console.log('2 sec are over');

}
showMessage();

const delay1 = (ms) => new Promise (resolve => setTimeout(resolve,ms))
const showMessage2 = () => {
    console.log('wait for three sec')
     delay1 (3000)
     .then(() => {
        console.log('3 sec are over') 
     });
}
showMessage2();