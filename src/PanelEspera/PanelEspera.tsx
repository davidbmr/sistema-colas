import { useEffect, useState } from "react";
import { DemoOptions } from "../components/DemoOptions/DemoOptions";
import style from "./PanelEspera.module.css";
import { motion } from "framer-motion";
import { useModal } from "../helpers/useModal";
import { CurrentModal } from "../components/CurrentModal/CurrentModal";
import video from "../assets/video/video-demo.mp4";

interface Props {
	module?: string;
}
export const PanelEspera = ({ module }: Props) => {
	console.log(module);
	const modal = useModal();
	const [currentNumber, setCurrentNumber] = useState(1);
	const [currentTicket, setCurrentTicket] = useState<any>([
		{ turno: "", caja: "" },
		{ turno: "", caja: "" },
		{ turno: "", caja: "" },
		{ turno: "", caja: "" },
	]);

	const handleChangeCurrentTicket = (caja: string) => {
		const nuevoDato = { turno: `B${currentNumber}`, caja: caja };
		if (currentTicket.length >= 4) {
			const reCurrentTicket = [...currentTicket];
			reCurrentTicket.pop();
			reCurrentTicket.unshift(nuevoDato);
			setCurrentTicket(reCurrentTicket);
			setCurrentNumber((prev) => prev + 1);
		}
	};
	useEffect(() => {
		if (currentTicket[0].turno) {
			modal.onVisibleModal();
		}
	}, [currentTicket]);

	useEffect(() => {
		if (modal.modalStatus == true) {
			setTimeout(() => {
				modal.onHideModal();
			}, 7000);
		}
	}, [modal.modalStatus]);

	return (
		<>
			<div className={style.panelEspera__container}>
				<DemoOptions onClick={handleChangeCurrentTicket} />
				<div className={style.panelEspera__contenido}>
					<video autoPlay loop muted playsInline className={style.video__content}>
						<source src={video} type="video/mp4" />
					</video>
				</div>
				<div className={style.panelEspera__cta}>
					<motion.div
						className={style.marquee}
						animate={{ x: ["100%", "-100%"] }} // Movimiento desde la derecha hacia la izquierda
						transition={{
							duration: 20, // Duración del ciclo completo
							repeat: Infinity, // Repetir infinitamente
							ease: "linear", // Movimiento lineal
						}}
					>
						Bienvenidos a Notaría Rodriguez Cruzado, en breve lo atenderemos
					</motion.div>
				</div>
				{/* <div className={style.panelEspera__cta}>
				Bienvenidos a Notaría Rodriguez Cruzado, en breve lo atenderemos
			</div> */}
				<div className={style.panelEspera__turnos}>
					{currentTicket &&
						currentTicket.map((ticket: any) => (
							<div className={style.panelEspera__turnos__item}>
								<p>
									{ticket.turno} ➜ {ticket.caja}
								</p>
							</div>
						))}
				</div>
			</div>
			{modal.modalStatus && <CurrentModal positionData={currentTicket[0]} />}
		</>
	);
};
