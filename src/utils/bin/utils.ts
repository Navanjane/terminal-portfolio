import { getMainColor } from "@/api"
import { gigaChad, gun } from "@/data/art"

import packageJson from "../../../package.json"
import { isMobile } from "../isMobile"
import * as bin from "./index"

export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(", ")
  const _isMobile = isMobile()

  let message = `Available commands:\n${commands}`

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

// export const sudo = async (args: string[]): Promise<string> => {
//   setTimeout(function () {
//     // window.open("https://youtu.be/homwfyuurUY")
//     // audio in public folder
//     // const audio = new Audio("/assets/BaonCikadap.mp3")
//     // audio.play()
//   }, 1000)

//   return `Permission denied: unable to run the command '${args[0]}' as root.`
// }

export const repo = async (args?: string[]): Promise<string> => {
  setTimeout(function () {
    window.open("https://github.com/Marj4n/terminal-portfolio", "_blank")
  }, 1000)

  return "Opening repository..."
}

// export const donate = async (args?: string[]): Promise<string> => {
//   setTimeout(function () {
//     window.open(packageJson.funding.url, "_blank")
//   }, 1000)

//   return "Opening donation url..."
// }

// export const vim = async (args?: string[]): Promise<string> => {
//   return "nvim is much better than vim. Try 'nvim' instead."
// }

// export const nvim = async (args?: string[]): Promise<string> => {
//   return "nvim is not installed. Try 'sudo apt install nvim'."
// }

// export const nano = async (args?: string[]): Promise<string> => {
//   return "Nano is for noobs. Try 'vim' instead."
// }

// export const code = async (args?: string[]): Promise<string> => {
//   return `${gun}\nWhat do you think this is? Visual Studio Code? Try 'vim' instead.`
// }

// export const notepad = async (args?: string[]): Promise<string> => {
//   return `${gigaChad}`
// }

