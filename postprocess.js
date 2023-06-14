import { readJson, writeJson} from 'https://deno.land/x/jsonfile/mod.ts' 

const filename = Deno.args[0] 
const json = await readJson(filename)

const date_ob = new Date();
const year = date_ob.getFullYear();

const remappedArray = [];

for (const item of data) {
    const userName = item.user_name; 
    const surnaName = item.surnaname; 
    const yearOfWork = year - item.recruitment_year; 

    const data = {
        userName,
        surnaName,
        yearOfWork,
      };
    
      remappedArray.push(data);
  }




// Step 3. Write a new JSON file with our filtered data
const newFilename = `team-core-postprocessed.json` // name of a new file to be saved
await writeJson(newFilename, remappedArray) // create a new JSON file with just the Bitcoin price
console.log("Wrote a post process file")
