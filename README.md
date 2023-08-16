### Project title

bookMyShow (frontEnd Part)

### Project features

This is the frontend part of bookmyshow backend project with the primary objective of facilitating movie bookings through predetermined slots and corresponding seat types and numbers. Users can effortlessly choose their preferred movie slot and seats based on their requirements, followed by confirming the booking by clicking the 'Book' button. To ensure accuracy, a 'Reset' button is provided to clear the form. In the event that a user attempts to book a movie without specifying crucial details like movie name, time slot, or seat type and count, an alert message will promptly notify them to rectify their selections. Upon successful booking submission with valid information, a POST request is dispatched to record the movie details in a MongoDB Atlas database. Simultaneously, the response received is stored in the local storage. Initially, when no data is present in local storage, the UI will exhibit a message indicating the absence of prior bookings. However, once a booking is made, the relevant data will be dynamically showcased on the UI.

## Tech Stacks used 

- React:            JavaScript library for building user interfaces.
- JavaScript:       Programming language for web development.
- CSS:              Style language for web page design.
- JSX:              Syntax extension for React components.
- npm:              Node Package Manager for installing libraries.
- React-icons:      Library for customizable icons.
- React-slick:      Carousel component for React.
- slick-carousel:   Official package for Slick carousel.

## React Components 

- Navbar
- hidepanel
- BookingPage
- LastBookingDisplay
    - LastBooking
    - NoBookingDisplay
- BookMovie
    - SeatInput
    - Spinner     

## dependencies 

- react-icons (^4.10.1)
 - Library providing a comprehensive collection of icons for React components.

- react-slick (^0.29.0)
 - Carousel component for React applications, enabling the creation of image sliders.

- slick-carousel (^1.8.1)
 - The official package for the Slick carousel component, which enhances the display of image galleries and content sliders in React projects.

 ## build

 - npm run build

 ## deploy 

 - npm run deploy

 ## Temporary Data Storage 

 - LocalStorage

 # for deployment 

 - gh-pages 