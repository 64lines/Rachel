# Rachel
Rachel will allow you generate forms using only jQuery and JSON without HTML, easily and smoothly.

Now you can generate entire forms with very few HTML using code like this:

```
/**
 * This is how Rachel works
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

In the HTML you only need import the library, your code and one DIV:
```
<script src="js/rachel.js"></script>
<script>
... Your code ...
</script>
<body>
    <div class="container"></div>
</body>
```
