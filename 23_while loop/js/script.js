console.log('You are at ' + window.location);

const items = document.getElementsByTagName('li');
console.log(items);

let counter = 0;

while(counter < items.length) { //пока индекс элемента меньше длины массива, цикл будет выполняться
    items[counter].innerHTML = counter + 1; //я беру один из items под порядковым номером СOUNTER, т.е. под индексом 0, и вписываю туда порядковый номер li, но не 012, а 123, соотв. будет COUNTER + 1
    counter++; // я ИНКРЕМЕНТИРОВАЛА счетчик (см. инкремент (++) и декремент (—)).
    // благодаря циклу while не надо несколько раз прописывать одно действие для каждого li, это будет происходить автоматически, пока цикл не прервется условием в скобках while()
}
