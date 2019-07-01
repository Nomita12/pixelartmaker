// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(document).ready(function()
{
    $('#sizePicker').submit(function makeGrid(nomita)
    {
        $('table tr').remove();
        var n = $('#height').val();
        var m = $('#width').val();
        for(var a=1;a<=n;a++)
        {
            $('table').append('<tr></tr>');
                for(var b=1;b<=m;b++)
                {
                    $('tr:last').append('<td></td>');
                    $('td').attr("class",'forcolor');
                }
        }
        nomita.preventDefault();
        $('.forcolor').click(function(event)
        {
            var bcolor= $('#colorPicker').val();
            $(event.target).css('background-color',bcolor);
        });
    });
});