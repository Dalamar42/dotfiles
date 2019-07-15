# Visual Studio Code Remote - Containers

The **Remote - Containers** extension lets you use a [Docker container](https://docker.com) as a full-featured development environment. Containers make a great development environment because you can:

- Develop with a consistent and easily reproducible toolchain and on the same operating system you are deploying to.
- Quickly swap between different, isolated development environments and safely make updates without worrying about impacting your local machine.
- Make it easy for new team members / contributors to get up and running in a consistent development environment.

The extension starts (or attaches to) a development container running a well defined tool and runtime stack. Workspace files are mounted into the container from the local file system, or copied or cloned into it once the container is running. Extensions are installed and run inside the container where they have full access to the tools, platform, and file system.

You then work with VS Code as if everything were running locally on your machine, except now they are isolated inside a container.

![Remote Dev Container](https://microsoft.github.io/vscode-remote-release/images/remote-containers-readme.gif)

## System Requirements

**Local:** Docker Desktop 2.0+ for macOS/Windows or Docker CE/EE 18.06+ and Docker Compose 1.21+ for Linux. Docker Toolbox and Ubuntu snap packages are not supported. For Windows, Windows 10 Professional or Enterprise is required due to the requirements of Docker Desktop or Windows. See the minimum requirements for [VS Code](https://code.visualstudio.com/docs/supporting/requirements) for additional details.

**Containers**:

- **Full support:** x86_64 Debian 8+, Ubuntu 16.04+, CentOS / RHEL 7+ based containers.

- **Experimental support:** x86_64 Alpine Linux containers in [VS Code Insiders](https://code.visualstudio.com/insiders/) only.

Other `glibc` based Linux containers may work if they have [needed prerequisites](https://aka.ms/vscode-remote/linux).

While experimental `musl` based Alpine Linux support is available in [VS Code - Insiders](https://code.visualstudio.com/insiders/), some extensions installed in the container may not work due to `glibc` dependencies in native code inside the extension. See the [Remote Development and Linux](https://aka.ms/vscode-remote/linux) article for details.

## Installation

To get started, follow these steps:

1. Install [VS Code](https://code.visualstudio.com/) or [VS Code Insiders](https://code.visualstudio.com/insiders/) and this extension.

2. Install and configure [Docker](https://www.docker.com/get-started) for your operating system.

   **Windows / macOS:**
    1. Install [Docker Desktop for Mac/Windows](https://www.docker.com/products/docker-desktop). (Docker Toolbox is not currently supported.)
    2. Right-click on the Docker task bar item and update **Settings / Preferences > Shared Drives / File Sharing** with any source code locations you want to open in a container. If you hit trouble, see [here](https://aka.ms/vscode-remote/containers/troubleshooting) for tips on avoiding common problems with sharing.
    3. **Windows:** Consider adding a `.gitattributes` file to your repos or disabling automatic line ending conversion for Git on the **Windows side** by using a command prompt to run: `git config --global core.autocrlf input` If left enabled, this setting can cause files that you have not edited to appear modified due to line ending differences. See [tips and tricks](https://aka.ms/vscode-remote/containers/troubleshooting/crlf) for details.

    **Linux:**
    1. Follow the [Docker CE/EE install instructions for your distribution](https://docs.docker.com/install/#supported-platforms). *The Ubuntu Snap package is not supported*.
    2. Add your user to the `docker` group by using a terminal to run: `sudo usermod -aG docker $USER` Sign out and back in again so this setting takes effect.

## Getting started

Check out one of the following quick starts to get going:

- [Try a development container](https://aka.ms/vscode-remote/containers/getting-started/try) - Use a sample application to see the benefits of working inside a container.
- [Open an existing folder in a container](https://aka.ms/vscode-remote/containers/getting-started/open) - Start working with an existing project folder inside a container in a few easy steps. Works with both container and non-container deployed projects.
- [Attach to a running container](https://aka.ms/vscode-remote/containers/getting-started/attach) - Attach to a running container for quick edits, debugging, and triaging.

## Available commands

Another way to learn what you can do with the extension is to browse the commands it provides. Press `F1` to bring up the Command Palette and type in `Remote-Containers` for a full list of commands.

![Command palette](https://microsoft.github.io/vscode-remote-release/images/remote-command-palette.png)

You can also click on the Remote "Quick Access" status bar item to get a list of the most common commands.

![Quick actions status bar item](https://microsoft.github.io/vscode-remote-release/images/remote-dev-status-bar.png)

For more information, please see the [extension documentation](https://aka.ms/vscode-remote/containers).

## Questions, Feedback, Contributing

Have a question or feedback?

- See the [documentation](https://aka.ms/vscode-remote) or the [troubleshooting guide](https://aka.ms/vscode-remote/troubleshooting).
- [Up-vote a feature or request a new one](https://aka.ms/vscode-remote/feature-requests), search [existing issues](https://aka.ms/vscode-remote/issues), or [report a problem](https://aka.ms/vscode-remote/issues/new).
- Contribute a [development container definition](https://aka.ms/vscode-dev-containers) for others to use
- Contribute to [our documentation](https://github.com/Microsoft/vscode-docs)
- ...and more. See our [CONTRIBUTING](https://aka.ms/vscode-remote/contributing) guide for details.

Or connect with the community...

[![Twitter](https://microsoft.github.io/vscode-remote-release/images/Twitter_Social_Icon_24x24.png)](https://aka.ms/vscode-remote/twitter) [![Stack Overflow](https://microsoft.github.io/vscode-remote-release/images/so-image-24x24.png)](https://stackoverflow.com/questions/tagged/vscode) [![VS Code Dev Community Slack](https://microsoft.github.io/vscode-remote-release/images/Slack_Mark-24x24.png)](https://aka.ms/vscode-dev-community) [![VS CodeGitter](https://microsoft.github.io/vscode-remote-release/images/gitter-icon-24x24.png)](https://gitter.im/Microsoft/vscode)

## Telemetry

Visual Studio Code Remote - Containers and related extensions collect telemetry data to help us build a better experience working remotely from VS Code. We only collect data on which commands are executed. We do not collect any information about image names, paths, etc. The extension respects the `telemetry.enableTelemetry` setting which you can learn more about in the [Visual Studio Code FAQ](https://aka.ms/vscode-remote/telemetry).

## License

By downloading and using the Visual Studio Remote - Containers extension and its related components, you agree to the product [license terms](https://go.microsoft.com/fwlink/?linkid=2077057) and [privacy statement](https://www.microsoft.com/en-us/privacystatement/EnterpriseDev/default.aspx).
