// onLoad

$( document ).ready(function() {
  var random = randomize();
  displayContents(random);
});

function randomNumber(maxNum){
	return Math.floor(Math.random() * maxNum);
}

function randomize(){
	var contents = ['Army', 'Combat Engineer', 'BAM!', 'Pull a Hank Snow', 'Were you in the war?', 'Chop his head off', 'Have gun will travel', 'Where\'s my bride?', 'Green green grass of home', 'I had two words for him', 'Did you graduate?', 'Sons of bitches', 'They taught us to kill', 'Kilroy was here', 'She changed my vocabulary', 'I never did drink', 'Ladies', 'When I came back', 'Go to hell', 'New Guinea, Biak, Leite, Louzon and Japan', 'Break his neck', 'Carry a gun', 'Car', 'Shoot', 'I could kill you' ];
	var randomContents = [];

	while(randomContents.length != contents.length){
		var randomIndex = randomNumber(contents.length);
		var item = contents[randomIndex];
		var itemIndex = randomContents.indexOf(item);
		
		if(itemIndex == -1){
			randomContents[randomContents.length] = item;
		}
	}
	
	return randomContents;
	
}

function displayContents(randomContents){
	var rows = document.getElementById('bingo').rows;
	var contentsIndex = 0;
	for(var rowIndex = 1; rowIndex < rows.length; rowIndex++){
		var row = rows[rowIndex];
		
		for(var cellIndex = 0; cellIndex < row.cells.length; cellIndex++){
			if(contentsIndex < randomContents.length){
				var text = randomContents[contentsIndex];
				var cell = row.cells[cellIndex];
				cell.innerHTML = text;
			}
			contentsIndex++;
			
			cell.addEventListener("click", function(){
				this.classList.toggle('selected');
			}, true);
			
		}
	}

}