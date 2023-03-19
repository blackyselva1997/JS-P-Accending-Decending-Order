let a = parseInt(prompt("Enter a First Number"));
let b = parseInt(prompt("Enter a Second Number"));
let c = parseInt(prompt("Enter a Third Number"));

if (a > b && a > c) {
    if (b > c) {
        document.write(`Ascending-Order: ${c}, ${b}, ${a}`);
        document.write("<br>");
        document.write(`Decending-Order: ${a}, ${b}, ${c}`);
    } else {
        document.write(`Ascending-Order: ${b}, ${c}, ${a}`);
        document.write("<br>");
        document.write(`Decending-Order: ${a}, ${c}, ${b}`);
    }
}
else if(b > a && b > c){
    if(a > c){
        document.write(`Ascending-Order: ${c}, ${a}, ${b}`);
        document.write("<br>");
        document.write(`Decending-Order: ${b}, ${a}, ${c}`);
    }
    else{
        document.write(`Ascending-Order: ${a}, ${c}, ${b}`);
        document.write("<br>");
        document.write(`Decending-Order: ${b}, ${c}, ${a}`);
    }
}
else if(c >a && c > b){
    if(a > b){
        document.write(`Ascending-Order: ${b}, ${a}, ${c}`);
        document.write("<br>");
        document.write(`Decending-Order: ${c}, ${a}, ${b}`);
    }
    else{
        document.write(`Ascending-Order: ${a}, ${b}, ${c}`);
        document.write("<br>");
        document.write(`Decending-Order: ${c}, ${b}, ${a}`);
    }
}
else{
    document.write("correct the condition");
}