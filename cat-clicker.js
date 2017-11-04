

(function() {

    var currentCat = '';

    var cats = [
                        {
                            name : 'Tabby',
                            src: 'image/tabby.jpg',
                            clickCount: 0
                        },
                        {
                            name:'Shadow',
                            src:'image/shadow.jpg',
                            clickCount: 0
                        },
                        {
                            name : 'Scaredy',
                            src : 'image/scaredy.jpg',
                            clickCount : 0,
                        },
                        {

                            name : 'Tiger',
                            src : 'image/tiger.jpg',
                            clickCount : 0,
                        },
                        {
                            name : 'Sleepy',
                            src : 'image/sleepy.jpg',
                            clickCount : 0,
                        }

                   ];

    var image = document.getElementById('cat-img');
    var heading = document.getElementById('cat-name');
    var count = document.getElementById('cat-count');


    //console.log(cats.length);

    function initial() {
        var list = '';
        for(var i = 0;i < cats.length;i++) {
            list += `<li>${cats[i].name}</li>`;
        }
        document.querySelector('#cat-list').insertAdjacentHTML('afterbegin',list);
        getCurrentCat();
    }

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    function getCurrentCat(cat) {
         $('li').on('click',function() {
            var target = getEventTarget(cat);
            currentCat = target.innerHTML;
            //alert(currentCat);
            document.getElementById('cat-name').innerHTML = currentCat;
            getCatView();
        });
    }

    function getCatView() {
        var current_cat = $('h2').html();
        //console.log(current_cat);
        for(var i = 0; i < cats.length; i++) {
            if(current_cat === cats[i].name) {
                document.getElementById('cat-img').src = cats[i].src;
                document.getElementById('cat-count').textContent = cats[i].clickCount;
                var cnt = cats[i].clickCount;
                $('#cat-img').on('click',function() {
                    cnt += 1;
                    document.getElementById('cat-count').textContent = cnt;
                });
            }

        }

    }

    initial();
})();



