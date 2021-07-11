# Weekend Challenge: React Gallery

## Description
Full stack photo gallery application that allows users to view and react to photos. This project utilizes React, Node.js, Express, PostgreSQL, HTML, and CSS. This project implements server and client side functionality to create, read, and update items on the server, client, and database. This project was created by [Steve Savstrom](https://www.linkedin.com/in/stevesavstrom/) during Week 10 of the [Full Stack Software Engineering program](https://www.primeacademy.io/courses/engineering#curriculum) at [Prime Digital Academy](https://www.primeacademy.io/).

- Users can view photos and interact by "liking" a photo.
- Likes are update and displayed dynamically on the page.
- Likes are captured in the database and stored permanently.
- Users can click on image to toggle on and off a description of each photo.
- Description is stored in the database and unique to each photo.
- Bright, engaging user interface utilizing responsive CSS flexbox layout.

## Screen Shot
![Screen Shot](/public/images/screenshot.png)

## Technologies Used and Prerequisites
- [React] (https://reactjs.org/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Postico](https://eggerapps.at/postico/)

## Installation
1. Create a SQL database named `react_gallery`.
2. Open your text editor and run `npm install`.
3. Run `npm install pg`in your terminal.
4. Run `npm run server` on Terminal.
5. Run `npm run client` on another Terminal to view React application.

## Usage
Get to know [Steve](https://www.linkedin.com/in/stevesavstrom/) better by viewing and interacting with photos from his life. Learn more about each photo by clicking on the image to toggle on a description. Interact with photos by clicking the "like" button.

## Project Requirements
- [x] Front end experience that allows users to view and interact with photos.
- [x] Use `axios` to retrieve (`GET`) data from `/gallery` and store it in `App.jsx`.
- [x] Create a new component for the `GalleryList` and pass it the gallery data stored in`App` via `props`. `GalleryList` represents the entire gallery of images.
- [x] Iterate (loop over) the list of gallery data.
- [x] Make `GalleryItems` component which represents a single image in the gallery with the ability to click the image to toggle between image and description as well a the ability to like an image.
- [x] Update the `GalleryList` to use this component to display an image.
- [x] Swap the image with the description on click using conditional rendering.
- [x] Display the number of likes for each item and include a like button.
- [x] When the button is clicked, use `Axios` to update (`PUT`)
 the count `/gallery/like/:id`.
- [x] Update the gallery each time a like button is clicked.

## Stretch Goals
- [x] Move the data into a database named `react_gallery.
- [x] Include a `database.sql` file documenting your database tables.
- [ ] Add a form (new component) that allows a user to POST a new gallery item. Client side form (use absolute URLs). Server side route for posting an image.
- [ ] Ability to delete a gallery item.
- [ ] Add styling with Material-UI.
- [ ] Implement Uppy for image upload.
