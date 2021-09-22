/*

let user = prompt("Ingrese su nombre de usuario")
let password = prompt("Ingrese contraseña")
let repeatPassword = prompt("Ingrese su contraseña nuevamente")

if(password === repeatPassword) {
    alert("Ud. se ha logueado correctamente")
} else {
    alert("Su contraseña no coincide, no puede loguearse")
}

*/

let userName = "Alexis"
let user = prompt("Ingrese su usuario")
let saldoActual = 21300

if(user == userName) {
    let contrasena = prompt("Ingrese su contraseña")

    if(contrasena == "1234") {
            let accion = prompt("Que desea hacer? \n 1-VerSaldoActual \n 2-RetirarDinero \n 3-DepositarEnSuCuenta \n 4-CambiarSuClave")    
        
        if(accion == "1") {
            let saldoActual = 21300
            alert(("Su saldo actual es de ") + parseInt(saldoActual))
        }
        if(accion == "2") {
            let extraccion = prompt("Ingrese el monto a extraer")
            let resto = saldoActual - parseInt(extraccion)
            alert("Tu saldo actual es de: " + parseInt(resto))
        }

        if(accion == "3") {
            let depositar = prompt("Ingrese monto a depositar")
            let deposito = saldoActual + parseInt(depositar)
            alert("Tu saldo actual es de: " + parseInt(deposito))
        }

        if(accion == "4") {
            let cambiar = prompt("Ingrese su clave actual")
            let cambio = prompt("Ingrese su clave nueva")
            let repetirCambio = prompt("Ingrese su nueva clave nuevamente")
            if(cambio == repetirCambio) {
                alert("Su cambio ha sido exitoso")
            } else {
                alert("Su cambio no ha sido exitoso")
                
            }
            
        }


let confirmar = confirm("Desea volver al menu?")    

    /* else {
        alert("Su contraseña es incorrecta")
    }
} 
else {
    alert("El usuario es incorrecto")
}

*/

}} 