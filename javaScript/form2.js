document.addEventListener("DOMContentLoaded", function() {
	const form = document.querySelector("form");
	
	form.addEventListener("submit", function (e) {
		e.preventDefault();
		if(!form.checkValidity()) {
			form.reportValidity();
			Swal.fire({
				icon: "Error",
				title: "Oops",
				text: "One or more of your fields are empty!"
			});
			return;
		}
		
		Swal.fire({
		  title: "You have successfully logged in!",
		  showClass: {
			popup: `
			  animate__animated
			  animate__fadeInUp
			  animate__faster
			`
		  },
		  hideClass: {
			popup: `
			  animate__animated
			  animate__fadeOutDown
			  animate__faster
			`
		  }
		});
		
		setTimeout(()=>form.reset(),1500);
		
	});
});