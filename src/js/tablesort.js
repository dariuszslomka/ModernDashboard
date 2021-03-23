export function sortTableByColumnAscending(table, columnIndex) {
    sortTableByColumn(table, columnIndex, true);
}

export function sortTableByColumnDescending(table, columnIndex) {
    sortTableByColumn(table, columnIndex, false);
}

function sortTableByColumn(table, columnIndex, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-of-type(${columnIndex + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-of-type(${columnIndex + 1})`).textContent.trim();
    
        return aColText > bColText ? dirModifier : (-1 * dirModifier);
    });

    while (tBody.firstChild) {
        tBody.removeChild(tBody.firstChild);
    }

    tBody.append(...sortedRows);

    table.querySelectorAll("th").forEach(th => {
        th.classList.remove("th-sort-asc", "th-sort-desc");
    });

    table.querySelector(`th:nth-child(${columnIndex + 1})`).classList.toggle("th-sort-asc", asc);
    table.querySelector(`th:nth-child(${columnIndex + 1})`).classList.toggle("th-sort-desc", !asc);
}