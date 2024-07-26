let data;
const fetchData = async () => {
    try {
        const response = await fetch('./data.json');
        const responseData = await response.json();
        
        console.log(responseData);
        data = responseData;

        console.log(data?.tasks);

        const task_title = document.querySelector('.taskTitle');
        task_title.innerHTML = data?.tasks[0]?.task_title;

        const description = document.querySelector('.description');
        description.innerHTML = data?.tasks[0]?.task_description;

        const assetArray = data?.tasks[0]?.assets;

        assetArray.forEach(element => {
            const container = document.querySelector('.gridContainer');
            const div = document.createElement('div');
            div.classList.add('flex', 'flex-col', 'items');
            if(element.asset_type === 'display_asset') {
                div.innerHTML = `<div class="flex items-center justify-between" style="width: 100%; padding: 10px 1rem; background-color: black;">
                            <h3 style="text-align: center; background-color: black; color: white; width: 100%; font-weight: normal;">${element.asset_title}</h3>
                            <i class="fa-solid fa-circle-info" style="color: white; font-size: large;"></i>
                        </div>
                        <div style="padding: 5px 1rem;">
                            <p><span style="font-weight: 600;">Description: </span>${element.asset_description}</p>
                        </div>
                        <iframe width="560" height="315" src='${element.asset_content}' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
                container.appendChild(div);
            } else {
                div.innerHTML = `<div class="flex items-center justify-between" style="width: 100%; padding: 10px 1rem; background-color: black;">
                        <h3 style="text-align: center; background-color: black; color: white; width: 100%; font-weight: normal;">${element.asset_title}</h3>
                        <i class="fa-solid fa-circle-info" style="color: white; font-size: large;"></i>
                    </div>
                    <div style="padding: 5px 1rem;">
                        <p><span style="font-weight: 600;">Description: </span>${element.asset_description}</p>
                    </div>
                    <hr />

                    <form class="form">
            <label for="title">Title</label>
            <input type="text" id="title" name="title">
            <label for="content">Content</label>
            <div class="editor">
                <!-- The toolbar would be added by a rich text editor library -->
                <div class="toolbar">
                    <span>File</span>
                    <span>Edit</span>
                    <span>View</span>
                    <span>Insert</span>
                    <span>Format</span>
                    <span>Tools</span>
                    <span>Table</span>
                    <span>Help</span>
                </div>
                <div class="content">
                    <p>Paragraph</p>
                </div>
            </div>
        </form>`
                container.appendChild(div);
            }
            
            const journey_board = document.querySelector('.journey_board');
            const journey_board2 = document.querySelector('.journey_board2');
            const closeButton = document.querySelector('.closeButton');
            journey_board.addEventListener('click', () => {
                journey_board.classList.remove('show');
                journey_board.classList.add('hide');
                journey_board2.classList.remove('hide');
                journey_board2.classList.add('show2');
            });

            closeButton.addEventListener('click', () => {
                journey_board.classList.remove('hide');
                journey_board.classList.add('show');

                journey_board2.classList.remove('show2');
                journey_board2.classList.add('hide');
            });

            const noticeBoard = document.querySelector('.notice_board');
            const notice_board2 = document.querySelector('.notice_board2');
            const closeBtn2 = document.querySelector('.closeButton2');

            noticeBoard.addEventListener('click', () => {
                noticeBoard.classList.remove('showNotice');
                noticeBoard.classList.add('hideNotice');

                notice_board2.classList.remove('hideNotice');
                notice_board2.classList.add('showNotice2');
            });


            closeBtn2.addEventListener('click', () => {
                noticeBoard.classList.remove('hideNotice');
                noticeBoard.classList.add('showNotice');

                notice_board2.classList.remove('showNotice2');
                notice_board2.classList.add('hideNotice');
            });
            
            const showMore = document.querySelector('.showMore');
            const icons = document.querySelector('.Icons');
            
            const func = () => {
                console.log(window.innerWidth);
                if(window.innerWidth <= 500) {
                    showMore.addEventListener('click', () => {
                        icons.style.top = '15vh';
                    })
                }
            }

            setInterval(func, 1000)

            const crossBtn = document.getElementById('cross');
            crossBtn.addEventListener('click', () => {
                icons.style.top = '-1000px'    
            })

        });


    } catch (error) {
        console.log(error);
    }
}
fetchData();