function convert(){
var inputBox = document.getElementById("input");
inputBox.addEventListener("keyup",function(e){
    document.getElementById("outputBox").innerHTML = null;
	const f = inputBox.value.split('\n');
	console.log(f)
    for(x in f){
        f[x]=parseMarkdown(f[x])
    }
	let output = f.join("");
	console.log(output)
    document.getElementById("outputBox").innerHTML += output
})   
}
function parseMarkdown(markdownText) {
	const htmlText = markdownText
		.replace(/^### (.*$)/gim, '<h3>$1</h3>')
		.replace(/^## (.*$)/gim, '<h2>$1</h2>')
		.replace(/^# (.*$)/gim, '<h1>$1</h1>')
		.replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>')
		.replace(/\*\*(.*)\*\*/gim, '<b>$1</b>')
		.replace(/\*(.*)\*/gim, '<i>$1</i>')
		.replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
		.replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>")
		.replace(/\n$/gim, '<br />')
	return htmlText.trim()
}


convert()