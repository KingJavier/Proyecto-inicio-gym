var datos = new Object, item = new Array, contador = 0;

var myModal = new bootstrap.Modal(document.getElementById('exampleModal'), {
    keyboard: false
});

$('#guardar').submit(function (e) {
    e.preventDefault();

    var error = false;
    var mensaje = "BIENVENIDO A LA FAMILIA GYM STYLE'S <br> SU CUENTA A SIDO CREADA CON EXITO <br> para continuar con su proseso de inscripcion por favor realizar el pago el los lugares establecidos";

    var nombre = $('#nombre').val();
    var apellido = $('#apellido').val();
    var email = $('#email').val();
    var telefono_1 = $('#telefono_1').val();
    var telefono_2 = $('#telefono_2').val();
    var direccion = $('#direccion').val();
    var tipo_documento = $('#tipo_documento').val();
    var documento = $('#documento').val();

    $.each(datos, function (key, value) {
        if (value['documento'] == documento) {
            error = true;
            mensaje = 'El usuario ya esta registrado.';

            return false;
        }
    });

    if (!error) {
        item = {
            '1. nombre': nombre,
            '2. apellido': apellido,
            '3. email': email,
            '4. telefono_1': telefono_1,
            '5. telefono_2': telefono_2,
            '6. direccion': direccion,
            '7. tipo documento': tipo_documento,
            documento: documento
        };

        datos[contador++] = item;
    }

    $('.modal-body').html(mensaje);
    myModal.toggle();

    console.log(datos);
});