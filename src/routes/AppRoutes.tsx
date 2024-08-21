import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ReservaCita } from "../ReservaCita/ReservaCita";
import { PanelEspera } from "../PanelEspera/PanelEspera";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/reserva-cita" />} />
				<Route path="/reserva-cita" element={<ReservaCita />} />
				<Route path="/panel-espera" element={<PanelEspera module={"Principal"} />} />
			</Routes>
		</BrowserRouter>
	);
};
