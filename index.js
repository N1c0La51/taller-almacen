class Equipo {
    nombre;
    precioVenta;
    precioAlquiler;
    vendido = false;
    alquilado = false;
    motivoRechazoVenta = '';
    motivoRechazoAlquiler = '';

    constructor(nombre, precioVenta, precioAlquiler) {
        if (!nombre) {
            throw new Error(`El equipo requiere un nombre`);
        }
        if (!precioVenta || precioVenta <= 0) {
            throw new Error(`El equipo requiere un precio de venta válido`);
        }
        if (!precioAlquiler || precioAlquiler <= 0) {
            throw new Error(`El equipo requiere un precio de alquiler válido`);
        }

        this.nombre = nombre;
        this.precioVenta = precioVenta;
        this.precioAlquiler = precioAlquiler;
    }

    vender() {
        if (this.vendido) {
            console.log(`El equipo ${this.nombre} ya ha sido vendido.`);
            return;
        }
        this.vendido = true;
        console.log(`Se ha vendido el equipo ${this.nombre} por $${this.precioVenta}.`);
    }

    alquilar() {
        if (this.alquilado) {
            console.log(`El equipo ${this.nombre} ya ha sido alquilado.`);
            return;
        }
        this.alquilado = true;
        console.log(`Se ha alquilado el equipo ${this.nombre} por $${this.precioAlquiler} al día.`);
    }
}

class Almacen {

    equipos = [];
    ingresosVenta = 0;
    ingresosAlquiler = 0;

    venderEquipo(equipo) {
        if (!equipo instanceof Equipo) {
            console.log(`El objeto no es un equipo válido.`);
            return;
        }
        if (equipo.vendido) {
            console.log(`El equipo ${equipo.nombre} ya ha sido vendido.`);
            return;
        }
        equipo.vender();
        this.ingresosVenta += equipo.precioVenta;
    }

    alquilarEquipo(equipo) {
        if (!equipo instanceof Equipo) {
            console.log(`El objeto no es un equipo válido.`);
            return;
        }
        if (equipo.alquilado) {
            console.log(`El equipo ${equipo.nombre} ya ha sido alquilado.`);
            return;
        }
        equipo.alquilar();
        this.ingresosAlquiler += equipo.precioAlquiler;
    }

    obtenerIngresos() {
        console.log(`Ingresos por ventas: $${this.ingresosVenta}`);
        console.log(`Ingresos por alquileres: $${this.ingresosAlquiler}`);
    }
}

const almacen = new Almacen();
const equipo1 = new Equipo('Martillo', 50, 5);
const equipo2 = new Equipo('Taladro', 100, 10);

almacen.venderEquipo(equipo1);
almacen.alquilarEquipo(equipo2);
almacen.obtenerIngresos();