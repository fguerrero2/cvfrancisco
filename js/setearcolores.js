/*obtenemos el elemento a asignar un evento*/ 

const colorSwitch = document.querySelector('#switch input[type="checkbox"]');

/*asignamos al evento change (modificacion) nuestra funcion */
colorSwitch.addEventListener('change', cambiaTema);

/* funcion que setea el atributo tema segun la opcion del checkbox*/
function cambiaTema(ev){
    if(ev.target.checked){
        document.documentElement.setAttribute('tema', 'dark');
    } else {
        document.documentElement.setAttribute('tema', 'light');
    }
}

