'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$(".jumbotron h1").text("Hello World");
		$(".jumbotron p").addClass("active"); //active class
		$("#testjs").text("Sure ok");
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);
}
function projectClick(e) {
	// prevent the page from reloading
	e.preventDefault();

	//some comment about $(this) refers to the obj
	// that triggerd the event 
	$(this).css("background-color", "#FFC2BC");

	var containingProject = $(this).closest(".project");
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) {
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>");
    } else {
       $(".project-description").fadeToggle();
    }
}