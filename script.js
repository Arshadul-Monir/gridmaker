let color_selected;

function addRow()
{
    let grid = document.getElementById("grid");
    const rows = document.getElementsByTagName("tr");
    let row = document.createElement("tr");

    if(rows.length == 0)
    {
        let col = document.createElement("td");
        col.onclick = function() {
            this.style.backgroundColor = color_selected
        }
        row.appendChild(col);
        grid.appendChild(row);
    }
    else
    {
        for(let i = 0; i < rows[0].childElementCount; i++)
        {
            let col = document.createElement("td");
            col.onclick = function() {
                this.style.backgroundColor = color_selected
            }
            row.appendChild(col);
        }
        grid.appendChild(row);
    }
}

function addCol()
{
    let grid = document.getElementById("grid");
    const rows = document.getElementsByTagName("tr");
    let row = document.createElement("tr");

    if(rows.length == 0)
    {
        let col = document.createElement("td");
        col.onclick = function() {
            this.style.backgroundColor = color_selected
        }
        row.appendChild(col);
        grid.appendChild(row);
    }
    else
    {
        for(let i = 0; i < rows.length; i++)
        {
            let col = document.createElement("td");
            col.onclick = function() {
                this.style.backgroundColor = color_selected
            }
            rows[i].appendChild(col);
        }
    }
}

function remRow()
{
    let grid = document.getElementById("grid");
    const rows = document.getElementsByTagName("tr");

    if(rows.length == 0)
    {
        alert("There is nothing to delete");
    }
    else
    {
        grid.removeChild(grid.lastElementChild);
    }
}

function remCol()
{
    let grid = document.getElementById("grid");
    const rows = document.getElementsByTagName("tr");

    if(rows.length == 0)
    {
        alert("There is nothing to delete");
    }
    else
    {
        for(let i = 0; i < rows.length; i++)
        {
            rows[i].removeChild(rows[i].lastElementChild);
        }
    }
}

 function changeColor()
 {
    color_selected = document.getElementById("color").value;
 }