// json 불러오기
let json_data;
fetch("../json/visitors.json")
.then (res => res.json())
.then (json => {
    json_data = json;
    window.addEventListener("DOMContentLoaded", () => loadWindow(json_data))
    // console.log(json_data)
})