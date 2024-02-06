
const jobs = [
    { id: 1, title: "Software Engineer", category: "IT", location: "New York", postDate: "2023-01-15", details: "Job description for a software engineer." },
    { id: 2, title: "Financial Analyst", category: "Finance", location: "San Francisco", postDate: "2023-02-20", details: "Job description for a financial analyst." },
    { id: 3, title: "Marketing Manager", category: "Marketing", location: "San Francisco", postDate: "2023-04-05", details: "Job description for a marketing manager." }
];


function getUrlId() {
    const url = new URL(window.location.href)
    return url.searchParams.get('id')
}

const urlId = parseInt(getUrlId());

const showCard = document.querySelector('#showCard');

function generateJobDetailsCard(data) {
    for (let i = 0; i < data.length; i++) {
        if (urlId === data[i].id) {

            const card = document.createElement('div');
            card.className = 'card col-md-6';

            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';

            const titleAndDateContainer = document.createElement('div')
            titleAndDateContainer.className = 'd-flex justify-content-between'

            const jobTitle = document.createElement('h5');
            jobTitle.className = 'card-text';
            jobTitle.innerHTML = `${data[i].title}`

            const postDate = document.createElement('p')
            postDate.className = 'card-text float-end';
            postDate.innerHTML = `Post Date: ${data[i].postDate}`;

            titleAndDateContainer.appendChild(jobTitle);
            titleAndDateContainer.appendChild(postDate);

            const category = document.createElement('p');
            category.className = 'card-text';
            category.innerHTML = `<strong>Category: </strong>${data[i].category}`;

            const location = document.createElement('p');
            location.className = 'card-text';
            location.innerHTML = `<strong>Location: </strong>${data[i].location}`

            const details = document.createElement('p');
            details.className = 'card-text';
            details.innerHTML = `<strong>Details: </strong>${data[i].details}`

            cardBody.appendChild(titleAndDateContainer);
            cardBody.appendChild(category);
            cardBody.appendChild(location);
            cardBody.appendChild(details);

            card.appendChild(cardBody);

            showCard.appendChild(card)

        }
    }
}
generateJobDetailsCard(jobs)