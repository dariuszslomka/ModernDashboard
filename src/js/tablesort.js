export function sortTableByColumnAscending(table, columnIndex, sortType) {
    sortTableByColumn(table, columnIndex, sortType, true);
}

export function sortTableByColumnDescending(table, columnIndex, sortType) {
    sortTableByColumn(table, columnIndex, sortType, false);
}

function sortTableByColumn(table, columnIndex, sortType, asc = true) {
    const dirModifier = asc ? 1 : -1;
    const tBody = table.tBodies[0];
    const rows = Array.from(tBody.querySelectorAll("tr"));

    const sortedRows = rows.sort((a, b) => {
        const aColText = a.querySelector(`td:nth-of-type(${columnIndex + 1})`).textContent.trim();
        const bColText = b.querySelector(`td:nth-of-type(${columnIndex + 1})`).textContent.trim();
        
        if(sortType == 'number')
        {
            // to do check both are numbers 

            return (aColText - bColText) * dirModifier;
        }
        else if(sortType == 'date')
        {
            let dateA = stringToDate(aColText);
            let dateB = stringToDate(bColText);
            return (dateA - dateB) * dirModifier;
        }

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

function stringToDate(date_string) {
    var date_components = date_string.split("/");
    var day = date_components[0];
    var month = date_components[1];
    var year = date_components[2];
    return new Date(year, month - 1, day);
  }