// When the generate button is clicked
document.querySelector('.randomize').addEventListener('click', function() {
    // Get the custom name and unit from the HTML elements
    const customName = document.getElementById('customname').value.trim();
    const unit = document.querySelector('input[name="ukus"]:checked').value;

    // Generate the story based on the custom name and unit
    const story = generateStory(customName, unit);

    // Show the story in the HTML element
    document.querySelector('.story').textContent = story;
    document.querySelector('.story').style.visibility = 'visible';
});

// Function to generate the story
function generateStory(customName, unit) {
    const temperature = unit === 'us' ? 94 : Math.round(94 * 9/5 + 32);
    const weight = unit === 'us' ? 300 : Math.round(300 * 14.574);
    const storyText = `It was ${temperature} ${unit} outside, so Willy the Goblin went for a walk. When they got to the soup kitchen, they stared in horror for a few moments, then turned into a slug and crawled away. ${customName} saw the whole thing, but was not surprised Willy the Goblin weighs ${weight} pounds, and it was a hot day.`;
    return storyText;
}
