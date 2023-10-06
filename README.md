# "Movies Evan Likes" Kata

## Setup

There are two different ways you can run this code kata: either locally by downloading and running Caddy yourself, or by spinning up a Docker container.

NOTE: In either case, ensure that port `1234` is free.

NOTE: The start script has been tested on macOS & Linux systems: you're on your own if you're using Windows.

NOTE: The provided start script relies on `zsh`; if you don't have it installed on your system, you may need to run the commands contained in the start script yourself.

### Option 1: Local

1.  [Download Caddy](https://caddyserver.com/docs/download).
2.  Run the start script.

    ```sh
    ./start
    ```

    If `caddy` is not in your `PATH`, provide the environment variable `CADDY_PATH` to tell the start script where to find it.

    ```sh
    CADDY_PATH=/path/to/caddy ./start
    ```

### Option 2: Docker

1.  Build & run the docker container using the start script.

    ```sh
    ./start --docker
    ```

---

Visit `http://localhost:1234` to get started.
