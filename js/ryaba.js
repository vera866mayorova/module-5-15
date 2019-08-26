const dataURL = "https://api.myjson.com/bins/jcmhn";
const fields=[
"var1",
"var2",
"var3",
"var4",
"var5",
"var6",
"speach"
]

function getFormValues() {
	let obj = {};

	fields.forEach(function(field, index) {
		obj[field] = $("input[name=" + field + "]")[0].value
	})  
	
	
	return obj;
}

function handleButton() {
	$.getJSON(dataURL, handleData);
	$("form").hide();
  // взять данные по dataUrl, вытащить их и передать в handleData
}

function handleData(data) {
	let finalMessage = "";

	let obj = {  
	var1: $("input[name=var1]")[0].value,
    var2: $("input[name=var2]")[0].value,
	var3: $("input[name=var3]")[0].value,
	var4: $("input[name=var4]")[0].value,
	var5: $("input[name=var5]")[0].value,
	var6: $("input[name=var6]")[0].value,
	speach: $("input[name=speach]")[0].value   
	}

	data["text"].forEach (function(item,index) {
	    for (key in obj) {
	    	item = item.replace ("{" + key + "}", obj[key]);
	    }
		
		finalMessage = finalMessage + item + "<br>";
		
	});

    $("div#result").html(finalMessage);
   
}
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
 

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
