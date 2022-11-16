# EpiMac - Fleet - 

[![ci](https://github.com/gastbob40/epimac-fleet-front/actions/workflows/ci.yml/badge.svg)](https://github.com/gastbob40/epimac-fleet-front/actions/workflows/ci.yml)

> **Warning**
> This app is a work in progress. I'm building this in public.
> See the roadmap below.

## Demo

## About this project

This project is for managing a fleet of iMacs. This project is the result of the discontinuation of MacOs Server development
It is currently in development and use for the Apple room of [EPITA school](https://www.epita.fr/) by [EpiMac](https://epimac.org/).

## Features

This application aims to manage Macs with a simple interface. It allows us to:
- Get the status of the Macs
- Make action on them (restart, shutdown, unlock remotely, logout, ...)
- Manage application on all Macs by batch (install, uninstall, update, ...)
- Manage the configuration of the Macs (set the wallpaper according rules, the screensaver, ...)
- Manage the accounts on the Macs
- And more...

## Roadmap

- [ ] Auth system
  - [x] ~~Middleware to check if user is logged in~~
  - [x] ~~Login page~~
  - [x] ~~Logout~~
  - [x] ~~Register page~~
  - [ ] Connection for Apple / CRI
  - [ ] User page
- [ ] Fleet management
  - [x] ~~List of Macs with status~~
  - [ ] Detailed view of a Mac
    - [x] ~~Overview (software, hardware, daemon...)~~
    - [ ] Applications
    - [ ] Task status
    - [ ] Actions
      - [ ] Awake mac
      - [ ] Unlock mac
      - [ ] Restart mac
      - [ ] Logout mac
  - [ ] Batch management
    - [ ] Actions
        - [ ] Awake mac
        - [ ] Unlock mac
        - [ ] Restart mac
        - [ ] Logout mac
    - [ ] Applications
      - [ ] Install
      - [ ] Uninstall
      - [ ] Update
  - [ ] Map of Macs (using room disposition)

## Running locally

1. Install dependencies using Yarn:

```sh
yarn
```

2. Copy `.env.example` to `.env.local` and update the variables.

3. Start the development server:

```sh
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