export const banner = (args?: string[]): string => {
  const mainColor = getMainColor()
  const desktopBanner = `
                        ooMMMMMMMooo
                       oMMMMMMMMMMMMoo
                      MMMMMMMMMMMMMMo"MMMo
                     "MMMMMMMMMMMMMMMMMMMMM
                     MMMMMMMMMMMMMMMMMMMMMMo
                     MMMM""MMMMMM"o" MMMMMMM
                     MMo o" MMM"  oo ""MMMMM
                     MM MMo MMM" MMoM "MMMMM
                     MMo"M"o" "" MMM" oMMMMM"
                     oMM M  o" " o "o MMMMMM"
                     oM"o " o "  o "o MMMMMMM
                     oMMoM o " M M "o MMMM"MMo
                      Mo " M "M "o" o  MMMoMMMo                  Navanjane Terminal v${packageJson.version}
                     MMo " "" M "       MMMMMMMo        
                   oMM"   "o o "         MMMMMMMM                Type 'help' to see list of available commands.
                  MMM"                    MMMMMMMMo
                oMMMo                     "MMMMMMMMo
               MMMMM o             "  " o" "MMMMMMMMMo
              MMMMM          "            " "MMMMMMMMMo
             oMMMM                          ""MMMMMMMMMo
            oMMMM         o         o         MMoMMMMMMM
            MMMM               o              "MMMMMMMMMM
           MMMM"     o    o             o     "MMMMMMMMMMo
         oMMMMM                                MMMMMMMMMMo
         MMM"MM                               "MMM"MMMMMMM
         MMMMMM           "      o   "         MMMMMMMMMMM
         "o  "ooo    o                     o o"MMMMMMMMoM"
        " o "o "MMo       "                o"  MMMMMMMM"
    o "o" o o "  MMMo                     o o""""MMMM"o" "
 " o "o " o o" "  MMMMoo         "       o "o M"" M "o " "
 "o o"  " o o" " " "MMMM"   o              M o "o" o" o" " o
 M  o M "  o " " " " MM""           o    oMo"o " o o "o " "o "
 o"  o " "o " " M " " o                MMMMo"o " o o o o" o o" "
 o" "o " o " " o o" M "oo         ooMMMMMMM o "o o o " o o o "
 M "o o" o" "o o o " o"oMMMMMMMMMMMMMMMMMMMo" o o "o "o o"
  "" "o"o"o"o o"o "o"o"oMMMMMMMMMMMMMMMMMMo"o"o "o o"oo"
        "" M Mo"o"oo"oM"" "               MMoM M M M
               """ """                      " """ "`
//   const desktopBanner = `  ⠀⢀⣒⠒⠆⠤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//   ⢠⡛⠛⠻⣷⣶⣦⣬⣕⡒⠤⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//   ⡿⢿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣳⠖⢋⣩⣭⣿⣶⡤⠶⠶⢶⣒⣲⢶⣉⣐⣒⣒⣒⢤⡀⠀⠀⠀⠀⠀⠀⠀
//   ⣿⠀⠉⣩⣭⣽⣶⣾⣿⢿⡏⢁⣴⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠉⠙⠲⢭⣯⣟⡿⣷⣘⠢⡀⠀⠀⠀⠀⠀
//   ⠹⣷⣿⣿⣿⣿⣿⢟⣵⠋⢠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣾⣦⣾⣢⠀⠀⠀⠀
//   ⠀⠹⣿⣿⣿⡿⣳⣿⠃⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⠟⠀⠀⠀⠀
//   ⠀⠀⠹⣿⣿⣵⣿⠃⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⡄⠀⠀⠀⠀⠀
//   ⠀⠀⠀⠈⠛⣯⡇⠛⣽⣦⣿⠀⠀⠀⠀⢀⠔⠙⣄⠀⠀⠀⠀⠀⠀⣠⠳⡀⠀⠀⠀⠀⢿⡵⡀⠀⠀⠀⠀
//   ⠀⠀⠀⠀⣸⣿⣿⣿⠿⢿⠟⠀⠀⠀⢀⡏⠀⠀⠘⡄⠀⠀⠀⠀⢠⠃⠀⠹⡄⠀⠀⠀⠸⣿⣷⡀⠀⠀⠀
//   ⠀⠀⠀⢰⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⢸⠒⠤⢤⣀⣘⣆⠀⠀⠀⡏⢀⣀⡠⢷⠀⠀⠀⠀⣿⡿⠃⠀⠀⠀
//   ⠀⠀⠀⠸⣿⣿⠟⢹⣥⠀⠀⠀⠀⠀⣸⣀⣀⣤⣀⣀⠈⠳⢤⡀⡇⣀⣠⣄⣸⡆⠀⠀⠀⡏⠀⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠁⠁⠀⢸⢟⡄⠀⠀⠀⠀⣿⣾⣿⣿⣿⣿⠁⠀⠈⠙⠙⣯⣿⣿⣿⡇⠀⠀⢠⠃⠀⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⠀⠀⠇⢨⢞⢆⠀⠀⠀⡿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⣿⣿⣿⡿⡇⠀⣠⢟⡄⠀⠀⠀⠀⠀ Navanjane Terminal v${packageJson.version}
//   ⠀⠀⠀⠀⠀⠀⡼⠀⢈⡏⢎⠳⣄⠀⡇⠙⠛⠟⠛⠀⠀⠀⠀⠀⠀⠘⠻⠛⢱⢃⡜⡝⠈⠚⡄⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⠘⣅⠁⢸⣋⠈⢣⡈⢷⠇⠀⠀⠀⠀⠀⣄⠀⠀⢀⡄⠀⠀⣠⣼⢯⣴⠇⣀⡀⢸⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⠀⠈⠳⡌⠛⣶⣆⣷⣿⣦⣄⣀⠀⠀⠀⠈⠉⠉⢉⣀⣤⡞⢛⣄⡀⢀⡨⢗⡦⠎⠀⠀⠀ Type 'help' to see list of available commands.
//   ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠪⣿⠁⠀⠐⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠉⠁⢸⠀⠀⠀⠄⠙⡆⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠚⡉⢳⡄⠡⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠁⣠⣧⣤⣄⣀⡀⡰⠁⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⢀⠔⠉⠀⠀⠀⠀⢀⣧⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣅⡀⠀⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⢸⠆⠀⠀⠀⣀⣼⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⠁⣠⠖⠒⠒⠛⢿⣆⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⠀⠑⠤⠴⠞⢋⣵⣿⢿⣿⣿⣿⣿⣿⣿⠗⣀⠀⠀⠀⠀⠀⢰⠇⠀⠀⠀⠀⢀⡼⣶⣤⠀⠀
//   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠟⢛⣿⠀⠙⠲⠽⠛⠛⠵⠞⠉⠙⠳⢦⣀⣀⡞⠀⠀⠀⠀⡠⠋⠐⠣⠮⡁⠀
//   ⠀⠀⠀⠀⠀⠀⠀⢠⣎⡀⢀⣾⠇⢀⣠⡶⢶⠞⠋⠉⠉⠒⢄⡀⠉⠈⠉⠀⠀⠀⣠⣾⠀⠀⠀⠀⠀⢸⡀
//   ⠀⠀⠀⠀⠀⠀⠀⠘⣦⡀⠘⢁⡴⢟⣯⣞⢉⠀⠀⠀⠀⠀⠀⢹⠶⠤⠤⡤⢖⣿⡋⢇⠀⠀⠀⠀⠀⢸⠀
//   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠵⠗⠺⠟⠖⢈⡣⡄⠀⠀⠀⠀⢀⣼⡤⣬⣽⠾⠋⠉⠑⠺⠧⣀⣤⣤⡠⠟⠃ 
//   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠷⠶⠦⠶⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
// --
// Type 'repo' to see the source code of this terminal portfolio.🌟
// <span style="color:${mainColor}">New</span> 'spotify' to see what I'm listening to.🎧
// --
// `

//   const mobileBanner = `  ⠀⢀⣒⠒⠆⠤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//   ⢠⡛⠛⠻⣷⣶⣦⣬⣕⡒⠤⢀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
//   ⡿⢿⣿⣿⣿⣿⣿⡿⠿⠿⣿⣳⠖⢋⣩⣭⣿⣶⡤⠶⠶⢶⣒⣲⢶⣉⣐⣒⣒⣒⢤⡀⠀⠀⠀⠀⠀⠀⠀
//   ⣿⠀⠉⣩⣭⣽⣶⣾⣿⢿⡏⢁⣴⠿⠛⠉⠁⠀⠀⠀⠀⠀⠀⠉⠙⠲⢭⣯⣟⡿⣷⣘⠢⡀⠀⠀⠀⠀⠀
//   ⠹⣷⣿⣿⣿⣿⣿⢟⣵⠋⢠⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠻⣿⣿⣾⣦⣾⣢⠀⠀⠀⠀
//   ⠀⠹⣿⣿⣿⡿⣳⣿⠃⠀⣼⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢻⣿⣿⣿⠟⠀⠀⠀⠀
//   ⠀⠀⠹⣿⣿⣵⣿⠃⠀⠀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣷⡄⠀⠀⠀⠀⠀
//   ⠀⠀⠀⠈⠛⣯⡇⠛⣽⣦⣿⠀⠀⠀⠀⢀⠔⠙⣄⠀⠀⠀⠀⠀⠀⣠⠳⡀⠀⠀⠀⠀⢿⡵⡀⠀⠀⠀⠀
//   ⠀⠀⠀⠀⣸⣿⣿⣿⠿⢿⠟⠀⠀⠀⢀⡏⠀⠀⠘⡄⠀⠀⠀⠀⢠⠃⠀⠹⡄⠀⠀⠀⠸⣿⣷⡀⠀⠀⠀
//   ⠀⠀⠀⢰⣿⣿⣿⣿⡀⠀⠀⠀⠀⠀⢸⠒⠤⢤⣀⣘⣆⠀⠀⠀⡏⢀⣀⡠⢷⠀⠀⠀⠀⣿⡿⠃⠀⠀⠀
//   ⠀⠀⠀⠸⣿⣿⠟⢹⣥⠀⠀⠀⠀⠀⣸⣀⣀⣤⣀⣀⠈⠳⢤⡀⡇⣀⣠⣄⣸⡆⠀⠀⠀⡏⠀⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠁⠁⠀⢸⢟⡄⠀⠀⠀⠀⣿⣾⣿⣿⣿⣿⠁⠀⠈⠙⠙⣯⣿⣿⣿⡇⠀⠀⢠⠃⠀⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⠀⠀⠇⢨⢞⢆⠀⠀⠀⡿⣿⣿⣿⣿⡏⠀⠀⠀⠀⠀⣿⣿⣿⡿⡇⠀⣠⢟⡄⠀⠀⠀⠀⠀ 
//   ⠀⠀⠀⠀⠀⠀⡼⠀⢈⡏⢎⠳⣄⠀⡇⠙⠛⠟⠛⠀⠀⠀⠀⠀⠀⠘⠻⠛⢱⢃⡜⡝⠈⠚⡄⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⠘⣅⠁⢸⣋⠈⢣⡈⢷⠇⠀⠀⠀⠀⠀⣄⠀⠀⢀⡄⠀⠀⣠⣼⢯⣴⠇⣀⡀⢸⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⠀⠈⠳⡌⠛⣶⣆⣷⣿⣦⣄⣀⠀⠀⠀⠈⠉⠉⢉⣀⣤⡞⢛⣄⡀⢀⡨⢗⡦⠎⠀⠀⠀ 
//   ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠑⠪⣿⠁⠀⠐⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠉⠁⢸⠀⠀⠀⠄⠙⡆⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠚⡉⢳⡄⠡⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣏⠁⣠⣧⣤⣄⣀⡀⡰⠁⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⢀⠔⠉⠀⠀⠀⠀⢀⣧⣠⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣅⡀⠀⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⢸⠆⠀⠀⠀⣀⣼⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠟⠋⠁⣠⠖⠒⠒⠛⢿⣆⠀⠀⠀⠀
//   ⠀⠀⠀⠀⠀⠀⠑⠤⠴⠞⢋⣵⣿⢿⣿⣿⣿⣿⣿⣿⠗⣀⠀⠀⠀⠀⠀⢰⠇⠀⠀⠀⠀⢀⡼⣶⣤⠀⠀
//   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠟⢛⣿⠀⠙⠲⠽⠛⠛⠵⠞⠉⠙⠳⢦⣀⣀⡞⠀⠀⠀⠀⡠⠋⠐⠣⠮⡁⠀
//   ⠀⠀⠀⠀⠀⠀⠀⢠⣎⡀⢀⣾⠇⢀⣠⡶⢶⠞⠋⠉⠉⠒⢄⡀⠉⠈⠉⠀⠀⠀⣠⣾⠀⠀⠀⠀⠀⢸⡀
//   ⠀⠀⠀⠀⠀⠀⠀⠘⣦⡀⠘⢁⡴⢟⣯⣞⢉⠀⠀⠀⠀⠀⠀⢹⠶⠤⠤⡤⢖⣿⡋⢇⠀⠀⠀⠀⠀⢸⠀
//   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠵⠗⠺⠟⠖⢈⡣⡄⠀⠀⠀⠀⢀⣼⡤⣬⣽⠾⠋⠉⠑⠺⠧⣀⣤⣤⡠⠟⠃ 
//   ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠷⠶⠦⠶⠞⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

// Marjan Terminal v${packageJson.version}
// Type 'help' to see list of available commands.
// --
// Type 'repo' to see the source code of this terminal portfolio.🌟
// <span style="color:${mainColor}">New</span> 'spotify' to see what I'm listening to.🎧
// --
// `

  // return window.innerWidth > 768 ? desktopBanner : mobileBanner
  return desktopBanner;
}
