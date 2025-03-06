document.addEventListener('DOMContentLoaded', () => {
    const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayNavItems = document.querySelectorAll('#days-nav li');
    const daySections = document.querySelectorAll('.day-section');

    // Get current day and show corresponding section
    const currentDay = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    const currentDayName = days[currentDay];

    // Function to show selected day section
    function showDaySection(dayName) {
        // Remove active class from all sections and nav items
        daySections.forEach(section => section.classList.remove('active'));
        dayNavItems.forEach(item => item.classList.remove('active'));

        // Add active class to selected section and nav item
        document.getElementById(dayName).classList.add('active');
        document.querySelector(`#days-nav li[data-day="${dayName}"]`).classList.add('active');
    }

    // Add click event listeners to nav items
    dayNavItems.forEach(item => {
        item.addEventListener('click', () => {
            const dayName = item.getAttribute('data-day');
            showDaySection(dayName);
        });
    });

    // Show current day section by default
    showDaySection(currentDayName);

    // Scroll to current day nav item
    const currentDayNav = document.querySelector(`#days-nav li[data-day="${currentDayName}"]`);
    if (currentDayNav) {
        currentDayNav.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}); 