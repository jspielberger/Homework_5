$(document).ready(function () {

    let currentTime = new Date();
    let thetime = currentTime.toLocaleString('en-US', { dateStyle: "full", timeStyle: "full" })
    $("#currentDay").text(thetime);

    function myTimer() {
        let currentTime = new Date();
        let thetime = currentTime.toLocaleString('en-US', { dateStyle: "full", timeStyle: "full" })
        $("#currentDay").text(thetime);
    }
    let displayTime = setInterval(myTimer, 1000);


    let savedText = JSON.parse(localStorage.getItem('data')) || {}

    $(document).on("click", ".saveBtn", function () {
        let textid = $(this).attr('id').replace('save', 'text')
        let text = $(`#${textid}`).val().trim()
        console.log(text)
        savedText[textid] = text;
        localStorage.setItem('data', JSON.stringify(savedText))
    })

    for (let i = 9; i < 20; i++) {

        $(".time-block").append(
            `<div class='row'>
                <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text hour">${i}:00</span>
            </div>
            <textarea class="form-control col-sm-10" id="text${i}" aria-label="With textarea">${savedText[`text${i}`] || ''}</textarea>
            <button type='button' id='save${i}' class='btn btn-primary col-sm-1 saveBtn'>Save</button>
            </div>
            </div>`
        )



    }

});





//set interval function for thetime...${savedText['text${i}'] ||''}
