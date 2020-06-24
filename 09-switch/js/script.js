console.log('You are at ' + window.location);

let answer = prompt('Введите имя музыканта');
answer = answer.toLowerCase();

switch(answer) {
	case 'паша техник':
		console.log('rap');
		break;
	case 'сергей паук троицкий':
		console.log('rock');
		break;
	case 'валерий леонтьев':
		console.log('pop');
		break;
	default:
		console.log('no such singer in database');
		break;
}