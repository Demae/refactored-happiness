const jsonData = 'json/metro.json';

function searchData() {
    const input = document.getElementById('searchInput').value.trim();
    console.log(`Searching for: ${input}`);

    fetch(jsonData)
        .then(response => response.json())
        .then(data => {
            const results = Object.entries(data).filter(([key, value]) =>
                key === input
            ).map(entry => entry[1]);

            console.log('Filtered results:', results);

            if (results.length === 0) {
                displayNoResultsFound();
            } else {
                displayResults(results.map(result => [input, result]));
            }
        })
        .catch(error => {
            console.error('Error loading the JSON:', error);
            displayError(error);
        });
}

function displayResults(results) {
    const container = document.getElementById('resultsContainer');
    const image = document.getElementById('image');
    container.innerHTML = '';
    results.forEach(([key, item]) => {
        document.getElementById('image').src = `${item.picture}`;
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="data-container">
                <p><strong>Registration:</strong> ${item.registration}</p>
                <p><strong>Chassis:</strong> ${item.chassis}</p>
                <p><strong>VIN:</strong> ${item.vin}</p>
                <p><strong>Body:</strong> ${item.body}</p>
                <p><strong>Body No:</strong> ${item.body_no}</p>
                <p><strong>Body Date:</strong> ${item.body_date}</p>
                <p><strong>Seating:</strong> ${item.seating}</p>
                <p><strong>Livery:</strong> ${item.livery}</p>
                <p><strong>Depot:</strong> ${item.depot}</p>
                <p><strong>Operator:</strong> ${item.operator}</p>
            </div>
        `;
        container.appendChild(div);
    });
}

function displayNoResultsFound() {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = '<p>No results found.</p>';
}

function displayError(error) {
    const container = document.getElementById('resultsContainer');
    container.innerHTML = `<p>Error loading data: ${error.message}</p>`;
}