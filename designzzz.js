

var gridHeight,gridWidth,designCanvas,colorInput;

$("#sizePicker").submit(function makeGrid(event)
{
    $('table tr').remove(); 

    var gridHeight = $("#inputHeight").val();
    var gridWidth = $("#inputWeight").val();

    for (var m = 1; m <= gridHeight; m++) 
    {
        $("table").append("<tr></tr>");
        for (var n = 1; n <= gridWidth; n++)
        {
            $("tr:last").append("<td></td>");
            $("td").attr("class","pixel");
        };
    }   
    event.preventDefault();
});


var designCanvas = $("#pixelCanvas");

designCanvas.on("click",".pixel",function()
{
    var colorAdding= $("#colorPicker").val();
    $(this).css("background-color", colorAdding);
})