# Input

Part 1 displays a profile with an image, name, occupation, and short biography. Part 2 uses a list of six profiles. The user selects a thumbnail to view its details or selects the expanded card again to close it.

# Process

Both parts render profile information with React Native components and use styles to control the layout, typography, and spacing. Part 2 maps the profile list to reusable cards. A state value tracks the identifier of the expanded card. Selecting a different card changes that identifier, and selecting the same card clears it. A wrapping Flexbox layout lets the cards move onto another row as their sizes change.

# Output

Part 1 shows one complete profile card. Part 2 initially shows six collapsed thumbnails. Expanding a card reveals its occupation and biography while the other cards remain visible. The screenshots document the single card and the gallery before and after a card is expanded.
