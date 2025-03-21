// Select the monkey element
const monkey = document.getElementById('monkey');
let climbing = false;
const climbHeight = '300px';
const climbDuration = 2000; // in milliseconds

if (monkey) {
    // Add a click event listener to the monkey
    monkey.addEventListener('click', () => {
        if (!climbing) {
            climbing = true;
            monkey.style.transition = `bottom ${climbDuration / 1000}s ease-in-out`;
            monkey.style.bottom = climbHeight; // Monkey climbs up
            setTimeout(() => {
                monkey.style.bottom = '10px'; // Monkey climbs down
                setTimeout(() => {
                    climbing = false;
                }, climbDuration);
            }, climbDuration);
        }
    });
}