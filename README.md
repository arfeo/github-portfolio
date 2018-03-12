# github-portfolio

A self-hosted portfolio engine based on a public GitHub profile. Written in vanilla ES6, no dependencies needed.

Ready to be deployed to https://pages.github.com/

Live example: http://arfeo.net

![Interface](http://arfeo.net/static/github-portfolio/interface.png)

## Installation

Clone the project to wherever you want it to be hosted.

In `app.js`:

* Change the `globals.author` property to your GitHub login.
* If you want some repos to be hidden in the projects list, add their names to the `globals.exceptions` array.
* To disable `Author`, `Bio`, `Projects`, `Starred` and/or `Copyright` blocks, change appropriate properties of the `globals.disabled` from `false` to `true`.

You are ready now.

### API base url

For some technical reasons, the GitHub API has the limit for incoming requests. In case your page is intended to be very popular, you might want to use your own endpoint with the GitHub API via `client_id` and `client_secret`.

For this purpose `globals.api` property is provided.
