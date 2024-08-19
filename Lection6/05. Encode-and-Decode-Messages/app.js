function encodeAndDecodeMessages() {
    const [encodeBtnEl, decodeBtnEl] = document.querySelectorAll("div button");
    const [encodeTextAreaEl, decodeTextAreaEl] = document.querySelectorAll("div textarea");

    function encodeMessage(text){
        return text.split("").map((char) => {
            const currentAsciiValue = char.charCodeAt(0);
            return String.fromCharCode(currentAsciiValue+1);
        }).join("");
    }

    function decodeMessage(text){
        return text.split("").map((char) => {
            const currentAsciiValue = char.charCodeAt(0);
            return String.fromCharCode(currentAsciiValue-1);
        }).join("");
    }

    function encodeMessageHandler(){
        decodeTextAreaEl.value = encodeMessage(encodeTextAreaEl.value); 
        encodeTextAreaEl.value = "";
    }

    function decodeMessageHandler(){
        decodeTextAreaEl.value = decodeMessage(decodeTextAreaEl.value); 
    }

    encodeBtnEl.addEventListener("click", encodeMessageHandler);
    decodeBtnEl.addEventListener("click", decodeMessageHandler);
}