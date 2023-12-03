module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const path = req.query.path || 'index.html'; // Set index.html as the default path

    // Serve the requested file
    const fs = require('fs');
    const filePath = path.join(__dirname, path); // Adjust this to your static files directory

    try {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        context.res = {
            headers: {
                'Content-Type': 'text/html' // Adjust content type based on file type
            },
            body: fileContent
        };
    } catch (error) {
        context.res = {
            status: 404,
            body: 'File not found'
        };
    }
};
