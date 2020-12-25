// set the initial counter
let count = 0;
const btns = document.querySelectorAll( '.btn' );
const counter = document.getElementById( 'value' );


btns.forEach( (btn) => {
    btn.addEventListener( 'click', (e) => {        
        const styles = e.currentTarget.classList;
        if ( styles.contains( 'decrease' ) ) {
            count--;            
        } else if ( styles.contains( 'increase' ) ) {
            count++;
        } else {
            count = 0;
        }
        // change colors base on count
        if ( count > 0 ) {
            counter.style.color = 'green'
        } else if ( count < 0 ) {
            counter.style.color = 'red'
        } else {
            counter.style.color = '#000'
        }
        counter.textContent = count;
    })
})
