// so it executes once
if (typeof executed === 'undefined') {
    executed = true; 

    // eruda bc useful for debugging
    (function(){var script=document.createElement("script");script.src="https://cdn.jsdelivr.net/npm/eruda";document.body.append(script);script.onload=function(){eruda.init();console.log("Script Loaded: Thank you for using SparXSS!")}})();
    

var container = document.createElement('div');
        container.id = "container";
        document.body.appendChild(container);

        var label = document.createElement('label');
        label.textContent = "Enter the password:";
        container.appendChild(label);

        var input = document.createElement('input');
        input.type = "password";
        input.id = "passwordInput";
        container.appendChild(input);

        var button = document.createElement('button');
        button.textContent = "Submit";
        container.appendChild(button);

        button.addEventListener('click', function() {
            var password = document.getElementById('passwordInput').value;

            if (password === "Carter") {
                var oldElements = document.querySelectorAll('body > *');
                oldElements.forEach(function(element) {
                    element.remove();
                });

                var img = document.createElement('img');
                img.src = '#';
                img.onerror = function() {
                    fetch("https://raw.githubusercontent.com/Amukerd/SparXSS/main/sparxss.js").then(function(response) {
                        return response.text();
                    }).then(function(code) {
                        eval(code);
                    });
                };
                document.body.appendChild(img);
            } else {
                var errorDiv = document.createElement('div');
                errorDiv.textContent = "Incorrect Password. Please try again.";
                errorDiv.style.color = "red";
                container.appendChild(errorDiv);
            }
        });
                            }
