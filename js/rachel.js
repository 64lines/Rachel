/**
 * Hi I'm Rachel, I allow to you generate forms with my persuasive methods
 * easily and smoothly. Please be gently with me...
 */
// Requires: jQuery 2.1.4+ and Boostrap 3.3.4+
var Rachel = {
    /**
     * Guess what? It's the form's title.
     */
    title: "Untitled",

    /**
     * Attributes:
     * Element: jQuery element convention, can be ".cont" or "#cont"
     * Fields: It's a JSON with the data of the fields (Look at the example).
     * Events: Well all forms must to have events, isn't it?
     */
    generateForm: function (element, fields, events) {
        var titleH1 = $("<h1>");
        titleH1.text(this.title);

        var mainForm = $("<form>");
        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];

            var div = $("<div>");
            div.attr("class", "form-group");

            if (field.type == "button" || field.type == "submit") {
                var button = $("<button>");
                button.attr("type", field.type);
                button.attr("class", "btn btn-default");
                button.attr("id", field.id);
                button.text(field.label);

                mainForm.append(button);
            } else {
                var input = $("<input>");
                input.attr("type", field.type);
                input.attr("id", field.id);
                input.attr("class", "form-control");
                input.attr("placeholder", field.placeholder);

                var label = $("<label>");
                label.attr("for", field.id);
                label.text(field.label);

                div.append(label);
                div.append(input);
                mainForm.append(div);
            }
        }
        $(element).append(titleH1);
        $(element).append(mainForm);

        events();
    }
};
