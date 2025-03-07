// Select color input
// Select size input
var height, width, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);
//console.log('height:' + height);
});

function makeGrid(x, y) {
	$('tr').remove();

// Your code goes here!
	for( i = 1; i <= x; i++){
		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');
		for (var j = 1; j <= y; j++){
			$('#table' + i).append('<td></td>');
		}
	}

	// When color is selected by the user, add color to grid
	$('td').click(function addColor(){
		color = $('#colorPicker').val();
		if ($(this).attr('style')){
			$(this).removeAttr('style');
		} {
			$(this).attr('style','background-color:' + color);
			}
				});
	}