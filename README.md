# Rachel
Hi I'm Rachel, I allow to you generate forms with my persuasive methods easily and smoothly. Please be gently with me...

Now you can generate entire forms with very few HTML using code like this:

```
/**
 * This is how Rachel want to be treated...
 */
$(document).ready(function() {
    Rachel.title = "Login form";
    Rachel.generateForm(".container", [
        {
            "label": "Username",
            "id": "username",
            "type": "text",
            "placeholder": "Username"
        },
        {
            "label": "Password",
            "id": "password",
            "type": "password",
            "placeholder": "Password"
        },
        {
            "label": "Login",
            "id": "login",
            "type": "submit",
        }
    ], function() {
        // Events, oh yeah, events.
        $("#login").on("click", function() {
            alert("Don't touch me like that!");
        });
    });
});
```

In the HTML you only need one DIV:
```
<!-- Yeah, just one div, you don't need nothing else -->
<div class="container"></div>
```
