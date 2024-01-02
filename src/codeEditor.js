var editor;

$(document).ready(()=>{
    editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
        mode:"text/x-python",
        theme:"darcula",
        lineNumbers:true,
        autoCloseBrackets:true
    });
    var width = window.innerWidth;
    editor.setSize(width*0.75, "500");
    $("#run").on("click", submitCode);
})




const submitCode = async() => {
    try {
        var output = await fetch("https://t53kt8tm-3000.use2.devtunnels.ms/codeEditor", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"  // Corrected header name
            },
            body: JSON.stringify({ "code": editor.getValue() })  // Convert the object to JSON string
        });

        var output = await output.json();
        console.log(output);
        $("#output").text(output.output);
    } catch (error) {
        console.error("Error with running code:", error);
    }
};