const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://recipesnfitness.com/",
      "title": "Recipes and Fitness",
      "description": "Wordpress backend on React Frontend"
    }
  },
  "packages": [
    {
      name: "my-first-theme"
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://recipesnfitness.com/"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
