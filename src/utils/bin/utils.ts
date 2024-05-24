import { getMainColor } from "@/api"
import { gigaChad, gun } from "@/data/art"

import packageJson from "../../../package.json"
import { isMobile } from "../isMobile"
import * as bin from "./index"

export const help = async (args: string[]): Promise<string> => {
  // const commands = Object.keys(bin).sort().join(", ")
  const commands = Object.keys(bin).sort().join("\n")
  const _isMobile = isMobile()

  let message = `Available commands:\n \n${commands}`

  if (!_isMobile) {
    message +=
      "\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command."
  }

  return message
}

export const echo = async (args: string[]): Promise<string> => {
  return args.join(" ")
}

export const whoami = async (args: string[]): Promise<string> => {
  return "guest"
}

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString()
}

export const website = async (args: string[]): Promise<string> => {
  setTimeout(function () {
    window.open("https://nivekts.me", "_blank")
  }, 1000)

  return "Opening website version..."
}

export const email = async (args: string[]): Promise<string> => {
  window.open("mailto:kevinyf.ts@gmail.com")

  return "Opening email..."
}



export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open("https://github.com/Marj4n/terminal-portfolio", "_blank")
  }, 1000)

  return "Opening repository..."
}



export const banner = (args?: string[]): string => {
  const mainColor = getMainColor()
  const desktopBanner = `  /$$   /$$                                     /$$$$$$$$                                /$$                     /$$
  | $$$ | $$                                    |__  $$__/                               |__/                    | $$
  | $$$$| $$  /$$$$$$  /$$    /$$ /$$$$$$          | $$  /$$$$$$   /$$$$$$  /$$$$$$/$$$$  /$$ /$$$$$$$   /$$$$$$ | $$
  | $$ $$ $$ |____  $$|  $$  /$$/|____  $$         | $$ /$$__  $$ /$$__  $$| $$_  $$_  $$| $$| $$__  $$ |____  $$| $$
  | $$  $$$$  /$$$$$$$ \  $$/$$/  /$$$$$$$         | $$| $$$$$$$$| $$  \__/| $$ \ $$ \ $$| $$| $$  \ $$  /$$$$$$$| $$
  | $$\  $$$ /$$__  $$  \  $$$/  /$$__  $$         | $$| $$_____/| $$      | $$ | $$ | $$| $$| $$  | $$ /$$__  $$| $$
  | $$ \  $$|  $$$$$$$   \  $/  |  $$$$$$$         | $$|  $$$$$$$| $$      | $$ | $$ | $$| $$| $$  | $$|  $$$$$$$| $$
  |__/  \__/ \_______/    \_/    \_______/         |__/ \_______/|__/      |__/ |__/ |__/|__/|__/  |__/ \_______/|__/
  
  Navanjane Terminal v${packageJson.version}
  
  Type 'help' to see list of available commands.
  Type 'about' to read about me.

  Credits to the original author:- <a target="_blank" href="https://github.com/Marj4n/terminal-portfolio"  <b>https://github.com/Marj4n/terminal-portfolio</b> </a>

  `
  return desktopBanner;
}
