// Initialize the map centered on Algeria
const map = L.map('map').setView([28.0339, 1.6596], 6);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Form submission handler
document.getElementById('reportForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const eventType = document.getElementById('eventType').value;
    const location = document.getElementById('location').value;
    const description = document.getElementById('description').value;

    try {
        const response = await fetch('/report', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ eventType, location, description })
        });

        if (response.ok) {
            alert('Événement signalé avec succès!');
            // Here you would add the event to the map
            // For now, we'll just log it
            console.log('Event reported:', { eventType, location, description });
        }
    } catch (error) {
        console.error('Error reporting event:', error);
    }
});
