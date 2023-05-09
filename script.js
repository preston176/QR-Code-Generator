/* These lines of code are initializing variables and assigning them values based on elements in the
HTML document. */
let generateButton = document.getElementById("Gen_Button");
let myimg=document.getElementById("img");
let gapi="https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";

/* `generateButton.addEventListener('click', function()` is adding an event listener to the
`generateButton` element that listens for a click event. When the button is clicked, the function
inside the parentheses is executed. In this case, the function generates a QR code based on the text
and size input by the user and displays it on the page. */

generateButton.addEventListener('click', function()
{
    let mytext=document.getElementById("qrtext").value;
    let mysize=document.getElementById("size").value;

    if (mytext !=="" && mysize=="100")
    {
        myimg.src=gapi+"100x100"+"&chl="+mytext;
    }
    else if(mytext!=="" && mysize=="150")
    {
        myimg.src=gapi+"150x150"+"&chl="+mytext;
    }
    else if(mytext!=="" && mysize=="200")
    {
        myimg.src=gapi+"200x200"+"&chl="+mytext;
    }
    else if (mytext!=="" && mysize=="250")
    {
        myimg.src=gapi+"250x250"+"&chl="+mytext;
    }
    else if (mytext!=="" && mysize=="300")
    {
        myimg.src=gapi+"300x300"+"&chl="+mytext;
    }
    else
    {
        alert("Please Enter Text");
    }
    /* The `return 1` statement is simply returning the value 1 when the QR code generation is
    successful. This can be used by other parts of the code to determine if the generation was
    successful or not. The comment "return 1 on success otherwise fail" suggests that this is the
    intended purpose of the statement. */
    return 1;
});