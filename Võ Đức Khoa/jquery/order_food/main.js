$(document).ready( function() {
        // loading food
        data.forEach( e => {
         $('#list').append(
            `
            <div class = 'food'> 
                <div class = 'flex'> 
                <img src = ${e.src} alt = ${e.alt}> <br>
                <span>${e.name}: </span> <span class = 'right'>${e.price.toLocaleString()}</span>
                </div>
                <div class = 'flex'> 
                  <input type = 'number' name = ${e.input_name} id = ${e.input_id}>
                  <i class="fas fa-plus-square"></i>                  
                </div>
            </div>
            `
         );
        });
    // display  your bill table
});
     
