function sidebar(){
    const toggle = document.getElementById('toggle-check');
    const sideNav = document.getElementById('side-nav');

    toggle.addEventListener('change', (e) => {
        if(e.target.checked){
            console.log('checked')
            sideNav.style.visibility='visible';
            sideNav.style.display='block';
            sideNav.style.height='90%';
            sideNav.animate(
                [
                    {width: 0},
                    { width: '100%'}
                ],
                {
                    duration: 500,
                    fill: 'forwards'
                }
            )

            // sideNav.style.width='100%';

        } else {          
            sideNav.style.width = 0
            sideNav.style.height = 0;
            sideNav.style.visibility='hidden';
            sideNav.style.display='none';
        }
    })
}

export default sidebar