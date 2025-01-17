
const PDFDocument = require('pdfkit')
const sizes = require("./sizes.json")
//const fetch = require("node-fetch")
  async function getBuffer(url) {
	const response = await fetch(url)
	const arr = await response.arrayBuffer()
	const buffer = Buffer.from(arr)
	return buffer
  }
async function topdf(pages, size) {
    const doc = new PDFDocument({ margin: 0, size })
	for (let page of pages) {
		console.log(page)
		const image = await getBuffer(page)
		doc.image(image, 0, 0, { fit: sizes[size], align: 'center', valign: 'center' })
		if (pages.length != pages.length + 1) doc.addPage()
	}
     doc.end()

    return doc
}
module.exports = {topdf}