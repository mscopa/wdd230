const membersURL = 'https://mscopa.github.io/wdd230/chamber/data/members.json';
const grid = document.getElementById('grid');
const table = document.getElementById('simple');
const cards = document.querySelector('.cards');
const simple = document.querySelector('.simple');

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        if (response.ok) {
            const data = await response.json();
            displayMembers(data);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

getMembers();

function displayMembers(members) {
    const cards = document.querySelector('.cards');
    members.companies.forEach(company => {
        const card = document.createElement('section');
        const icon = document.createElement('img');
        const address = document.createElement('p');
        const phone = document.createElement('p');
        const website = document.createElement('a');
        icon.setAttribute("width", "100");
        icon.setAttribute("height", "100");
        icon.src = company.icon;
        address.textContent = company.address;
        phone.textContent = company.phone;
        website.href = company.url;
        website.textContent = company.url;
        card.append(icon, address, phone, website);
        cards.appendChild(card);
    });

    const tbody = document.createElement('tbody');
    members.companies.forEach(company => {
        const tr = document.createElement('tr');
        const name = document.createElement('td')
        const address = document.createElement('td');
        const phone = document.createElement('td');
        const website = document.createElement('td');
        name.textContent = company.name;
        address.textContent = company.address;
        phone.textContent = company.phone;
        website.href = company.url;
        website.textContent = company.url;
        tr.append(name, address, phone, website);
        tbody.appendChild(tr);
    });
    simple.appendChild(tbody);
}


table.addEventListener('click', function() {
    table.disabled = true;
    grid.disabled = false;
    simple.style.display = 'block';
    cards.style.display = 'none';
})

grid.addEventListener('click', function() {
    grid.disabled = true;
    table.disabled = false;
    cards.style.display = 'grid';
    simple.style.display = 'none';
})