const request = require('request');
const cheerio = require('cheerio');


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("tracker").addEventListener("click", tracker);
});

function tracker(){
	let urlname = "";
	let domain = "";
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    var tab = tabs[0];
  	var url = new URL(tab.url);
 	var site = url.hostname.split('.')[1];
    alert(url);
	alert(site);
	urlname = url;
	domain = site;
let options = {
                url : urlname,
                headers: {
                         'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36'
                   		}
                };

if (domain.toLowerCase() === "indeed") {
	request ('https://in.indeed.com/viewjob?jk=8bc7de9b52a7fdbb&tk=1f56fke9nst68800&from=serp&vjs=3&advn=8531100203438512&adid=361848589&ad=-6NYlbfkN0A0sLjryQUNkc81K2goHfqpo9JHml6Vo2yWT4XuRGLXtt0Plp8naQ2M7aL2M5qwnGbk6X_onERNWufoFvpkMECfXh8Q5AYrCHdvuytdePQygAsodW8PVUvM9KNbLzpIW7Z7CBrynVPT89PT_eWcCPta0swFxvfCRhRuljeX6IViblor47sefnl-chWn6UypP1FQT42Fa-8QGV-tT3MTZ7lkE6kFSKm94S4XD1NOojSnbmOXOXvrg1VdfGPhbvvu0sCiilmRQED3y-Gxk8rmyTfjeLevkwTeswzlOppHjwDF6AV-AnZurnErGarVpJ7pzxM=&sjdu=4-j9Ft8zRiwjAAIoOpx63C9tSnla7vOMPwzolHr1KN_42LO-dgdIci_pnNfxQFzG0qnU6aiesBK8ObomtJnjrLnourDm_m3C3PvTfNIWoqAe9xnSsP4O3GI4KNjZRNvCvrMAbcovb_12btMW_Ds9ErYZbYbIMA0VtO9IBFBI1jdEcZZct-fgQcdcdZqESJcm0suMjyO8GYKvk4rvrDXJ9X-YrR6Klu8nSJTjrK0B8zDmh6YAq6w0AOiDt48xkjvLw9wzjkTtskG6RrqnvDhxeSxLTOoFlnNbXr749G5bbSI', (error, resp, html)=> {
	if (!error &&  resp.statusCode == 200){
		const $ = cheerio.load(html);

		const title = $('.jobsearch-JobInfoHeader-title');
		alert(title.html());

		let other = [];
		$('.jobsearch-JobInfoHeader-subtitle div').each((i, el) => {
			other.push($(el).text());
		});
		const company = other[1];
		const location = other[other.length - 1];
		console.log(company, location);
	}

	else {
		console.log(error, resp.statusCode);
	}
});


}

else if (domain.toLowerCase() === "glassdoor") {
request (options , (error, resp, html)=> {
	if (!error &&  resp.statusCode == 200){
		const $ = cheerio.load(html);

		const title = $('.e11nt52q6');
		const jobTitle = title.text();
		// alert("title "+jobTitle);

		const location = $('div .e11nt52q2');
		const jobLocation = location.html();
		// alert("location "+jobLocation);

		const company = $('div .e11nt52q1');
		const companyName = company.text().replace(/[^a-zA-Z]/g, '');
		// alert("company "+companyName);
		show_preview();
		document.getElementById("job-title").value = jobTitle;
		document.getElementById("company-name").value = companyName;
		document.getElementById("job-location").value = jobLocation;

		document.getElementById("saveApplication").addEventListener("click", () => {
			saveToDatabase({
				title: jobTitle,
				company: companyName,
				location: jobLocation,
				link: url, 
				status: 'Applied',
				email: localStorage.getItem("janus-email"),
			});
		});
		

	}

	else {
		console.error(error, resp.statusCode);
	}
});

}

else {
	alert("nothing works")
}

});

}

function saveToDatabase(data) {
	fetch("https://janus-dot-hackathon-313211.uc.r.appspot.com/applications/", {
		method: "POST",
		headers: {
			'Accept': 'application/json, text/plain, */*',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(function(res){ 
		// alert(res.status);
		if(res.status === 200) {
			hide_preview();
		}
	})
	// .then(function(resultdata){ alert( JSON.stringify( resultdata ) ) })
	.catch(function(err){
		 alert("error "+err) 
	});
}