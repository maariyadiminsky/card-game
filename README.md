# Card Game

### Details

Game works like so:

1. Assuming a standard deck (52 cards of 4 suits: ♣ Clubs, ♦ Diamonds, ♥ Hearts, ♠ Spades).
2. Press a "Deal" button to deal 5 random cards.
3. Pressing the button again should deal 5 unique, random cards. Within the same game, you should never get the same cards again that you got in the past (just like a physical deck).
4. Card counter which shows how many cards are left.
5. Ace counter which shows how many aces are left.
6. Button to reset the game.
7. When all the aces have been dealt, "Game Over" should be displayed.
8. If there is an ace in the last draw and there are no more cards left to deal, "Winner" should display, otherwise "You Lose. Better luck next time!" will display. Last draw means the last draw that is allowed, as there could be additional cards left to deal, but no aces.
9. Animations.

- React
- Tailwind
- Tests

### Getting Started

    yarn install

Then:

    yarn start

Your browser will automatically open to http://localhost:3000 by Create React App. Changes should be reflected automatically.

See [CRA documentation](https://facebook.github.io/create-react-app/).

### Run tests

    yarn test
