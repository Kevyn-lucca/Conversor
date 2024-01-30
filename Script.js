function converterTemperatura() {
  var valor = parseFloat(document.getElementById("valor").value);
  var unidade = document.getElementById("unidade").value;

  console.log("Valor:", valor);
  console.log("Unidade:", unidade);

  if (isNaN(valor)) {
      document.getElementById("resultadoFahrenheit").value = "";
      document.getElementById("resultadoKelvin").value = "";
      document.getElementById("resultadoCelsius").value = "";
      return;
  }

  var resultadoFahrenheit;
  if (unidade === "celsius") {
      resultadoFahrenheit = (valor * 9/5) + 32;
  } else if (unidade === "fahrenheit") {
      resultadoFahrenheit = valor;
  } else if (unidade === "kelvin") {
      resultadoFahrenheit = (valor - 273.15) * 9/5 + 32;
  }

  var resultadoCelsius = (resultadoFahrenheit - 32) * 5/9;
  var resultadoKelvin = resultadoCelsius + 273.15;

  document.getElementById("resultadoFahrenheit").value = resultadoFahrenheit.toFixed(2);
  document.getElementById("resultadoKelvin").value = resultadoKelvin.toFixed(2);
  document.getElementById("resultadoCelsius").value = resultadoCelsius.toFixed(2);
}
