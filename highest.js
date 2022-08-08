const phones = [
    { name: "xamei", camera: '23 Mpx', Ram: "4gb", storate: "32gb", price: 18999, color: "white" },
    { name: "htc", camera: '23 Mpx', Ram: "4gb", storate: "32gb", price: 42999, color: "white" },
    { name: "oppo", camera: '23 Mpx', Ram: "4gb", storate: "32gb", price: 50999, color: "white" },
    { name: "iphone", camera: '23 Mpx', Ram: "4gb", storate: "32gb", price: 82999, color: "white" },
   
];
function highestPhonePrice(phones) {
    highestPhone = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i]
        if (phone.price > highestPhone.price) {
            highestPhone = phone;
        }



    }
    return highestPhone;

}
const mySeceltion = highestPhonePrice(phones)
console.log(mySeceltion)