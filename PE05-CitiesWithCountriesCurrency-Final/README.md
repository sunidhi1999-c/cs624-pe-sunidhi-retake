# Input

The application accepts two forms of data. The Add City tab collects a city name and its country, while the Add Country tab collects a country name and its currency. Both forms use controlled TextInput components. Empty submissions are rejected and users receive a message requesting the missing information.

# Process

When a valid form is submitted, the application creates an object with a unique identifier and appends it to the correct state array. React then rerenders the affected screen. A bottom tab navigator connects Cities, Add City, Countries, and Add Country. The Cities area also retains stack navigation, allowing a selected city to open its detail screen and store locations.

# Output

The Cities tab displays every saved city with its country. The Countries tab displays every saved country with its currency. Empty lists show centered messages instead of blank screens. Successful submissions clear the fields and automatically open the appropriate list tab.
