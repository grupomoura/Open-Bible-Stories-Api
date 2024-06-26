# README

## API Overview

This is a Node.js API built with Express that serves Bible stories and video synopses. The API supports CORS and has endpoints for fetching various Bible stories and synopses in JSON format.

## Installation

To install and run this API, follow these steps:

1. Clone the repository:
   ```sh
   git clone git@github.com:grupomoura/openBibleStoriesApi.git
   ```

2. Navigate to the project directory:
   ```sh
   cd openBibleStoriesApi
   ```

3. Install the dependencies:
   ```sh
   npm install
   ```

4. Start the server:
   ```sh
   npm start
   ```

The server will start on port 3000 by default. You can change the port by setting the `PORT` environment variable.

## Endpoints

### Video Stories (Old Version)

- `GET /videoStories`: Returns all video stories.
- `GET /videoStories/oldTestment`: Returns Old Testament video stories.
- `GET /videoStories/newTestment`: Returns New Testament video stories.

### Video Overviews (New Version)

- `GET /videosOverview`: Returns all video overviews.
- `GET /videosOverview/oldTestment`: Returns Old Testament video overviews.
- `GET /videosOverview/newTestment`: Returns New Testament video overviews.

### Synopses Overview

- `GET /sinopsesOverview`: Returns all synopses overviews.
- `GET /sinopsesOverview/theBook`: Returns the book overview.
- `GET /sinopsesOverview/oldTestment`: Returns Old Testament synopses overview.
  - `GET /sinopsesOverview/oldTestment/gen`: Returns Genesis synopses overview.
  - `GET /sinopsesOverview/oldTestment/exo`: Returns Exodus synopses overview.
  - `...` (Include all other Old Testament books endpoints similarly)
- `GET /sinopsesOverview/newTestment`: Returns New Testament synopses overview.
  - `GET /sinopsesOverview/newTestment/mat`: Returns Matthew synopses overview.
  - `GET /sinopsesOverview/newTestment/mrk`: Returns Mark synopses overview.
  - `...` (Include all other New Testament books endpoints similarly)

### Illustrated Bible Stories

- `GET /stories`: Returns all illustrated Bible stories.
- `GET /stories/1`: Returns story 1.
- `GET /stories/2`: Returns story 2.
- `...` (Include all other stories endpoints similarly up to 50)

## Example Request

To fetch all video stories, you can use the following curl command:
```sh
curl -X GET http://localhost:3000/videoStories
```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to modify this README to suit your project's needs. This is just a starting point to document your API endpoints and usage.
