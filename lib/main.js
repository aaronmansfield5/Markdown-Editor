window.onload = function () {
    document.getElementById("md-input").addEventListener("input", event => {
        document.getElementById('md-preview').mdContent = event.target.value
    })
}