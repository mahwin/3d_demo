import fs from "fs";
import path from "path";

const filePath = (name) => path.join("./src", `${name}`);

const saveJsonFromUrl = async (filePath, jsonData) => {
  fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), "utf-8");
};

const rowLen = 16;
const colLen = 21;

function getCellId(row, col) {
  let alpha = "";
  while (row > 0) {
    row--; // 1-based index 조정
    alpha = String.fromCharCode(65 + (row % 26)) + alpha;
    row = Math.floor(row / 26);
  }
  return `${alpha}${col}`;
}

const fmsType = {
  RACK: "rack",
  CRAC: "crac",
  BATTERY: "battery",
  UPS: "ups",
};

const grid = {
  [fmsType.RACK]: { rowGrid: 2, colGrid: 1 },
  [fmsType.CRAC]: { rowGrid: 1, colGrid: 2 },
  [fmsType.BATTERY]: { rowGrid: 1, colGrid: 2 },
  [fmsType.UPS]: { rowGrid: 1, colGrid: 2 },
};

const DIRECTION = {
  동: "E",
  서: "W",
  남: "S",
  북: "N",
};

// function main(newPath) {
//   // const origin = fs.readFileSync(filePath(oldPath), 'utf-8');
//   const origin = [];

//   for (let r = 1; r <= rowLen; r++) {
//     for (let c = 1; c <= colLen; c++) {
//       const cellInfo = {
//         cellId: getCellId(r, c),
//         originId: null,
//       };
//       origin.push(cellInfo);
//     }
//   }
//   // #region 랙 정보 설정
//   const rackInfo = [
//     { row: 4, col: 16 },
//     { row: 7, col: 16 },
//     { row: 10, col: 16 },
//     { row: 13, col: 16 },
//     { row: 16, col: 16 },
//     { row: 19, col: 16 },
//     { row: 22, col: 16 },
//     { row: 25, col: 16 },
//     { row: 28, col: 16 },
//     { row: 31, col: 16 },
//     { row: 34, col: 16 },
//     { row: 37, col: 16 },
//     { row: 40, col: 16 },
//   ];

//   for (let i = 0; i < 13; i++) {
//     const { row, col } = rackInfo[i];
//     for (let j = 1; j < 20; j++) {
//       rackInfo.push({ row: row, col: col + j });
//     }
//   }

//   const rackIds = rackInfo.map((rack) => getCellId(rack.row, rack.col));

//   // 랙 정보 추가
//   for (let r = 1; r <= rowLen; r++) {
//     for (let c = 1; c <= colLen; c++) {
//       const cellId = getCellId(r, c);

//       if (!rackIds.includes(cellId)) continue;

//       const originIdx = origin.findIndex((cell) => {
//         return cell.cellId === cellId;
//       });

//       origin[originIdx] = {
//         cellId: cellId,
//         originId: cellId,
//         ...grid[fmsType.RACK],
//         fmsType: fmsType.RACK,
//         direction: "W",
//       };

//       for (let addR = 0; addR < grid[fmsType.RACK].rowGrid; addR++) {
//         for (let addC = 0; addC < grid[fmsType.RACK].colGrid; addC++) {
//           const nextR = r + addR;
//           const nextC = c + addC;
//           const nextCellId = getCellId(nextR, nextC);
//           const nextOriginIdx = origin.findIndex(
//             (cell) => cell.cellId === nextCellId
//           );
//           origin[nextOriginIdx] = {
//             ...origin[nextOriginIdx],
//             originId: cellId,
//           };
//         }
//       }
//     }

//     // #endregion

//     // #region HCS 정보 설정
//     const hcs = [
//       { row: 5, col: 13 },
//       { row: 11, col: 13 },
//       { row: 17, col: 13 },
//       { row: 23, col: 13 },
//       { row: 29, col: 13 },
//       { row: 35, col: 13 },

//       { row: 5, col: 38 },
//       { row: 11, col: 38 },
//       { row: 17, col: 38 },
//       { row: 23, col: 38 },
//       { row: 29, col: 38 },
//       { row: 35, col: 38 },
//     ];

//     const hcsCellIds = hcs.map((hc) => getCellId(hc.row, hc.col));

//     const downHcs = hcs.slice(0, 6).map((hc) => getCellId(hc.row, hc.col));

//     for (let r = 1; r <= rowLen; r++) {
//       for (let c = 1; c <= colLen; c++) {
//         const cellId = getCellId(r, c);

//         if (!hcsCellIds.includes(cellId)) continue;

//         const originIdx = origin.findIndex((cell) => {
//           return cell.cellId === cellId;
//         });

//         // return;
//         origin[originIdx] = {
//           cellId: cellId,
//           originId: cellId,
//           ...grid[fmsType.CRAC],
//           fmsType: fmsType.CRAC,
//           direction: downHcs.includes(cellId) ? "N" : "S",
//         };

