import * as fs from "fs"
import { json2xml } from "xml-js"
let veh = []
for (let i = 1; i <= 3; i++) {
  const veh1 = fs.readFileSync(`vehicles_${i}_data.json`, "utf8")
  const json_ = JSON.parse(veh1)["vehicles"]
  const arr = Object.assign(json_)
  arr.forEach(function (item, i) {
    veh.push(item)
    item["pilots"] = { pilot: item["pilots"] }
    item["films"] = { film: item["films"] }
    console.log(item)
  })
}
// console.log(veh)
// veh["name"] = "vehicle"
let json = { vehicle: veh }
// console.log(json)
const xml = json2xml({ vehicles: json }, { compact: true, spaces: 4 })

fs.writeFileSync("vehicles.xml", xml, "utf8")
