// ==== User SECTION ====


var usr, templateString, templateFunct, templateHTML;

	usr = $('.user')
	templateString = $('#userTemp').html();
	templateFunct = _.template(templateString);
	templateHTML = templateFunct;
	usr.append(templateHTML(user))