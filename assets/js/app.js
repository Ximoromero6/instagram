$(document).ready(function() {
    const URL = 'https://picsum.photos/v2/list';
    $.ajax({
        method: 'GET',
        url: URL
    }).done(function(response) {
        $.each(response, function(index, value) {
            console.log(value.download_url);

            let post = `
            <div class="post">
            <div class="top">
                <div class="left">
                    <a href="#">
                        <img src="assets/images/cat.png" alt="">
                    </a>
                    <div class="text">
                        <p>Ximoromero5</p>
                        <p>Valencia, España</p>
                    </div>
                </div>
                <div class="right">
                    <img src="assets/images/icons/more-black.svg" alt="options-three-dots">
                </div>
            </div>
            <div class="middle">
                <img src="${value.download_url}" alt="photo-post">
            </div>
            <div class="bottom">
                <div class="firstLine">
                    <div class="left">
                        <img src="assets/images/icons/heart-black.svg" alt="">
                        <img src="assets/images/icons/chat-black.svg" alt="">
                        <img src="assets/images/icons/send-black.svg" alt="">
                    </div>
                    <div class="center">
                        <div class="dots">
                            <span class="dot"></span>
                            <span class="dot"></span>
                            <span class="dot"></span>
                        </div>
                    </div>
                    <div class="right">
                        <img src="assets/images/icons/bookmark-black.svg" alt="">
                    </div>
                </div>
                <div class="secondLine">
                    <img src="assets/images/cat.png" alt=""> <label>Le gusta a <b>test</b> y <b>3.485</b> personas más</label>
                </div>
                <div class="thirdLine">
                    <p><b>testerAccount</b>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti nulla sint facilis natus atque ratione, repudiandae ad.</p>
                </div>
            </div>
        </div>
            `;

            $('#posts').append(post);
        });
    });

    /* $('#posts .post .middle img').click(function(e) {
        $(this).addClass('animate__animated', 'animate__pulse');
    }); */
});