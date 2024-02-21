const membersURL = 'https://mscopa.github.io/wdd230/chamber/data/members.json';

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

    members.companies.forEach(company => {
        console.log(company);
    });
    
}