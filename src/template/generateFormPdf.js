import PDFDocument from "pdfkit";

function generatePdf(answers) {
  const doc = new PDFDocument();
  const chunks = [];

  doc.on("data", chunks.push.bind(chunks));
  doc.on("end", () => {});

  doc.fontSize(20).text("Form Submission", { underline: true });
  doc.moveDown();

  answers.forEach((a) => {
    doc.fontSize(12).text(`${a.label}: ${a.answer}`);
    doc.moveDown(0.5);
  });

  doc.end();
  return Buffer.concat(chunks);
}
