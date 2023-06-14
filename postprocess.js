import { readJSON, writeJSON} from 'https://deno.land/x/flat@0.0.14/mod.ts' 

const filename = Deno.args[0] 
const json = await readJSON(filename)
console.log(json)

// Step 2: Filter specific data we want to keep and write to a new JSON file
let year = date_ob.getFullYear();

const userName = Object.values(json.user_name); 
const surnaName = Object.values(json.surnaname); 
const yearOfWork = year - Object.values(json.recruitment_year); 

const data = {
    userName,
    surnaName,
    yearOfWork,
  };


// Step 3. Write a new JSON file with our filtered data
const newFilename = `team-core-postprocessed.json` // name of a new file to be saved
await writeJSON(newFilename, data) // create a new JSON file with just the Bitcoin price
console.log("Wrote a post process file")
