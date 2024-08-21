import style from "./CurrentModal.module.css";

interface Props {
	positionData?: any;
}

export const CurrentModal = ({ positionData }: Props) => {
	return (
		<div className={style.currentModal__container}>
      <div className={style.currentModal__overflow}></div>
			<div className={style.panelEspera__turnos__item}>
        <h2>Nueva atención:</h2>
        <br/>
				<p>
					{positionData.turno} ➜ {positionData.caja}
				</p>
			</div>
		</div>
	);
};