//         for (let addR = 0; addR < grid[fmsType.CRAC].rowGrid; addR++) {
//           for (let addC = 0; addC < grid[fmsType.CRAC].colGrid; addC++) {
//             const nextR = r + addR;
//             const nextC = c + addC;
//             const nextCellId = getCellId(nextR, nextC);
//             const nextOriginIdx = origin.findIndex(
//               (cell) => cell.cellId === nextCellId
//             );
//             origin[nextOriginIdx] = {
//               ...origin[nextOriginIdx],
//               originId: cellId,
//             };
//           }
//         }
//       }
//     }
//     // #endregion

//     // #region 배터리 정보

//     const batteries = [
//       { row: 47, col: 3 },
//       { row: 48, col: 3 },
//       { row: 49, col: 3 },
//       { row: 50, col: 3 },

//       { row: 48, col: 26 },
//       { row: 49, col: 26 },
//       { row: 60, col: 26 },
//       { row: 61, col: 26 },
//     ];

//     const batteryCellIds = batteries.map((battery) =>
//       getCellId(battery.row, battery.col)
//     );

//     // #regin 베터리
//     for (let r = 1; r <= rowLen; r++) {
//       for (let c = 1; c <= colLen; c++) {
//         const cellId = getCellId(r, c);

//         if (!batteryCellIds.includes(cellId)) continue;

//         const originIdx = origin.findIndex((cell) => {
//           return cell.cellId === cellId;
//         });

//         origin[originIdx] = {
//           cellId: cellId,
//           originId: cellId,
//           ...grid[fmsType.BATTERY],
//           fmsType: fmsType.BATTERY,
//           direction: "E",
//         };

//         for (let addR = 0; addR < grid[fmsType.BATTERY].rowGrid; addR++) {
//           for (let addC = 0; addC < grid[fmsType.BATTERY].colGrid; addC++) {
//             const nextR = r + addR;
//             const nextC = c + addC;
//             const nextCellId = getCellId(nextR, nextC);
//             const nextOriginIdx = origin.findIndex(
//               (cell) => cell.cellId === nextCellId
//             );
//             origin[nextOriginIdx] = {
//               ...origin[nextOriginIdx],
//               originId: cellId,
//             };
//           }
//         }
//       }
//     }
//   }
//   // #endregion

//   // #region UPS 정보
//   const upss = [
//     { row: 45, col: 7 },
//     { row: 47, col: 7 },
//     { row: 49, col: 7 },
//     { row: 51, col: 7 },

//     { row: 45, col: 24 },
//     { row: 47, col: 24 },
//     { row: 49, col: 24 },
//     { row: 51, col: 24 },
//   ];

//   const upsIds = upss.map((ups) => getCellId(ups.row, ups.col));

//   for (let r = 1; r <= rowLen; r++) {
//     for (let c = 1; c <= colLen; c++) {
//       const cellId = getCellId(r, c);
//       if (!upsIds.includes(cellId)) continue;

//       const originIdx = origin.findIndex((cell) => {
//         return cell.cellId === cellId;
//       });

//       origin[originIdx] = {
//         cellId: cellId,
//         originId: cellId,
//         ...grid[fmsType.UPS],
//         fmsType: fmsType.UPS,
//         direction: "N",
//       };

//       for (let addR = 0; addR < grid[fmsType.UPS].rowGrid; addR++) {
//         for (let addC = 0; addC < grid[fmsType.UPS].colGrid; addC++) {
//           const nextR = r + addR;
//           const nextC = c + addC;
//           const nextCellId = getCellId(nextR, nextC);
//           const nextOriginIdx = origin.findIndex(
//             (cell) => cell.cellId === nextCellId
//           );
//           origin[nextOriginIdx] = {
//             ...origin[nextOriginIdx],
//             originId: cellId,
//           };
//         }
//       }
//     }
//   }

//   saveJsonFromUrl(filePath(newPath), origin);
// }

