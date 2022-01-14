const PDFDocument = require('pdfkit');
const sizes = require("./sizes.json")
//const fetch = require("node-fetch")
 function getBuffer(url) {
	const response = fetch(url)
	const arr = response.arrayBuffer()
	const buffer =  Buffer.from(arr)
	return buffer
}
const topdf = (pages, size) => {
    const doc = new PDFDocument({ margin: 0, size });
	
	for (let index = 0; index < pages.length; index++) {
		console.log(pages[index])
		const image = getBuffer(pages[index])
		doc.image(image, 0, 0, { fit: sizes[size], align: 'center', valign: 'center' });

		if (pages.length != index + 1) doc.addPage();
	}

    doc.end();

    return doc
};
module.exports = {topdf}