let contact = {
    name: "Eric Harris",
    address: "4929 Heritage Crossing Drive SouthWest",
    city: "Powder Springs",
    state: "Georgia",
    zip: "30127"
}

function printContact(myInfo) {
    console.log(myInfo.name)
    console.log(myInfo.address)
    console.log(myInfo.city + ", " + myInfo.state + " " + myInfo.zip)
}

printContact(contact);
