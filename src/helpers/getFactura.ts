import jsPDF from "jspdf";

export const exportPdf = (currentTicket: number = 0) => {
	const currentDate = new Date();
	const formattedDate = currentDate.toLocaleString("es-ES", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
		hour12: false,
	});

	const doc = new jsPDF({
		unit: "mm",
		format: [120, 120], // 80mm de ancho, altura inicial de 297mm (A4)
	});

	// Ajustes generales
	const pageWidth = 120; // Ancho de 80mm

	// Fecha y Hora
	doc.setFontSize(12);
	doc.text(`Fecha y Hora: ${formattedDate}`, pageWidth / 2, 10, { align: "center" });

	// Bienvenida
	doc.setFontSize(12);
	doc.text("Bienvenido a la Notaría Rodriguez Cruzado", pageWidth / 2, 15, { align: "center" });

	// Admisión
	doc.setFontSize(12);
	doc.text("NOTARIA", pageWidth / 2, 25, { align: "center" });

	// Código grande
	doc.setFontSize(50);
	doc.text(`B${currentTicket}`, pageWidth / 2, 45, { align: "center" });

	// Espera
	doc.setFontSize(12);
	doc.text("Por favor espere que su Ticket", pageWidth / 2, 55, { align: "center" });
	doc.text("aparezca en el televisor", pageWidth / 2, 60, { align: "center" });

	// Advertencia de DNI
	doc.setFontSize(12);
	doc.text("Toda atención es", pageWidth / 2, 80, { align: "center" });
	doc.text("personal y mostrando DNI", pageWidth / 2, 75, { align: "center" });

	// Mensaje de servicio
	doc.setFontSize(12);
	doc.text("Comprometidos en brindarle", pageWidth / 2, 90, { align: "center" });
	doc.text("un mejor servicio.", pageWidth / 2, 95, { align: "center" });

	// Abrir el PDF en una nueva ventana
	window.open(doc.output("bloburl"), "_blank");
};
