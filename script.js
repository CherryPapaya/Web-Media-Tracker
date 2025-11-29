const fs = require('fs').promises;
const path = require('path');
const filePath = path.join(__dirname, 'list.json');

(async () => {
    const list = await fileReader(filePath);
    console.log(JSON.stringify(list, null, 2));
    // console.log(list[0].title)
})();

async function fileReader(filePath) {
    try {
        const jsonString = await fs.readFile(filePath, 'utf-8', );
        return JSON.parse(jsonString)

    } catch (error) {
        console.log('Error: ' + error);
    }

}

// fs.writeFile(filePath, 'Testing', (err) => {
//     try
//     {
//         console.log('Write successful');
//     } catch (err)
//     {
//         console.log(err);
//     }
// });