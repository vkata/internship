var persList = [];

function readPersonInfo() {

}

function mainFunction() {

	var readline = require('readline');

	var rl = readline.createInterface(process.stdin, process.stdout);

	console.log('Options: (1) Add new person, (2) Sort by name, (3) Sort by age, (4) Exit\n ');
	rl.setPrompt('Answer: ');
	rl.prompt();

	rl.on('line', function(line) {
		console.log('Options: (1) Add new person, (2) Sort by name, (3) Sort by age, (4) Exit\n ');

		if (line.length > 5) {
			var temp = line.split(" ");
			persList.push({
				name: temp[0],
				gender: temp[1],
				age: parseInt(temp[2])
			});
		}
		if (line == 4) {
			console.log("Exit.");
			rl.close();
		} else if (line == 1) {
			//adding new person
			console.log('You chose ' + line + ' to add a new person.\n');
			console.log('Person\'s information (name, gender, age)');
		//	readFromUser();
		} else if (line == 2) {
			console.log('You chose  ' + line + ' - sort by name.\n');
			bubbleSort(persList, 'name');
			console.log(persList);
			console.log('Options: (1) Add new person, (2) Sort by name, (3) Sort by age, (4) Exit\n ');
		} else if (line == 3) {
			console.log('You chose  ' + line + ' - sort by age.\n');
			bubbleSort(persList, 'age');
			console.log(persList);
			console.log('Options: (1) Add new person, (2) Sort by name, (3) Sort by age, (4) Exit\n ');
		}
		rl.prompt();
	}).on('close', function() {
		process.exit(0);
	});
}

function sorting(persList, sortBy) {
	console.log("zzzz");
	persList.sort(function(a, b) {
		if (a[sortBy] > b[sortBy]) {
			return 1;
		}
		if (a[sortBy] < b[sortBy]) {
			return -1;
		}
		return 0;
	});
}

function bubbleSort(persList, sortBy) {
   let n = persList.length;
   console.log(n);
    do {
     swapped = false;
     for (let i = 1; i <= n-1; i++) {
       console.log(persList[i-1][sortBy]);
       console.log(persList[i][sortBy]);
       if (persList[i-1][sortBy] > persList[i][sortBy]) {
         let temp = persList[i][sortBy];
         console.log(temp);
         persList[i][sortBy] = persList[i-1][sortBy];
         persList[i-1][sortBy] = temp;
         swapped = true;
       }
     }
   } while (!swapped)
}

mainFunction();

function readFromUser() {
	var readline = require('readline');

	var rl2 = readline.createInterface(process.stdin, process.stdout);

	// console.log('Options: (1) Add new person, (2) Sort by name, (3) Sort by age, (4) Exit\n ');
	rl2.setPrompt('zzzzz: ');
	rl2.prompt();

	rl2.on('line', function(line) {
		// console.log('Options: (1) Add new person, (2) Sort by name, (3) Sort by age, (4) Exit\n ');

		rl2.prompt();
	}).on('close', function() {
		process.exit(0);
	});
}
