{
    const sheepOne = document.getElementById("s1");
    var isDragging = false;

    sheepOne.addEventListener('mousedown', (event) => {
        console.log('Sheep clicked');
        var isDragging = true;

        var cxpos = Event.clientX;
        var cypos = Event.clientY;

        var sonerect = sheepOne.getBoundingClientRect();

        var osxpos = sonerect.x;
        var osypos = sonerect.y;
    });

    async function move(event) {

        await delay(500);

        var cxpos = Event.clientX;
        var cypos = Event.clientY;

        var sonerect = sheepOne.getBoundingClientRect();

        var sxpos = sonerect.x;
        var sypos = sonerect.y;

        sheepOne.style.left = sxpos + (cxpos-sxpos);
        sheepOne.style.top = sypos + (cypos-sxpos);
        console.log('moving mouse!');
    };

    sheepOne.addEventListener('mousemove', (move));

    function dropped(event) {
        var cxpos = Event.clientX;
        var cypos = Event.clientY;

        var newsxpos = osxpos + (cxpos-osxpos);
        var newsypos = osypos + (cxpos-osxpos);

        sheepOne.style.left = `${newsxpos}px`;
        sheepOne.style.top = `${newsypos}px`;
    };

    sheepOne.addEventListener('mouseup', (dropped));

}

{
    var sheepOne = document.getElementById("s1");

    sheepOne.addEventListener('dragstop', (event) => {

        let cloneSheepOne = sheepOne.cloneNode(false);

        cloneSheepOne.style.top = eval("sheepOne - eventClient.Y")
    })
}