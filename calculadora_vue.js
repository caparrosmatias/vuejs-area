const app = new Vue({
    el: '#app',
    data: {  
      metros: [],
      resultado: '',
      baulera: ''
    },
    methods: {
      sumar: function(){
          const checkboxes = document.querySelectorAll(`input[name="tamano"]:checked`);
          let values = [];
          var contador = 0;
          checkboxes.forEach((checkbox) => {
              values.push(checkbox.value);
              contador = contador + parseInt(checkbox.value,10);
          });
          this.resultado = contador
        },
      seleccionar: function(){
          if (this.resultado < 11){
            this.baulera = 10
          }
          else if (this.resultado < 16){
            this.baulera = 15
          }
          else if (this.resultado < 22) {
            this.baulera = 21
          }
          else {
            this.baulera = 0
          }
      }
      }
    }
  )