//jobs Page

const jobs = [
    {
        id: 1,
        title: "Software Engineer",
        category: "IT",
        location: "New York",
        postDate: "2023-01-15",
        details: "Job description for a software engineer."
    },
    { id: 2, title: "Financial Analyst", category: "Finance", location: "San Francisco", postDate: "2023-02-20", details: "Job description for a financial analyst." },
    { id: 3, title: "Marketing Manager", category: "Marketing", location: "San Francisco", postDate: "2023-04-05", details: "Job description for a marketing manager." }
];

const showColumns = document.querySelector('#showColumns')

function generateCards(data) {

    showColumns.textContent = '';

    for (let i = 0; i < data.length; i++) {


        const col = document.createElement('div');
        col.className = 'col col-md-6';

        const card = document.createElement('div');
        card.className = 'card my-2';

        const cardHeader = document.createElement('h2')
        cardHeader.className = 'card-header'
        cardHeader.textContent = data[i].title;

        card.appendChild(cardHeader);

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const category = document.createElement('p');
        category.className = 'card-text';
        category.innerHTML = `<strong>Category: </strong> ${data[i].category}`;

        const location = document.createElement('p');
        location.className = 'card-text';
        location.innerHTML = `<strong>Location: </strong> ${data[i].location}`;

        const postDate = document.createElement('p');
        postDate.className = 'card-text';
        postDate.innerHTML = `<strong>Post Date: </strong>${data[i].postDate}`

        const detailsBtn = document.createElement('a');
        detailsBtn.textContent = 'Details';
        detailsBtn.href = `jobDetail.html?id=${data[i].id}`
        detailsBtn.className = 'btn btn-primary';

        cardBody.appendChild(category);
        cardBody.appendChild(location);
        cardBody.appendChild(postDate);
        cardBody.appendChild(detailsBtn);
        card.appendChild(cardBody);
        col.appendChild(card);
        showColumns.appendChild(col)


    }
}

generateCards(jobs)