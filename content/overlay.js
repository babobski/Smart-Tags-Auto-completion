/**
 * Namespaces
 */
if (typeof(extensions) === 'undefined') extensions = {};
if (typeof(extensions.PHPTags) === 'undefined') extensions.PHPTags = { version : '1.0' };

(function() {
	var self = this,
		prefs = Components.classes["@mozilla.org/preferences-service;1"]
		.getService(Components.interfaces.nsIPrefService).getBranch("extensions.PHPTags."),
		editor_pane = ko.views.manager.topView;
		
	editor_pane.removeEventListener('keydown', self._autoCompleteTag, true);
		
	this._autoCompleteTag = function(e) {
		var currentView = ko.views.manager.currentView;
		
		if (!currentView) {
			return false;
		}
		
		var scimoz = currentView.scimoz;
		
		if (!scimoz) {
			return false
		}
		
		if (e.shiftKey && e.which == 191 && !e.ctrlKey && !e.altKey && !e.metaKey) {
			var koDoc = currentView.document || currentView.koDoc,
				language = koDoc.language,
				useShortTags = prefs.getCharPref('shorttags');
				
			if (scimoz.selText.length > 0) {
				return false;
			}
			
			switch (language) {
				case 'PHP':
					
					try {
						e.preventDefault();
						e.stopPropagation();
						e.stopImmediatePropagation();
						
						currentView.scimoz.beginUndoAction();
						
						if (scimoz.currentPos > 0 && scimoz.getWCharAt(scimoz.currentPos - 1).toString() === '<') {
							if (currentView.scintilla.autocomplete.active) {
								currentView.scintilla.autocomplete.close();
							}
							if (useShortTags === 'yes') {
								scimoz.insertText(scimoz.currentPos, '? ?>');
								scimoz.gotoPos(scimoz.currentPos + 1);
							} else {
								scimoz.insertText(scimoz.currentPos, '?php ?>');
								scimoz.gotoPos(scimoz.currentPos + 4);
							}
						} else {
							scimoz.insertText(scimoz.currentPos, '?');
							scimoz.gotoPos(scimoz.currentPos + 1);
						}
						
						currentView.scimoz.endUndoAction();
						
					} catch(e) {
						alert(e);
					}
					break;
			}
		}
		
		if (!e.shiftKey && e.which == 70 && !e.ctrlKey && !e.altKey && !e.metaKey) {
			var koDoc = currentView.document || currentView.koDoc,
			language = koDoc.language;
			
			if (scimoz.selText.length > 0) {
				return false;
			}
			
			switch (language) {
				case 'PHP':
					
					try {
						e.preventDefault();
						e.stopPropagation();
						e.stopImmediatePropagation();
						
						var testString = scimoz.currentPos > 1 ? scimoz. getTextRange((scimoz.currentPos - 2), scimoz.currentPos) : false;
						
						currentView.scimoz.beginUndoAction();
						
						if (testString && testString === '<i') {
							if (currentView.scintilla.autocomplete.active) {
								currentView.scintilla.autocomplete.close();
							}
							scimoz.deleteBackNotLine();
							scimoz.deleteBackNotLine();
							var snippet = ko.abbrev.findAbbrevSnippet('if', 'HTML', 'HTML');
							if (snippet !== null) {
								ko.abbrev.insertAbbrevSnippet(snippet);
							} else {
								alert('Snippet "if" not found');
							}
						} else {
							scimoz.insertText(scimoz.currentPos, 'f');
							scimoz.gotoPos(scimoz.currentPos + 1);
						}
						currentView.scimoz.endUndoAction();
						
					} catch(e) {
						alert(e);
					}
					break;
			}
		}
		
		if (!e.shiftKey && e.which == 76 && !e.ctrlKey && !e.altKey && !e.metaKey) {
			var koDoc = currentView.document || currentView.koDoc,
			language = koDoc.language;
			
			if (scimoz.selText.length > 0) {
				return false;
			}
			
			switch (language) {
				case 'PHP':
					
					try {
						e.preventDefault();
						e.stopPropagation();
						e.stopImmediatePropagation();
						
						currentView.scimoz.beginUndoAction();
						
						var testString = scimoz.currentPos > 1 ?scimoz.getTextRange((scimoz.currentPos - 2), scimoz.currentPos) : false;
						
						if (testString && testString === '<e') {
							if (currentView.scintilla.autocomplete.active) {
								currentView.scintilla.autocomplete.close();
							}
							scimoz.deleteBackNotLine();
							scimoz.deleteBackNotLine();
							var snippet = ko.abbrev.findAbbrevSnippet('ifelse', 'HTML', 'HTML');
							if (snippet !== null) {
								ko.abbrev.insertAbbrevSnippet(snippet);
							} else {
								alert('Snippet "if else" not found');
							}
						} else {
							scimoz.insertText(scimoz.currentPos, 'l');
							scimoz.gotoPos(scimoz.currentPos + 1);
						}
						currentView.scimoz.endUndoAction();
						
					} catch(e) {
						alert(e);
					}
					break;
			}
		}
		
		if (!e.shiftKey && e.which == 79 && !e.ctrlKey && !e.altKey && !e.metaKey) {
			var koDoc = currentView.document || currentView.koDoc,
			language = koDoc.language;
			
			if (scimoz.selText.length > 0) {
				return false;
			}
			
			switch (language) {
				case 'PHP':
					
					try {
						e.preventDefault();
						e.stopPropagation();
						e.stopImmediatePropagation();
						
						currentView.scimoz.beginUndoAction();
						
						var testString = scimoz.currentPos > 1 ? scimoz.getTextRange((scimoz.currentPos - 2), scimoz.currentPos) : false;
						
						if (testString && testString === '<f') {
							if (currentView.scintilla.autocomplete.active) {
								currentView.scintilla.autocomplete.close();
							}
							scimoz.deleteBackNotLine();
							scimoz.deleteBackNotLine();
							var snippet = ko.abbrev.findAbbrevSnippet('foreach', 'HTML', 'HTML');
							if (snippet !== null) {
								ko.abbrev.insertAbbrevSnippet(snippet);
							} else {
								alert('Snippet "foreach" not found');
							}
						} else {
							scimoz.insertText(scimoz.currentPos, 'o');
							scimoz.gotoPos(scimoz.currentPos + 1);
						}
						currentView.scimoz.endUndoAction();
						
					} catch(e) {
						alert(e);
					}
					break;
			}
		}
	}
	
	
	editor_pane.addEventListener('keydown', self._autoCompleteTag, true);
	
}).apply(extensions.PHPTags);

