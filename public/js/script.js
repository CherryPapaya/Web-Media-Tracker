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
// document.getElementById('hello').addEventListener('click', () => {
//     console.log("Ahhhh, General Kenobi")
// })

if (document.location.pathname === "/add.html"){
    add();
    helloAgain();

}

if (document.location.pathname === "/index.html") {
    hello();
}

function add() {
    document.getElementById('submit-button').addEventListener('click', () => {
        const title = document.getElementById('title').value.trim();
        const year = document.getElementById('year').value.trim();
        const person = document.getElementById('person').value.trim();
        const description = document.getElementById('description').value.trim();

        console.log(`${title}\n${year}\n${person}\n${description}\n`)
        // console.log(location.pathname)
    })
}

function helloAgain() {
    document.getElementById('hello-again').addEventListener('click', () => {
        console.log("Hello again");
    })
}

function hello(){
    document.getElementById('hello').addEventListener('click', () => {
        console.log("Ahhhhh, General Kenobi");
    });
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