import { useEffect, useState } from "react";
import style from "./ReservaCita.module.css";
import { exportPdf } from "../helpers/getFactura";

export const ReservaCita = () => {
	const [loading, setLoading] = useState(false);
	const [ticketReady, setTicketReady] = useState(false);

	const [currentTicket, setCurrentTicket] = useState(1);

	const handleOptionClick = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			setTicketReady(true);
		}, 3000);
	};

	useEffect(() => {
		if (ticketReady) {
			setTimeout(() => {
				setTicketReady(false);
				exportPdf(currentTicket);
				setCurrentTicket((prev) => prev + 1);
			}, 5000);
		}
	}, [ticketReady]);

	return (
		<section className={style.reservaCita__container}>
			<div className={style.reservaCita__title__container}>
				<h1 className={style.reservaCita__title}>Bienvenidos a Notaría Rodriguez Cruzado</h1>
				<p className={style.reservaCita__text}>Seleccione la opción para ayudarte</p>
			</div>

			{loading || ticketReady ? (
				<>
					{loading && <p className={style.loadingText}>Preparando su ticket...</p>}
					{ticketReady && <p className={style.readyText}>Imprimiento su ticket</p>}
				</>
			) : (
				<div className={style.workModule__container}>
					{workModule &&
						workModule.map((module, index) => (
							<div key={index} className={style.workModule__item} onClick={handleOptionClick}>
								{module.title}
							</div>
						))}
				</div>
			)}
		</section>
	);
};

const workModule = [
	{ title: "Instrumento Extraprotocolar" },
	{ title: "Instrumento Protocolar" },
	{ title: "Cartas Notariales" },
];
