# README — My Pokémon Searcher

## What is this?

This is my **Pokémon search tool**. You type in a Pokémon’s name, hit “Search,” and the page shows all the important info about that Pokémon: picture, type, size, stats, and more.  
I connected it to the [PokéAPI](https://pokeapi.co/) so it pulls live data straight from the source.

## How does it work?

- You enter a Pokémon’s name in the input box (in English, like “pikachu”).  
- When you click the Search button, the site fetches data from the API.  
- If the Pokémon exists, it displays all the info in the “Pokémon Card” section.  
- If it doesn’t find anything, it shows an error alert and hides the card.

## Why did I make this?

I wanted to learn how to work with external APIs, handle promises and async/await in JS, and update the DOM dynamically based on the data. Plus, I wanted it to look clean and cool because style matters.

## What could be better?

- Input validation — right now it tries to fetch no matter what you type.  
- A loading animation so users know data is coming.  
- Show even more Pokémon info like abilities or evolutions.  
- Make it mobile-friendly for phones and tablets.

## How do I run it?

1. Save all files (HTML, CSS, JS, font, icon) in the same folder.  
2. Open `index.html` in your browser.  
3. Type a Pokémon’s name and hit “Search.”

## Anything else?

I’m proud of this project because it does exactly what I wanted — fetch live API data and show it in a nice style. Maybe I’ll add favorites or a mini game around it later. We’ll see!
