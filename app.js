var friends = ['Jesus', 'Barry', 'Mike', 'Miranda', 'Jayden'];
var locations = ['Kitchen', 'Bathroom', 'Loft', 'Master Bedroom', 'Garage', 'Living Room', 'Study', 'Basement', 'Crawlspace', 'Dining Room'];
var weapons = ['Gun', 'Shoerack', 'Chair', 'Magic Missle', 'Serated Dagger', 'Firaga', 'Pikachu', 'Bladed Hat', 'Hidden Blade', 'Bat', 'Kamehameha', 'Stalgmite', 'Baseball', 'TempleOS', 'Car', 'Remote Detonation', 'Stalinium Plated Warvessel', 'Pencil', 'Airbending', 'Magnet'];

for (var i = 0; i < 100; ++i) {
    var h3 = document.createElement('h3');
    h3.innerText = `Accusation ${(i + 1)}`;
    document.body.appendChild(h3);

    var displayMessage = `Accusation ${(i + 1)}: I accuse ${friends[i % friends.length]}, with the ${weapons[i % weapons.length]} in the ${locations[i % locations.length]}!`;

    h3.addEventListener('click', createH3ClickHandler(displayMessage));
}

function createH3ClickHandler(displayMessage) {
    return function () {
        alert(displayMessage);
    }
}