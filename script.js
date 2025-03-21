// Select the monkey element
const monkey = document.getElementById('monkey');
const treeContainer = document.querySelector('.tree-container');
const climbHeight = treeContainer ? `${treeContainer.offsetHeight - 50}px` : '350px'; // Adjust for monkey height
const climbDuration = 2000; // Duration of the climb in milliseconds
let isClimbing = false; // Prevent multiple clicks during animation

if (!monkey) {
    console.warn('Monkey element not found!');
}

if (!treeContainer) {
    console.error('Tree container not found! Using default climb height.');
}

if (monkey) {
    // Add a click event listener to the monkey
    monkey.addEventListener('click', () => {
        console.log('Monkey clicked!'); // Debugging log
        if (isClimbing) return; // Prevent re-triggering while climbing

        alert('Monkey climbing!'); // Placeholder for sound
        isClimbing = true; // Set climbing state
        monkey.style.transition = `bottom ${climbDuration / 1000}s ease-in-out`;
        monkey.style.bottom = climbHeight; // Monkey climbs up

        // Wait for the climb up to finish
        setTimeout(() => {
            monkey.style.bottom = '10px'; // Monkey climbs back down

            // Wait for the climb down to finish
            setTimeout(() => {
                isClimbing = false; // Reset climbing state
            }, climbDuration);
        }, climbDuration);
    });
}