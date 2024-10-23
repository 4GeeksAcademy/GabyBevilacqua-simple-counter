import React, { useEffect, useState, useRef } from "react";
import SecondsCounter from "./SecondsCounter";
import Buttons from "./Buttons";


const Home = () => {
	const [seconds, setSeconds] = useState(0);
	const [isRunning, setIsRunning] = useState(true);
	const [reverse, setReverse] = useState(null);
	const intervalRef = useRef(null);   

	// Función para convertir segundos en 6 dígitos
	const formatDigits = (num) => {
		const str = num.toString().padStart(6, "0");
		return str.split("");
	};

	// Iniciar el contador
	useEffect(() => {                                    // aqui sucede la magia 
		if (isRunning) {
			intervalRef.current = setInterval(() => {
				setSeconds(prev => {
					if (prev === 0 && reverse !== null) {
						handleStop()
						alert("¡La cuenta regresiva ha llegado a 0!");
						return prev
					}
					if (reverse !== null && prev > 0) {
						return prev - 1
					}
					if (reverse === null) {
						return prev + 1
					}
				})
			}, 1000);

			/* = setInterval(() => {   esto no funcionaba porque se daba un bucle infinito entre 0 y 1 cuando se usa en input de reverse
				setSeconds((prev) => (reverse !== null && prev > 0 ? prev - 1 : prev + 1));
			}, 1000);*/
		}

		return () => clearInterval(intervalRef.current);
	}, [isRunning, reverse]); // estos dos parametos establecen lo que va a hacer la funcion (hook) useEffect

	// Función para reiniciar el contador
	const handleReset = () => { // se usa el nombre handle mas la funcionalidad del boton handleAccion, es el uso usual en el lenguaje
		if (reverse === null) {    // para establecer que si no hay algo en la cuenta atras funciona como contador normal
			setIsRunning(true);    // true es su valor inicial para que arranque el contador
			setSeconds(0);         // 0 porque empieza el contador en 0 cuando damos reiniciar
			setReverse(null);       // null porque el sentido reverse no debe funcionar

		} else {                      // else (y sino) para colocar como funciona cuando hay algo en el contador
			setSeconds(reverse);      // reverse para que tome el input que coloca el usuario
			setReverse(reverse);      // reverse para que desde ese input empiece a contar
			setIsRunning(true);      // true para que ruede el estado 
		}
	};

	// Función para parar el contador
	const handleStop = () => {
		setIsRunning(false);        // false para que NO ruede el estado
		clearInterval(intervalRef.current);
	};

	// Función para resumir el contador
	const handleResume = () => {
		setIsRunning(true);        // true para que ruede el estado de nuevo
	};

	// Función para manejar el input de cuenta regresiva
	const handleReverse = (event) => {
		const value = Number(event.target.value); // parseInt se puede cambiar por Number y funciona igual
		if (!isNaN(value) && value >= 0) {  // si hay un valor y el valor es mayor a 0 empieza a funcionar los estados de handleReverse
			setReverse(value);   // el valor colocado por el usuario para empezar
			setSeconds(value);   // el valor colocado desde donde empieza
			setIsRunning(true);   // rodar la cuenta
		}
	};

	return (
		<div className="container-fluid">
			<h1 className="text-center text-light mt-3">SIMPLE COUNTER</h1>
			<div className="cardsContainer">
				<SecondsCounter digits={formatDigits(seconds)} />
			</div>
			<div className="button text-center mt-4">
				<Buttons
					handleReset={handleReset}
					handleStop={handleStop}
					handleResume={handleResume}					
				/>
				<div className="mt-2">
					<label htmlFor="reverse" className="text-light me-2">Cuenta regresiva:</label>
					<input
						type="number"
						id="reverse"
						name="reverse"
						placeholder="Número"
						onChange={handleReverse}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;


/*    asi era el codigo solo para que funcionara el contaror hacia adelante

const Home = () => {
	const [seconds, setSeconds] = useState(0)

	const formatDigits = (num) => {
		const str = num.toString().padStart(6, "0");
		return str.split("");
	};
	
	useEffect(() => {	

		setInterval(() => {
			setSeconds (prev => prev + 1 )
		
		}, 1000);
		
		} , [])

		return (
			<div className = "text-center">
				<SecondsCounter digits= {seconds} />
			</div>
		)
	
	}
*/