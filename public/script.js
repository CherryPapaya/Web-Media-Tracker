// const fs = require('fs').promises;
// const path = require('path');
// const filePath = path.join(__dirname, 'list.json');

// (async () => {
//     const list = await fileReader(filePath);
//     console.log(JSON.stringify(list, null, 2));
//     console.log(list[0].title)
// })();

// async function fileReader(filePath) {
//     try {
//         const jsonString = await fs.readFile(filePath, 'utf-8', );
//         return JSON.parse(jsonString)

//     } catch (error) {
//         console.log('Error: ' + error);
//     }

// }

document.getElementById('submit-button').addEventListener('click', () => {
    const title = document.getElementById('title').value.trim();
    const year = document.getElementById('year').value.trim();
    const person = document.getElementById('person').value.trim();
    const description = document.getElementById('description').value.trim();

    console.log(`${title}\n${year}\n${person}\n${description}\n`)
})

// document.getElementById('hello-btn').addEventListener('click', () => {
//     console.log("General Kenobi")
// })

// fs.writeFile(filePath, 'Testing', (err) => {
//     try
//     {
//         console.log('Write successful');
//     } catch (err)
//     {
//         console.log(err);
//     }
// });