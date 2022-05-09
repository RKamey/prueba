function refreshSustitucion() {
    formularioSecante.reset();
}
  /*
  function allInputs() {
      let result = document.getElementById("Result");
      let fx = document.getElementById("Fx").value;
      let xi = document.getElementById("xi3").value;
      let xu = document.getElementById("xu3").value;
      let error = document.getElementById("error3").value;
    
      if (fx == "" || xi == "" || xu == "" || error == "") {
        result.innerHTML = `<h2>ERROR</h2><p>Ingrese todos los campos correctamente</p>`;
      }
    }
  */
  function formula() {
      let fx = document.getElementById("Fx4").value; // FUNCTION
      let xi = parseFloat(document.getElementById("xi4").value); //X INFERIOR
      let error = parseFloat(document.getElementById("error4").value); //TOLERANCIA DE ERROR PER ITERACION
      
      document.getElementById("resultados").style.display = "block";
      let result = document.getElementById("Result"); //ITERACION IMPRESA
      result.textContent = "";
      let xa=0;
      let porcentualError = 0;
      let iteracion = 0;
      fx = fx.replace("^", "**");
    if (fx.length == 0 || xi == '' || error == '') {
      result.innerHTML ="<h1>NO HAY DATOS</h1>";
    } else {
      do {
        iteracion++;
        //HACER LA FUNCION DE F(xi)
        let fXI = eval(fx.replace(/x/g, xi));
        let xr = eval(fx.replace(/x/g, xi));
        
        porcentualError = Math.abs(((xr - xa) / xr) * 100);
        xa = xr;
        
        if (porcentualError > error) {
            xi = xa;
          }
  
        result.innerHTML += `<h2>ITERACIÓN ${iteracion}</h2><p><b>XR = </b>${xr}<br><b>Error = </b>${porcentualError}%<br>`;
      } while (porcentualError >= error);
    }
    
    }