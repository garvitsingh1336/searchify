<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/jusoftdev/searchify">
    <img src="https://i.imgur.com/20i2IKX.png" alt="Logo">
  </a>

  <h3 align="center">Searchify</h3>

  <p align="center">
    Hosting your own Searchengine was never easier
    <br />
    <a href="https://github.com/jusoftdev/searchify"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://searchify.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/jusoftdev/searchify/issues">Report Bug</a>
    ·
    <a href="https://github.com/jusoftdev/searchify/issues">Request Feature</a><br>&nbsp;
<a href="https://www.buymeacoffee.com/jusoft" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>
 
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#todo">To do</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#contributors">Contributors</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

_Please notice there is a 100 query limit per day for the google api, so don't be confused if there are no results on the public deploy_

Please report inappropriate content that you might be redirected to via a [Github Issue](https://github.com/jusoftdev/searchify/issues/new) with the label `url report` on the repository or create a [pull request](https://github.com/jusoftdev/searchify/pulls) with the label `url report` already having the url removed in the code.

Host your own Google
<img src="https://i.imgur.com/vPdHLGG.png"/>


### Built With

* [Next.js](http://nextjs.org/)
* [TailwindCSS](https://tailwindcss.com)
* [Heroicons](https://heroicons.com)
* [Google Search API](https://developers.google.com/custom-search/v1/overview)


<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Install [Node.js LTS](https://nodejs.org/) (npm is included) and [Git](https://git-scm.com/downloads).

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/jusoftdev/searchify.git
   ```
2. Install dependencies (npm works with the included lockfile)
   ```sh
   npm install --legacy-peer-deps
   ```
3. Create a Google API key in [Google Cloud Console](https://console.cloud.google.com/): create/select a project, enable **Custom Search API**, and create an API key under **APIs & Services / Credentials**. Restrict it to the Custom Search API where possible.
4. Create a Programmable Search Engine at [programmablesearchengine.google.com](https://programmablesearchengine.google.com/). Add a site, then under **Setup** enable **Search the entire web**. Copy its Search engine ID (`cx`).
5. Copy `.env.local.example` to `.env.local` and set `GOOGLE_API_KEY` and `GOOGLE_CSE_ID`. These credentials are read server-side and `.env.local` is ignored by Git. Do not commit real credentials. Revoke the old key previously present in `keys.js` and create a replacement.
6. Run `npm run dev` and open http://localhost:3000. Without credentials or when Google returns an error/quota response, the bundled sample response is shown.

Build (optional): `npm run build`


<!-- USAGE EXAMPLES -->
## Usage

Beautiful responsive design
<img src="https://i.imgur.com/v1gSm5R.png" />
<img src="https://i.imgur.com/Kvu3Eam.png" />
Showing results in an useful way
<img src="https://i.imgur.com/kIaOSie.png" />
Pagination
<img src="https://i.imgur.com/ghpSFcf.png" />
Fully responsive Design <br>
<img src="https://i.imgur.com/ym4XODw.png" />
<img src="https://cdn.discordapp.com/attachments/828176464041476111/868920497113530479/unknown.png" />
<br>
Auto Darkmode<br>
<img src="https://i.imgur.com/C0k2DlZ.png" />



<!-- ROADMAP -->
## Roadmap

See the [open issues](https://github.com/jusoftdev/searchify/issues) for a list of proposed features (and known issues).

<!-- todo -->
## Todo (Sorted by importantness)

* Functionality
* Image Search
* Video Search
* News
* Settings




<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

JuSoft - [@jusoftdev](https://twitter.com/jusoftdev) - [Discord Server](http://jsft.be/discord) - support@jusoft.dev

Project Link: [https://github.com/jusoftdev/searchify](https://github.com/jusoftdev/searchify)



<!-- ACKNOWLEDGEMENTS -->
## Contributors

* [juhom205](https://github.com/juhom205)
* [vKxni](https://github.com/vKxni)


