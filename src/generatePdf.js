const puppeteer = require('puppeteer');

async function generatePDF() {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    // Load HTML from the local server
    await page.goto('http://localhost:3000', { waitUntil: 'load' });

    // Generate the PDF
    await page.pdf({
        path: 'bangla.pdf',
        format: 'A4',
        printBackground: true,
    });

    await browser.close();
    console.log('✅ Bangla PDF generated successfully: bangla.pdf');
}

generatePDF();
