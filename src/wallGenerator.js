import fs from 'fs'
import path from 'path'


const filePath = (name) => path.join('./', `${name}.json`);

const saveJsonFromUrl = async (filePath, jsonData) => {
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), 'utf-8');
};

let walls = [];

function getCellId(col, row ) {
    let alpha = '';
    while (row > 0) {
        row--; // 1-based index 조정
        alpha = String.fromCharCode(65 + (row % 26)) + alpha;
        row = Math.floor(row / 26);
    }
    return `${alpha}${col}`;
}

function asembleWall(row1,col1,row2,col2){
    console.log(row1,col1,row2,col2)
    return getCellId(row1,col1) + '_' + getCellId(row2,col2);
}

const createWallInfo = (wallInfo) => {
    let { row1, col1, row2, col2, len, direction, name } = wallInfo;
    console.log('---------------------------')
    console.log(name ,' 생성 시작')
    const arr = [];
    for (let i = 0; i < len; i++) {
        const wall = asembleWall(row1,col1,row2,col2);
        arr.push(wall);

        row1 = direction === 'row' ? row1 : row1 + 1;
        col1 = direction === 'col' ? col1 : col1 + 1;
        row2 = direction === 'row' ? row2 : row2 + 1;
        col2 = direction === 'col' ? col2 : col2 + 1;

    }
    console.log(arr)
    console.log('---------------------------')
    walls = walls.concat(arr);
}

// // col 방향 벽벽

// const wall2 = {
//     row1:1,
//     col1:14,
//     row2:1,
//     col2:15,
//     len:8,
//     direction:'col',
//     name:'벽2'
// }

// const wall3 = {
//     row1:1,
//     col1:20,
//     row2:1,
//     col2:21,
//     len:8,
//     direction:'col',
//     name:'벽3'
// }

// const wall5 = {
//     row1:1,
//     col1:28,
//     row2:1,
//     col2:29,
//     len:8,
//     direction:'col',
//     name:'벽5'
// }

// const wall6 = {
//     row1:1,
//     col1:34,
//     row2:1,
//     col2:35,
//     len:8,
//     direction:'col',
//     name:'벽6'
// }

// const wall8 = {
//     row1:1,
//     col1:43,
//     row2:1,
//     col2:44,
//     len:38,
//     direction:'col',
//     name:'벽8'
// }

// // row 방향 벽

// const wall1  = {
//     row1:1,
//     col1:8,
//     row2:1,
//     col2:9,
//     len:14,
//     direction:'row',
//     name:'벽1'
// }

// const wall4  = {
//     row1:21,
//     col1:8,
//     row2:21,
//     col2:9,
//     len:8,
//     direction:'row',
//     name:'벽4'
// }

// const wall7  = {
//     row1:34,
//     col1:8,
//     row2:34,
//     col2:9,
//     len:8,
//     direction:'row',
//     name:'벽7'
// }

// const wall10 = {
//     col1:13,
//     col2:14,
//     row1:1,
//     row2:1,
//     direction:'row',
//     name:'벽10',
//     len: 44,
// }

// const wall9 = {
//     name:'벽9',
//     row1:47,
//     col1:19,
//     row2:47,
//     col2:20,
//     len:7,
// }

// const wall = [
//     wall1,
//     wall2,
//     wall3,
//     wall4,
//     wall5,
//     wall6,
//     wall7,
//     wall8,
//     wall9,
//     wall10,
// ]



const wall1 = {
    col1:14,
    col2:15,
    row1:4,
    row2:4,
    direction:'col',
    name:'벽1',
    len: 4,
}

const wall2 = {
    col1:19,
    col2:20,
    row1:4,
    row2:4,
    direction:'col',
    name:'벽2',
    len: 4,
}

const wall3 = {
    col1:15,
    col2:15,
    row1:3,
    row2:4,
    direction:'row',
    name:'벽1',
    len: 4,
}

const wall4 = {
    col1:15,
    col2:15,
    row1:7,
    row2:8,
    direction:'row',
    name:'벽1',
    len: 4,
}

const wallss = [
    wall1,
    wall2,
    wall3,
    wall4,
]

for (const wallInfo of wallss) {
    createWallInfo(wallInfo);
}

saveJsonFromUrl(filePath('container_wall'), walls);