// var hash = CryptoJS.SHA1(text)

function hashing() {
	var text = document.getElementById("hashed-text").value;
	var method = document.getElementById("hash").value;

	if(method == 'SHA1') {
		var hash = CryptoJS.SHA1(text)
	} else if(method == 'SHA256') {
		var hash = CryptoJS.SHA256(text)
	} else if(method == 'SHA512') {
		var hash = CryptoJS.SHA512(text)
	} else {
		var hash = CryptoJS.MD5(text)
	}
	document.getElementById("hash-result").innerHTML = hash
}

hashing()