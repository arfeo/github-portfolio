# github-portfolio

A self-hosted portfolio engine based on a public GitHub profile.

Live example: http://arfeo.net

![Interface](http://arfeo.net/static/github-portfolio/interface.png)

## Installation

Simply clone the project to wherever you want it to be hosted.

### API base url

For some technical reasons, the GitHub API has the limit for incoming requests. In case your page is intended to be very popular, you might want to use your own endpoint with the GitHub API via `client_id` and `client_secret`.

For this purpose the constructor optional parameter `api` is provided.