function main(newPath) {
  const fmsType = {
    RACK: "rack",
    CRAC: "crac",
    BATTERY: "battery",
    UPS: "ups",
  };

  const grid = {
    [fmsType.RACK]: { rowGrid: 1, colGrid: 2 },
    [fmsType.CRAC]: { rowGrid: 2, colGrid: 1 },
    [fmsType.BATTERY]: { rowGrid: 2, colGrid: 1 },
    [fmsType.UPS]: { rowGrid: 1, colGrid: 2 },
  };

  const DIRECTION = {
    동: "E",
    서: "W",
    남: "S",
    북: "N",
  };
  const maxRow = 16;
  const maxCol = 21;

  const racks = [
    // 1 번째 랙
    {
      fmsType: fmsType.RACK,
      row: 4,
      col: 4,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 5,
      col: 4,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 6,
      col: 4,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 7,
      col: 4,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 8,
      col: 4,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 9,
      col: 4,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 10,
      col: 4,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 11,
      col: 4,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 12,
      col: 4,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 13,
      col: 4,
      direction: DIRECTION.동,
    },
    // 2 번째 랙
    {
      fmsType: fmsType.RACK,
      row: 4,
      col: 9,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 5,
      col: 9,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 6,
      col: 9,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 7,
      col: 9,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 8,
      col: 9,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 9,
      col: 9,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 10,
      col: 9,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 11,
      col: 9,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 12,
      col: 9,
      direction: DIRECTION.동,
    },
    {
      fmsType: fmsType.RACK,
      row: 13,
      col: 9,
      direction: DIRECTION.동,
    },

    // 컨테이너 랙 위쪽 랙
    {
      fmsType: fmsType.RACK,
      row: 4,
      col: 15,
      direction: DIRECTION.남,
    },
    {
      fmsType: fmsType.RACK,
      row: 4,
      col: 16,
      direction: DIRECTION.남,
    },
    {
      fmsType: fmsType.RACK,
      row: 4,
      col: 17,
      direction: DIRECTION.남,
    },
    {
      fmsType: fmsType.RACK,
      row: 4,
      col: 18,
      direction: DIRECTION.남,
    },
    {
      fmsType: fmsType.RACK,
      row: 4,
      col: 19,
      direction: DIRECTION.남,
    },
    // 컨테이너 아랫쪽 랙
    {
      fmsType: fmsType.RACK,
      row: 7,
      col: 15,
      direction: DIRECTION.북,
    },
    {
      fmsType: fmsType.RACK,
      row: 7,
      col: 16,
      direction: DIRECTION.북,
    },
    {
      fmsType: fmsType.RACK,
      row: 7,
      col: 17,
      direction: DIRECTION.북,
    },
    {
      fmsType: fmsType.RACK,
      row: 7,
      col: 18,
      direction: DIRECTION.북,
    },
    {
      fmsType: fmsType.RACK,
      row: 7,
      col: 19,
      direction: DIRECTION.북,
    },
  ];

  const upss = [
    {
      fmsType: fmsType.UPS,
      row: 1,
      col: 3,
      direction: DIRECTION.남,
    },
    {
      fmsType: fmsType.UPS,
      row: 1,
      col: 6,
      direction: DIRECTION.남,
    },

    {
      fmsType: fmsType.UPS,
      row: 1,
      col: 9,
      direction: DIRECTION.남,
    },
  ];

  const cracs = [
    {
      fmsType: fmsType.CRAC,
      row: 16,
      col: 3,
      direction: DIRECTION.북,
    },
    {
      fmsType: fmsType.CRAC,
      row: 16,
      col: 6,
      direction: DIRECTION.북,
    },
    {
      fmsType: fmsType.CRAC,
      row: 16,
      col: 9,
      direction: DIRECTION.북,
    },
  ];

  const fmsInfos = [racks, upss, cracs].flat();
  const cellInfos = [];

  for (let r = 1; r <= maxRow; r += 1) {
    for (let c = 1; c <= maxCol; c += 1) {
      const cellId = getCellId(r, c);
      cellInfos.push({ cellId });
    }
  }

  fmsInfos.forEach((fmsInfo) => {
    const { row, col, fmsType, direction } = fmsInfo;
    const { rowGrid, colGrid } = grid[fmsType];
    const originId = getCellId(row, col);
    const originIndex = cellInfos.findIndex((cell) => cell.cellId === originId);
    cellInfos[originIndex] = {
      cellId: originId,
      originId,
      fmsType,
      direction,
      rowGrid,
      colGrid,
    };

    for (let addR = 0; addR < rowGrid; addR += 1) {
      for (let addC = 0; addC < colGrid; addC += 1) {
        const { row: nextR, col: nextC } = nextRowColByDirection(
          row,
          col,
          addR,
          addC,
          direction
        );

        const nextCellId = getCellId(nextR, nextC);
        if (nextCellId === originId) continue;
        console.log(row, col, addR, addC, direction, nextR, nextC);
        const findNextCellId = cellInfos.findIndex(
          (cell) => cell.cellId === nextCellId
        );
        console.log(findNextCellId, nextCellId);
        cellInfos[findNextCellId].originId = originId;
      }
    }
  });

  saveJsonFromUrl(filePath(newPath), {
    maxCol,
    maxRow,
    cellInfos,
  });
}

main("mapInfo2.js");

function nextRowColByDirection(row, col, addR, addC, direction) {
  switch (direction) {
    case DIRECTION.동:
      return { row: row - addR, col: col - addC };
    case DIRECTION.서:
      return { row: row + addR, col: col + addC };
    case DIRECTION.남:
      return { row: row - addR, col: col + addC };
    case DIRECTION.북:
      return { row: row + addC, col: col - addR };
  }
}
